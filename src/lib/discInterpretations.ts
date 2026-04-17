/**
 * Interpretaciones detalladas de perfiles DISC
 * Basadas en el modelo DISC clásico de 28 bloques
 * Los datos se cargan desde src/data/interpretations.json
 */

import interpretationsData from '../data/interpretations.json';

export interface DISCProfileDetail {
    nombre: string;
    alias: string;
    emociones: string;
    meta: string;
    juzgaALosDemasPor: string;
    influyeEnLosDemasMediante: string;
    suValorParaLaOrganizacion: string;
    abusaDe: string;
    bajoPresion: string;
    teme: string;
    seriaEficazSi: string;
    descripcionNarrativa: string;
    fortalezas: string[];
    areasMejora: string[];
    motivadores: string[];
    estilo: 'D' | 'I' | 'S' | 'C' | 'DI' | 'DC' | 'DS' | 'ID' | 'IS' | 'IC' | 'SD' | 'SI' | 'SC' | 'CD' | 'CI' | 'CS' | 'DSI' | 'ISC' | 'DCI';
}

export const discProfiles: Record<string, DISCProfileDetail> = interpretationsData.profiles as Record<string, DISCProfileDetail>;

export const getDISCProfile = (dominantStyle: string): DISCProfileDetail => {
    // Normalizar: quitar prefijo "Alto " y sufijo "Moderado"
    const normalized = dominantStyle
        .replace(/\s*Moderado\s*/g, '')
        .replace(/^Alto\s+/, '')
        .trim();

    // 1. Búsqueda directa (ej: "Alto DI", "Alto C")
    if (discProfiles[dominantStyle]) return discProfiles[dominantStyle];

    // 2. Con prefijo "Alto " (cubre "S Moderado" → "S" → "Alto S")
    if (discProfiles[`Alto ${normalized}`]) return discProfiles[`Alto ${normalized}`];

    // 3. Combinaciones de 3 letras sin perfil propio: usar las 2 primeras (ej: "DIS" → "DI")
    if (normalized.length >= 3) {
        const twoLetters = normalized.slice(0, 2);
        if (discProfiles[`Alto ${twoLetters}`]) return discProfiles[`Alto ${twoLetters}`];
    }

    // 4. Último recurso: usar solo la letra dominante (ej: "DIS" → "D")
    if (normalized.length >= 1) {
        const firstLetter = normalized.slice(0, 1);
        if (discProfiles[`Alto ${firstLetter}`]) return discProfiles[`Alto ${firstLetter}`];
    }

    // Fallback final a C
    return discProfiles['Alto C'] as DISCProfileDetail;
};
