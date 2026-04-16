import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 fade-in">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Términos y Política de Almacenamiento</h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 15 de Abril, 2026</p>

        <div className="space-y-6 text-gray-700">
          <p>
            En <strong>testDISC-R</strong>, utilizamos el almacenamiento local de tu navegador (LocalStorage) en lugar de cookies tradicionales para garantizar que nuestra plataforma funcione de manera óptima, veloz y 100% anónima. Esta política explica cómo manejamos los datos temporales.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">¿Qué es el LocalStorage?</h2>
          <p>
            Es un componente de almacenamiento web que permite guardar datos localmente dentro del navegador del usuario. A diferencia de las cookies, los datos no se envían a ningún servidor en la red; permanecen única y exclusivamente en tu dispositivo.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">Datos que almacenamos</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Nombre</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Propósito</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">discAnswers</span></td>
                  <td className="py-3 px-4">Mantiene temporalmente tus 28 respuestas del cuestionario para calcular tu perfil final.</td>
                  <td className="py-3 px-4">Hasta que borres caché o reinicies el test</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">Control y Eliminación</h2>
          <p>
            Dado que no recopilamos analíticas ni rastreadores de terceros, tienes control absoluto. Puedes borrar estos datos en cualquier momento simplemente vaciando el historial y datos de navegación de tu navegador web o haciendo clic en "Hacer nuevo análisis" dentro de la aplicación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
