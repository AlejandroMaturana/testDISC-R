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
    estilo: 'D' | 'I' | 'S' | 'C' | 'DI' | 'DC' | 'DS' | 'ID' | 'IS' | 'IC' | 'SD' | 'SI' | 'SC' | 'CD' | 'CI' | 'CS';
}

export const discProfiles: Record<string, DISCProfileDetail> = interpretationsData.profiles as Record<string, DISCProfileDetail>;

export const getDISCProfile = (dominantStyle: string): DISCProfileDetail => {
    // Normalizar el nombre del estilo
    const normalized = dominantStyle
        .replace(/Moderado/g, '')
        .replace(/Alto\s/g, '')
        .trim();

    // Buscar coincidencia directa
    const profile = discProfiles[dominantStyle] || discProfiles[`Alto ${normalized}`];

    if (profile) {
        return profile;
    }

    // Fallback a C
    return discProfiles['Alto C'] as DISCProfileDetail;
};
