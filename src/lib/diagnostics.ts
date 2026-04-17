/**
 * Funciones diagnósticas avanzadas para análisis DISC
 * Calcula desfase conductual, ratios energéticos y métricas de estrés
 */

import { ProfileScores } from './scoring';

export interface DesfaseMetrics {
  brechaD: number;
  brechaI: number;
  brechaS: number;
  brechaC: number;
  desfaseTotal: number;
  desfasePromedio: number;
  estabilidad: 'Alto' | 'Medio' | 'Bajo';
  interpretacion: string;
}

export interface RatioEnergetico {
  expresion: number; // D + I
  contencion: number; // S + C
  balance: number;
  perfil: 'Extrovertido' | 'Ambiverso' | 'Introvertido';
}

export interface DiagnosticoAvanzado {
  desfase: DesfaseMetrics;
  ratioEnergia: RatioEnergetico;
  autenticidad: {
    score: number; // 0-100
    nivel: 'Muy auténtico' | 'Bastante auténtico' | 'Moderadamente auténtico' | 'Baja autenticidad';
  };
  zonaRendimiento: {
    zona: 'Comodidad' | 'Rendimiento Óptimo' | 'Estrés Alto';
    recomendacion: string;
  };
}


/**
 * Calcula las brechas entre perfil natural y adaptado
 */
export const calcularDesfaseMetrics = (
  natural: ProfileScores,
  adapted: ProfileScores
): DesfaseMetrics => {
  const brechaD = Math.abs(natural.D - adapted.D);
  const brechaI = Math.abs(natural.I - adapted.I);
  const brechaS = Math.abs(natural.S - adapted.S);
  const brechaC = Math.abs(natural.C - adapted.C);

  const desfaseTotal = brechaD + brechaI + brechaS + brechaC;
  const desfasePromedio = desfaseTotal / 4;

  let estabilidad: 'Alto' | 'Medio' | 'Bajo';
  let interpretacion: string;

  if (desfasePromedio < 2) {
    estabilidad = 'Alto';
    interpretacion =
      'Eres muy auténtico. Tu forma de ser natural es muy similar a cómo te adaptas, lo que sugiere gran congruencia personal.';
  } else if (desfasePromedio < 6) {
    estabilidad = 'Medio';
    interpretacion =
      'Tienes una adaptación saludable. Ajustas tu comportamiento según el contexto, pero manteniendo tu esencia.';
  } else {
    estabilidad = 'Bajo';
    interpretacion =
      'Experimentas adaptación significativa. Podrías estar ajustando mucho tu comportamiento en ciertos contextos.';
  }

  return {
    brechaD,
    brechaI,
    brechaS,
    brechaC,
    desfaseTotal,
    desfasePromedio,
    estabilidad,
    interpretacion,
  };
};

/**
 * Calcula ratio energético (expresión vs contención)
 * Usa desplazamiento al rango positivo para preservar la dirección relativa
 * incluso cuando los scores son negativos (ej: perfil muy introvertido).
 */
export const calcularRatioEnergetico = (natural: ProfileScores): RatioEnergetico => {
  const expresion = natural.D + natural.I;
  const contencion = natural.S + natural.C;

  // Desplazar al rango positivo [1, 81] para calcular el ratio sin perder el sentido
  // de los valores negativos (rango original de suma: -40 a +40)
  const SHIFT = 41;
  const balance = (expresion + SHIFT) / (contencion + SHIFT);

  let perfil: 'Extrovertido' | 'Ambiverso' | 'Introvertido';
  if (balance > 1.25) {
    perfil = 'Extrovertido';
  } else if (balance < 0.80) {
    perfil = 'Introvertido';
  } else {
    perfil = 'Ambiverso';
  }

  return {
    expresion, // valor real (puede ser negativo), la UI lo formatea
    contencion,
    balance,
    perfil,
  };
};

/**
 * Calcula score de autenticidad
 */
export const calcularAutenticidad = (desfasePromedio: number): number => {
  return Math.max(0, Math.min(100, 100 - desfasePromedio * 8));
};

/**
 * Determina zona de rendimiento
 */
export const determinarZonaRendimiento = (desfasePromedio: number): string => {
  const zona =
    desfasePromedio < 2
      ? 'Comodidad'
      : desfasePromedio < 6
        ? 'Rendimiento Óptimo'
        : 'Estrés Alto';

  // Record tipado explícito para evitar fallos de lookup por claves con tildes/espacios
  const recomendaciones: Record<'Comodidad' | 'Rendimiento Óptimo' | 'Estrés Alto', string> = {
    'Comodidad':
      'Considera explorar nuevos contextos que desafíen tu desarrollo. El crecimiento ocurre fuera de la zona de confort.',
    'Rendimiento Óptimo':
      'Excelente punto de equilibrio. Estás adaptándote de forma efectiva mientras mantienes tu autenticidad.',
    'Estrés Alto':
      'Reflexiona sobre dónde estás experimentando mayor discrepancia. Podría ser señal de desalineación ambiental.',
  };

  return recomendaciones[zona] ?? '';
};

/**
 * Función integrada que genera todos los diagnósticos
 */
export const generarDiagnosticoCompleto = (
  natural: ProfileScores,
  adapted: ProfileScores
): DiagnosticoAvanzado => {
  const desfase = calcularDesfaseMetrics(natural, adapted);
  const ratioEnergia = calcularRatioEnergetico(natural);
  const autenticidadScore = calcularAutenticidad(desfase.desfasePromedio);

  let nivelAutenticidad: 'Muy auténtico' | 'Bastante auténtico' | 'Moderadamente auténtico' | 'Baja autenticidad';
  if (autenticidadScore > 80) {
    nivelAutenticidad = 'Muy auténtico';
  } else if (autenticidadScore > 60) {
    nivelAutenticidad = 'Bastante auténtico';
  } else if (autenticidadScore > 40) {
    nivelAutenticidad = 'Moderadamente auténtico';
  } else {
    nivelAutenticidad = 'Baja autenticidad';
  }

  const zonaRendimiento = determinarZonaRendimiento(desfase.desfasePromedio);
  const zona =
    desfase.desfasePromedio < 2
      ? 'Comodidad'
      : desfase.desfasePromedio < 6
        ? 'Rendimiento Óptimo'
        : 'Estrés Alto';

  return {
    desfase,
    ratioEnergia,
    autenticidad: {
      score: Math.round(autenticidadScore),
      nivel: nivelAutenticidad,
    },
    zonaRendimiento: {
      zona: zona as 'Comodidad' | 'Rendimiento Óptimo' | 'Estrés Alto',
      recomendacion: zonaRendimiento,
    },
  };
};
