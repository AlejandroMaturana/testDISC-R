import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 fade-in">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 15 de Abril, 2026</p>

        <div className="space-y-6 text-gray-700">
          <p>Al utilizar <strong>testDISC-R</strong>, tu privacidad es nuestra máxima prioridad. Hemos diseñado esta plataforma bajo el principio arquitectónico fundamental de "Privacidad por diseño".</p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">1. Información que recopilamos</h2>
          <p><strong>NINGUNA.</strong> testDISC-R es una aplicación cliente (Single Page Application) completamente descentralizada que <strong>no posee servidores vinculados ni bases de datos centralizadas</strong>. No solicitamos tu nombre, correo ni ninguna otra información de carácter personal identificable.</p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">2. Uso de la información (Local)</h2>
          <p>Todas tus elecciones y resultados psicométricos del test se procesan de manera local usando única y exclusivamente los recursos de tu propio dispositivo. La información métrica generada se emplea exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Calcular tu perfil DISC Natural y Adaptado.</li>
            <li>Proporcionar el análisis de desfase conductual y métricas de desempeño asociadas a tu estilo predominante.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">3. Seguridad y Control de Rastreo</h2>
          <p>Al no existir servidores que procesen la información de los usuarios de ida y vuelta a la nube, no existe riesgo técnico de filtraciones de datos por parte de nuestra infraestructura. Adicionalmente, esta plataforma es un portal blindado y <strong>NO utiliza</strong> conectores de recolección en masa, llámese Google Analytics, Mixpanel, Píxeles algorítmicos ni software de rastreo transversal a sitios de publicidad.</p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">4. Contacto</h2>
          <p>Si tienes preguntas sobre la seguridad tecnológica, el modelo psicométrico o el diseño técnico de testDISC-R, puedes contactarnos a través del siguiente correo electrónico:</p>
          <a href="mailto:neofito331@gmail.com" className="text-blue-600 font-semibold hover:underline">neofito331@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
