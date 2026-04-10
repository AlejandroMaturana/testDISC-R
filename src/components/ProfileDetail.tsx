import React from 'react';
import { DISCProfileDetail } from '../lib/discInterpretations';
import { CheckCircle, TrendingUp, Zap, AlertCircle, Lightbulb, Flame } from 'lucide-react';

interface ProfileDetailProps {
  profile: DISCProfileDetail;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Título Principal */}
      <div className="text-center border-b-2 border-gray-200 pb-4 sm:pb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{profile.nombre}</h2>
        <p className="text-sm sm:text-base lg:text-xl text-blue-600 italic font-medium">"{profile.alias}"</p>
      </div>

      {/* Atributos Clave - Grid 2x4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {/* Emociones */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5" />
            Emociones
          </h3>
          <p className="text-blue-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.emociones}</p>
        </div>

        {/* Meta */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
            Meta
          </h3>
          <p className="text-green-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.meta}</p>
        </div>

        {/* Juzga a los demás */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Juzga a los demás por</h3>
          <p className="text-purple-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.juzgaALosDemasPor}</p>
        </div>

        {/* Influye mediante */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">Influye mediante</h3>
          <p className="text-orange-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.influyeEnLosDemasMediante}</p>
        </div>

        {/* Abusa de */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">Abusa de</h3>
          <p className="text-red-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.abusaDe}</p>
        </div>

        {/* Bajo presión */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Bajo presión</h3>
          <p className="text-yellow-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.bajoPresion}</p>
        </div>

        {/* Teme */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-pink-900 mb-2 text-sm sm:text-base">Teme</h3>
          <p className="text-pink-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.teme}</p>
        </div>

        {/* Sería más eficaz si */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-3 sm:p-4 md:p-6 rounded-r">
          <h3 className="font-semibold text-cyan-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />
            Sería más eficaz si
          </h3>
          <p className="text-cyan-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.seriaEficazSi}</p>
        </div>

        {/* Su valor para la organización - Full width */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-3 sm:p-4 md:p-6 rounded-r md:col-span-2">
          <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
            Su valor para la organización
          </h3>
          <p className="text-indigo-800 leading-relaxed text-xs sm:text-sm md:text-base">{profile.suValorParaLaOrganizacion}</p>
        </div>
      </div>

      {/* Descripción Narrativa */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-slate-300">
        <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
          <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600" />
          Perfil Detallado y Comportamiento
        </h3>
        <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
          {profile.descripcionNarrativa.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-justify text-xs sm:text-sm md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Three Columns: Fortalezas, Áreas de Mejora, Motivadores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Fortalezas */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-emerald-300 shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg sm:text-xl font-bold text-emerald-900 mb-3 sm:mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-600" />
            Fortalezas
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {profile.fortalezas.map((fortaleza, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-emerald-800">
                <span className="text-emerald-600 font-bold text-lg SM:text-xl leading-none flex-shrink-0">✓</span>
                <span className="text-xs sm:text-sm md:text-base leading-relaxed">{fortaleza}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Áreas de Mejora */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-amber-300 shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-3 sm:mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600" />
            Áreas de Mejora
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {profile.areasMejora.map((area, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-amber-800">
                <span className="text-amber-600 font-bold text-lg sm:text-xl leading-none flex-shrink-0">→</span>
                <span className="text-xs sm:text-sm md:text-base leading-relaxed">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Motivadores */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2">
            <Flame className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
            Motivadores
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {profile.motivadores.map((motivador, idx) => (
              <li key={idx} className="flex gap-2 sm:gap-3 text-blue-800">
                <span className="text-blue-600 font-bold text-lg sm:text-xl leading-none flex-shrink-0">⚡</span>
                <span className="text-xs sm:text-sm md:text-base leading-relaxed">{motivador}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
