import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateDISCScoring, TestResult } from '../lib/scoring';
import { getDISCProfile } from '../lib/discInterpretations';
import { generarDiagnosticoCompleto } from '../lib/diagnostics';
import { generarPDFInforme } from '../lib/pdfGenerator';
import ProfileDetail from '../components/ProfileDetail';
import { RadarChartComponent } from '../components/RadarChart';
import { DiagnosticoComponent } from '../components/DiagnosticoAvanzado';
import { PersonalizacionForm, DatosPersonales } from '../components/PersonalizacionForm';
import questionsData from '../data/question.json';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('discAnswers');

    if (!savedAnswers) {
      window.location.href = '/test'; // Redirigir si no hay respuestas
      return;
    }

    try {
      const answers = JSON.parse(savedAnswers);
      const calculated = calculateDISCScoring(answers, questionsData.blocks as any);
      setResult(calculated);
    } catch (error) {
      console.error('Error al calcular resultados:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Calculando tu perfil DISC...</p>
      </div>
    );
  }

  if (!result) {
    return <div>Error al cargar los resultados</div>;
  }

  const { natural, adapted, dominantStyle } = result;

  // Generar diagnóstico avanzado
  const diagnostico = generarDiagnosticoCompleto(natural, adapted);

  // Función para descargar PDF
  const downloadPDF = () => {
    setShowFormModal(true);
  };

  const handleFormSubmit = (datosPersonales: DatosPersonales) => {
    // Guardar datos personales en localStorage
    localStorage.setItem('datosPersonalizacion', JSON.stringify(datosPersonales));
    
    try {
      // Generar PDF con todos los datos
      generarPDFInforme({
        datosPersonales,
        perfilNatural: natural,
        perfilAdaptado: adapted,
        diagnostico,
        perfilDominante: dominantStyle,
      });
      
      setShowFormModal(false);
      
      // Mostrar confirmación
      setTimeout(() => {
        alert(`¡Perfecto, ${datosPersonales.nombre}!\n\n✅ Tu informe DISC ha sido generado y descargado exitosamente.`);
      }, 500);
    } catch (error) {
      console.error('Error al generar PDF:', error);
      alert('❌ Error al generar el PDF. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Tu Perfil DISC
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Estilo predominante: <span className="font-semibold text-blue-600">{dominantStyle}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12">
          {/* Perfil Natural */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-blue-600">
              Perfil Natural
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Tu estilo auténtico y espontáneo
            </p>
            <div className="text-center space-y-3">
              <div className="flex justify-around text-center font-bold">
                <div className="flex-1">
                  <div className="text-3xl text-red-600">{natural.D}</div>
                  <div className="text-xs text-gray-500">D</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-yellow-600">{natural.I}</div>
                  <div className="text-xs text-gray-500">I</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-green-600">{natural.S}</div>
                  <div className="text-xs text-gray-500">S</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-blue-600">{natural.C}</div>
                  <div className="text-xs text-gray-500">C</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 pt-3 border-t">
                <strong>Dominancia:</strong> {natural.D} | <strong>Influencia:</strong> {natural.I} | <strong>Estabilidad:</strong> {natural.S} | <strong>Cumplimiento:</strong> {natural.C}
              </div>
            </div>
          </div>

          {/* Perfil Adaptado */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-red-600">
              Perfil Adaptado
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Cómo te muestras actualmente (entorno laboral/social)
            </p>
            <div className="text-center space-y-3">
              <div className="flex justify-around text-center font-bold">
                <div className="flex-1">
                  <div className="text-3xl text-orange-600">{adapted.D}</div>
                  <div className="text-xs text-gray-500">D</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-purple-600">{adapted.I}</div>
                  <div className="text-xs text-gray-500">I</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-cyan-600">{adapted.S}</div>
                  <div className="text-xs text-gray-500">S</div>
                </div>
                <div className="flex-1">
                  <div className="text-3xl text-indigo-600">{adapted.C}</div>
                  <div className="text-xs text-gray-500">C</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 pt-3 border-t">
                <strong>Dominancia:</strong> {adapted.D} | <strong>Influencia:</strong> {adapted.I} | <strong>Estabilidad:</strong> {adapted.S} | <strong>Cumplimiento:</strong> {adapted.C}
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart Superpuesto */}
        <RadarChartComponent natural={natural} adapted={adapted} />

        {/* Análisis de Diagnóstico Avanzado */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-10 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Análisis Diagnóstico
          </h2>
          <DiagnosticoComponent diagnostico={diagnostico} />
        </div>

        {/* Interpretación Detallada */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-10 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Tu Perfil Detallado
          </h2>
          <ProfileDetail profile={getDISCProfile(dominantStyle)} />
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <button
            onClick={downloadPDF}
            className="px-4 sm:px-8 py-2 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
          >
            📄 Descargar Informe PDF
          </button>

          <button
            onClick={() => navigate('/test')}
            className="px-4 sm:px-8 py-2 sm:py-4 border border-gray-300 hover:bg-gray-100 font-semibold rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base active:scale-95"
          >
            Hacer nuevo análisis
          </button>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 mt-8 sm:mt-12 mb-4 sm:mb-6">
          Recuerda: Este es un instrumento de autoconocimiento. No es un diagnóstico psicológico.
        </p>
        <div className="text-center text-xs sm:text-sm text-gray-500 mt-2">
          <p>Tus respuestas son completamente anónimas y se almacenan solo en tu dispositivo.</p>
        </div>
      </div>

      {/* Modal de Personalización */}
      <PersonalizacionForm
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Results;