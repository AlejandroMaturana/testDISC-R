import jsPDF from 'jspdf';
import { ProfileScores } from './scoring';
import { DiagnosticoAvanzado } from './diagnostics';
import { getDISCProfile } from './discInterpretations';

export interface DatosPersonales {
  nombre: string;
  cargo?: string;
}

interface PDFData {
  datosPersonales: DatosPersonales;
  perfilNatural: ProfileScores;
  perfilAdaptado: ProfileScores;
  diagnostico: DiagnosticoAvanzado;
  perfilDominante: string;
}

export const generarPDFInforme = (data: PDFData): void => {
  const { datosPersonales, perfilNatural, perfilAdaptado, diagnostico, perfilDominante } = data;
  
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 15;

  // Función auxiliar para manejar saltos de página
  const checkPageBreak = (lineHeight: number, minSpace: number = 30) => {
    if (yPosition + lineHeight > pageHeight - minSpace) {
      doc.addPage();
      yPosition = 15;
    }
  };

  // ===== ENCABEZADO =====
  doc.setFillColor(59, 130, 246); // Azul
  doc.rect(0, 0, pageWidth, 30, 'F');
  
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text('Informe DISC', pageWidth / 2, 18, { align: 'center' });

  yPosition = 40;

  // ===== DATOS PERSONALES =====
  doc.setTextColor(59, 130, 246);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Participante', 15, yPosition);
  
  yPosition += 8;
  doc.setTextColor(0, 0, 0);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(11);
  
  doc.text(`Nombre: ${datosPersonales.nombre}`, 15, yPosition);
  yPosition += 6;
  
  if (datosPersonales.cargo) {
    doc.text(`Cargo: ${datosPersonales.cargo}`, 15, yPosition);
    yPosition += 6;
  }
  
  yPosition += 6;

  // ===== PERFIL DOMINANTE =====
  checkPageBreak(25);
  doc.setTextColor(59, 130, 246);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Perfil Dominante', 15, yPosition);
  
  yPosition += 8;
  doc.setTextColor(0, 0, 0);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(perfilDominante, 15, yPosition);
  
  // Obtener interpretación del perfil
  const perfilData = getDISCProfile(perfilDominante);
  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont('Helvetica', 'italic');
  const descriptionLines = doc.splitTextToSize(perfilData.alias || '', pageWidth - 30);
  doc.text(descriptionLines, 15, yPosition);
  yPosition += descriptionLines.length * 4 + 5;

  // ===== COMPARATIVA DE PERFILES =====
  checkPageBreak(30);
  doc.setTextColor(59, 130, 246);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Comparativa de Perfiles', 15, yPosition);
  
  yPosition += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);

  // Tabla de comparativa
  const tableData = [
    ['Dimensión', 'Natural', 'Adaptado', 'Brecha'],
    [
      'Dominancia (D)',
      perfilNatural.D.toString(),
      perfilAdaptado.D.toString(),
      diagnostico.desfase.brechaD.toFixed(1),
    ],
    [
      'Influencia (I)',
      perfilNatural.I.toString(),
      perfilAdaptado.I.toString(),
      diagnostico.desfase.brechaI.toFixed(1),
    ],
    [
      'Estabilidad (S)',
      perfilNatural.S.toString(),
      perfilAdaptado.S.toString(),
      diagnostico.desfase.brechaS.toFixed(1),
    ],
    [
      'Cumplimiento (C)',
      perfilNatural.C.toString(),
      perfilAdaptado.C.toString(),
      diagnostico.desfase.brechaC.toFixed(1),
    ],
  ];

  const colWidth = (pageWidth - 30) / 4;

  tableData.forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      doc.setFillColor(59, 130, 246);
      doc.setTextColor(255, 255, 255);
      doc.setFont('Helvetica', 'bold');
    } else {
      if (rowIndex % 2 === 0) {
        doc.setFillColor(240, 245, 255);
      } else {
        doc.setFillColor(255, 255, 255);
      }
      doc.setTextColor(0, 0, 0);
      doc.setFont('Helvetica', 'normal');
    }

    row.forEach((cell, cellIndex) => {
      const x = 15 + cellIndex * colWidth;
      doc.rect(x, yPosition, colWidth, 7);
      doc.text(cell.toString(), x + colWidth / 2, yPosition + 5, { align: 'center' });
    });

    yPosition += 7;
  });

  yPosition += 5;

  // ===== DIAGNÓSTICO =====
  checkPageBreak(40);
  doc.setTextColor(59, 130, 246);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Análisis Diagnóstico', 15, yPosition);

  yPosition += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);

  // Desfase Conductual
  doc.setFont('Helvetica', 'bold');
  doc.text('Desfase Conductual:', 15, yPosition);
  yPosition += 5;
  doc.setFont('Helvetica', 'normal');
  doc.text(
    `Desfase promedio: ${diagnostico.desfase.desfasePromedio.toFixed(1)} (${diagnostico.desfase.interpretacion})`,
    20,
    yPosition
  );
  yPosition += 5;
  doc.text(
    `Desfase total: ${diagnostico.desfase.desfaseTotal.toFixed(1)} puntos`,
    20,
    yPosition
  );
  yPosition += 8;

  // Autenticidad
  checkPageBreak(12);
  doc.setFont('Helvetica', 'bold');
  doc.text('Score de Autenticidad:', 15, yPosition);
  yPosition += 5;
  doc.setFont('Helvetica', 'normal');
  const autenticidadValue = typeof diagnostico.autenticidad === 'number' ? diagnostico.autenticidad : diagnostico.autenticidad.score;
  doc.text(`${autenticidadValue.toFixed(0)} / 100`, 20, yPosition);
  yPosition += 8;

  // Perfil Energético
  checkPageBreak(15);
  doc.setFont('Helvetica', 'bold');
  doc.text('Perfil Energético:', 15, yPosition);
  yPosition += 5;
  doc.setFont('Helvetica', 'normal');
  doc.text(
    `Perfil: ${diagnostico.ratioEnergia.perfil} (Expresión: ${diagnostico.ratioEnergia.expresion.toFixed(0)}, Contención: ${diagnostico.ratioEnergia.contencion.toFixed(0)})`,
    20,
    yPosition
  );
  yPosition += 8;

  // Zona de Rendimiento
  checkPageBreak(12);
  doc.setFont('Helvetica', 'bold');
  doc.text('Zona de Rendimiento:', 15, yPosition);
  yPosition += 5;
  doc.setFont('Helvetica', 'normal');
  doc.text(`${diagnostico.zonaRendimiento}`, 20, yPosition);
  yPosition += 10;

  // ===== INTERPRETACIÓN NARRATIVA =====
  checkPageBreak(30);
  doc.setTextColor(59, 130, 246);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Descripción del Perfil', 15, yPosition);

  yPosition += 8;
  doc.setTextColor(0, 0, 0);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);

  const narrativa = perfilData.descripcionNarrativa || 'Sin descripción disponible.';
  const narrativaLines = doc.splitTextToSize(narrativa, pageWidth - 30);
  doc.text(narrativaLines, 15, yPosition);
  yPosition += narrativaLines.length * 4 + 8;

  // ===== FORTALEZAS =====
  checkPageBreak(30);
  if (perfilData.fortalezas && perfilData.fortalezas.length > 0) {
    doc.setTextColor(34, 197, 94); // Verde
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Fortalezas:', 15, yPosition);

    yPosition += 6;
    perfilData.fortalezas.forEach((fortaleza) => {
      checkPageBreak(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`• ${fortaleza}`, 20, yPosition);
      yPosition += 5;
    });

    yPosition += 3;
  }

  // ===== ÁREAS DE MEJORA =====
  checkPageBreak(30);
  if (perfilData.areasMejora && perfilData.areasMejora.length > 0) {
    doc.setTextColor(239, 68, 68); // Rojo
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Áreas de Mejora:', 15, yPosition);

    yPosition += 6;
    perfilData.areasMejora.forEach((area) => {
      checkPageBreak(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`• ${area}`, 20, yPosition);
      yPosition += 5;
    });

    yPosition += 3;
  }

  // ===== MOTIVADORES =====
  checkPageBreak(30);
  if (perfilData.motivadores && perfilData.motivadores.length > 0) {
    doc.setTextColor(59, 130, 246); // Azul
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Motivadores:', 15, yPosition);

    yPosition += 6;
    perfilData.motivadores.forEach((motivador) => {
      checkPageBreak(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`• ${motivador}`, 20, yPosition);
      yPosition += 5;
    });
  }

  // ===== PIE DE PÁGINA =====
  doc.setTextColor(150, 150, 150);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(
    `Generado el ${new Date().toLocaleDateString('es-ES')} | testDISC-R`,
    pageWidth / 2,
    pageHeight - 5,
    { align: 'center' }
  );

  // Descargar PDF
  const nombreArchivo = `DISC_${datosPersonales.nombre.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`;
  doc.save(nombreArchivo);
};
