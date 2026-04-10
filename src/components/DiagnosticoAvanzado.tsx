import React from 'react';
import { DiagnosticoAvanzado } from '../lib/diagnostics';
import { TrendingUp, Zap, Heart } from 'lucide-react';

interface DiagnosticoComponentProps {
  diagnostico: DiagnosticoAvanzado;
}

export const DiagnosticoComponent: React.FC<DiagnosticoComponentProps> = ({ diagnostico }) => {
  const { desfase, ratioEnergia, autenticidad, zonaRendimiento } = diagnostico;

  // Determinar colores según estabilidad
  const getColorEstabilidad = (estabilidad: string) => {
    switch (estabilidad) {
      case 'Alto':
        return 'bg-green-100 border-green-500 text-green-900';
      case 'Medio':
        return 'bg-yellow-100 border-yellow-500 text-yellow-900';
      case 'Bajo':
        return 'bg-red-100 border-red-500 text-red-900';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-900';
    }
  };

  // Determinar colores según autenticidad
  const getColorAutenticidad = (score: number) => {
    if (score > 80) return 'bg-emerald-100 border-emerald-500';
    if (score > 60) return 'bg-blue-100 border-blue-500';
    if (score > 40) return 'bg-amber-100 border-amber-500';
    return 'bg-orange-100 border-orange-500';
  };

  // Determinar color de zona
  const getColorZona = (zona: string) => {
    switch (zona) {
      case 'Rendimiento Óptimo':
        return 'bg-green-50 border-green-300';
      case 'Comodidad':
        return 'bg-blue-50 border-blue-300';
      case 'Estrés Alto':
        return 'bg-red-50 border-red-300';
      default:
        return 'bg-gray-50 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Desfase Conductual */}
      <div className={`rounded-2xl shadow-lg p-6 border-l-4 ${getColorEstabilidad(desfase.estabilidad)}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Desfase Conductual</h3>
            <p className="text-sm opacity-80">Brecha entre tu forma natural y adaptada</p>
          </div>
          <div className="text-3xl font-bold">{desfase.desfasePromedio.toFixed(1)}</div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-white bg-opacity-50 rounded p-3 text-center">
            <div className="text-xs font-semibold text-gray-600">D</div>
            <div className="text-lg font-bold">{desfase.brechaD}</div>
          </div>
          <div className="bg-white bg-opacity-50 rounded p-3 text-center">
            <div className="text-xs font-semibold text-gray-600">I</div>
            <div className="text-lg font-bold">{desfase.brechaI}</div>
          </div>
          <div className="bg-white bg-opacity-50 rounded p-3 text-center">
            <div className="text-xs font-semibold text-gray-600">S</div>
            <div className="text-lg font-bold">{desfase.brechaS}</div>
          </div>
          <div className="bg-white bg-opacity-50 rounded p-3 text-center">
            <div className="text-xs font-semibold text-gray-600">C</div>
            <div className="text-lg font-bold">{desfase.brechaC}</div>
          </div>
        </div>

        <p className="text-sm italic">{desfase.interpretacion}</p>
      </div>

      {/* Autenticidad */}
      <div className={`rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 ${getColorAutenticidad(autenticidad.score)}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Score de Autenticidad</h3>
            <p className="text-sm opacity-80">Qué tan alineado estás con tu naturaleza</p>
          </div>
          <Heart className="w-8 h-8 text-purple-600" />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Nivel</span>
            <span className="text-sm font-bold text-purple-700">{autenticidad.nivel}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${autenticidad.score}%` }}
            />
          </div>
          <div className="text-right text-xs font-semibold mt-1">{autenticidad.score}/100</div>
        </div>
      </div>

      {/* Ratio Energético */}
      <div className="rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500 bg-yellow-50 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">Perfil Energético</h3>
            <p className="text-sm text-gray-600">Balance Expresión / Contención</p>
          </div>
          <Zap className="w-8 h-8 text-yellow-600" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="text-xs font-semibold text-gray-600 mb-2">Expresión (D+I)</div>
            <div className="text-2xl font-bold text-blue-600">{Math.round(ratioEnergia.expresion)}</div>
            <div className="text-xs text-gray-500 mt-1">Energía externada</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="text-xs font-semibold text-gray-600 mb-2">Contención (S+C)</div>
            <div className="text-2xl font-bold text-green-600">{Math.round(ratioEnergia.contencion)}</div>
            <div className="text-xs text-gray-500 mt-1">Energía contenida</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-70 rounded-lg p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">Tipo: </span>
            <span className="text-lg font-bold text-yellow-700">{ratioEnergia.perfil}</span>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            {ratioEnergia.perfil === 'Extrovertido' &&
              'Tiendes a expresar tu energía hacia el exterior, siendo más comunicativo y activo.'}
            {ratioEnergia.perfil === 'Introvertido' &&
              'Tu energía se enfoca internamente, prefieres reflexión y ambientes más controlados.'}
            {ratioEnergia.perfil === 'Ambiverso' &&
              'Tienes flexibilidad para adaptar tu energía según la situación. Eres versátil.'}
          </p>
        </div>
      </div>

      {/* Zona de Rendimiento */}
      <div className={`rounded-2xl shadow-lg p-6 border-l-4 ${getColorZona(zonaRendimiento.zona)}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Zona de Rendimiento</h3>
            <p className="text-lg font-semibold text-purple-700">{zonaRendimiento.zona}</p>
          </div>
          <TrendingUp className="w-8 h-8 text-purple-600" />
        </div>

        <p className="text-sm leading-relaxed">{zonaRendimiento.recomendacion}</p>
      </div>
    </div>
  );
};
