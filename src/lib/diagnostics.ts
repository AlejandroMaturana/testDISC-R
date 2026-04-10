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
 * Normaliza scores de -20 a +20 a escala 0-100
 * para visualización en radar chart
 */
export const normalizarARadar = (score: number): number => {
  // Convierte de rango [-20, 20] a [0, 100]
  return Math.round(((score + 20) / 40) * 100);
};

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
 */
export const calcularRatioEnergetico = (natural: ProfileScores): RatioEnergetico => {
  const expresion = natural.D + natural.I;
  const contencion = natural.S + natural.C;

  // Normalizar para ratio (considerando que pueden ser negativos)
  const expresionNorm = Math.max(0, expresion);
  const contencionNorm = Math.max(0, contencion);

  // Balance: > 1 = más expresivo, < 1 = más contenido
  const balance =
    expresionNorm === 0 && contencionNorm === 0
      ? 1
      : (expresionNorm + 10) / (contencionNorm + 10);

  let perfil: 'Extrovertido' | 'Ambiverso' | 'Introvertido';
  if (balance > 1.3) {
    perfil = 'Extrovertido';
  } else if (balance < 0.7) {
    perfil = 'Introvertido';
  } else {
    perfil = 'Ambiverso';
  }

  return {
    expresion: expresionNorm,
    contencion: contencionNorm,
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

  const recomendaciones = {
    Comodidad:
      'Considerad explorar nuevos contextos que desafíen tu desarrollo. El crecimiento ocurre fuera de la zona de confort.',
    ['Rendimiento Óptimo']:
      'Excelente punto de equilibrio. Estás adaptándote de forma efectiva mientras mantienes tu autenticidad.',
    ['Estrés Alto']:
      'Reflexiona sobre dónde estás experimentando mayor discrepancia. Podría ser señal de desalineación ambiental.',
  };

  return recomendaciones[zona as keyof typeof recomendaciones] || '';
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
