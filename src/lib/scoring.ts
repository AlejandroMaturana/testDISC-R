export interface Word {
  word: string;
  letter: 'D' | 'I' | 'S' | 'C';
}

export interface Block {
  blockNumber: number;
  words: Word[];
}

export interface Answer {
  blockNumber: number;
  most: string;   // palabra elegida como "MAS"
  least: string;  // palabra elegida como "MENOS"
}

export interface ProfileScores {
  D: number;
  I: number;
  S: number;
  C: number;
}

export interface TestResult {
  natural: ProfileScores;
  adapted: ProfileScores;
  dominantStyle: string;
  rawScores: {
    most: ProfileScores;
    least: ProfileScores;
  };
}

/**
 * Función principal de scoring para el Test DISC de 28 bloques
 */
export function calculateDISCScoring(answers: Answer[], blocks: Block[]): TestResult {
  // Inicializar contadores
  const mostScores: ProfileScores = { D: 0, I: 0, S: 0, C: 0 };
  const leastScores: ProfileScores = { D: 0, I: 0, S: 0, C: 0 };

  // Procesar cada respuesta
  answers.forEach(answer => {
    const block = blocks.find(b => b.blockNumber === answer.blockNumber);
    if (!block) return;

    // Buscar la letra de la palabra "MAS"
    const mostWord = block.words.find(w => w.word === answer.most);
    if (mostWord) {
      mostScores[mostWord.letter]++;
    }

    // Buscar la letra de la palabra "MENOS"
    const leastWord = block.words.find(w => w.word === answer.least);
    if (leastWord) {
      leastScores[leastWord.letter]++;
    }
  });

  // Cálculo de perfiles
  const natural: ProfileScores = {
    D: mostScores.D - leastScores.D * 1.2,   // Mayor peso a los "MENOS" para el Natural
    I: mostScores.I - leastScores.I * 1.2,
    S: mostScores.S - leastScores.S * 1.2,
    C: mostScores.C - leastScores.C * 1.2,
  };

  const adapted: ProfileScores = {
    D: mostScores.D * 1.1 - leastScores.D,   // Mayor peso a los "MAS" para el Adaptado
    I: mostScores.I * 1.1 - leastScores.I,
    S: mostScores.S * 1.1 - leastScores.S,
    C: mostScores.C * 1.1 - leastScores.C,
  };

  // Normalizar a escala aproximada de -20 a +20 para mejor visualización
  const normalize = (score: number): number => {
    return Math.round(Math.max(-20, Math.min(20, score)));
  };

  const finalNatural: ProfileScores = {
    D: normalize(natural.D),
    I: normalize(natural.I),
    S: normalize(natural.S),
    C: normalize(natural.C),
  };

  const finalAdapted: ProfileScores = {
    D: normalize(adapted.D),
    I: normalize(adapted.I),
    S: normalize(adapted.S),
    C: normalize(adapted.C),
  };

  // Determinar estilo dominante (basado en Perfil Natural)
  const dominantStyle = getDominantStyle(finalNatural);

  return {
    natural: finalNatural,
    adapted: finalAdapted,
    dominantStyle,
    rawScores: {
      most: mostScores,
      least: leastScores,
    },
  };
}

/**
 * Determina el estilo dominante según las puntuaciones del Perfil Natural
 * Ahora soporta perfiles de 1, 2 o 3 dimensiones
 */
function getDominantStyle(scores: ProfileScores): string {
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const highest = sorted[0];
  const second = sorted[1];
  const third = sorted[2];

  // Caso 1: Perfil claramente alto (1 dimensión dominante)
  if (highest[1] >= 8) {
    return `Alto ${highest[0]}`;
  }

  // Caso 2: Perfil de 3 dimensiones - cuando la 3ra es significativa
  // Solo reconoce las combinaciones que existen: DSI, ISC, DCI
  if (highest[1] >= 4 && second[1] >= 3 && third[1] >= 2 && highest[1] - third[1] <= 3) {
    const threeLetters = [highest[0], second[0], third[0]].join('');
    const validCombinations = ['DSI', 'ISC', 'DCI', 'DIS', 'ICS', 'CID']; // Incluye variaciones
    if (validCombinations.includes(threeLetters)) {
      return `Alto ${threeLetters}`;
    }
  }

  // Caso 3: Perfil de 2 dimensiones
  if (highest[1] >= 4 && second[1] >= 3) {
    return `${highest[0]}${second[0]}`;
  }

  // Caso 4: Perfil moderado
  return `${highest[0]} Moderado`;
}

// Ejemplo de uso:
// export const exampleUsage = () => {
//   const sampleAnswers: Answer[] = [
//     { blockNumber: 1, most: "Rápido(a)", least: "Apacible" },
//     // ... resto de las 28 respuestas
//   ];
//
//   // const result = calculateDISCScoring(sampleAnswers, blocks);
//   // console.log(result);
// };
