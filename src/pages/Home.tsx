import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, Lock, Zap, BarChart3 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    localStorage.removeItem('discAnswers');
    navigate('/test');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navegación */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex items-center gap-2 sm:gap-3">
          <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 flex-shrink-0" />
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900 line-clamp-2">DISC Test - Conócete Mejor</h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Descubre tu perfil de comportamiento
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Completa nuestro test DISC de 28 bloques 100% anónimo y gana insights sobre tu estilo de comportamiento natural y adaptado.
          </p>
          <button
            onClick={handleStartTest}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base sm:text-lg font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm"
          >
            Comenzar Test
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-10 sm:my-16">
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <Lock className="w-7 sm:w-8 h-7 sm:h-8 text-green-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">100% Anónimo</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Tus respuestas nunca se guardan en nuestros servidores. Todo está en tu dispositivo.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <Zap className="w-7 sm:w-8 h-7 sm:h-8 text-yellow-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Rápido & Fácil</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Completa el test en solo 5-10 minutos. Sin registros, sin complicaciones.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <BarChart3 className="w-7 sm:w-8 h-7 sm:h-8 text-purple-600 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Resultados Claros</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Obtén un informe detallado sobre tu perfil natural y adaptado con gráficos profesionales.
            </p>
          </div>
        </div>

        {/* Información del Test */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Acerca del Test DISC</h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
            El test DISC es una herramienta psicológica científicamente validada que mide cuatro dimensiones de comportamiento: 
            <strong> Dominancia (D), Influencia (I), Estabilidad (S) y Cumplimiento (C)</strong>.
          </p>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
            Nuestro test usa el banco clásico de 28 bloques, cada uno con 4 palabras. Selecciona la palabra más característica y la menos característica de ti en cada bloque.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 sm:mt-16 py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-600">
        <p>DISC Test v1.0 • Aplicación 100% open source y gratuita</p>
      </footer>
    </div>
  );
};

export default Home;
