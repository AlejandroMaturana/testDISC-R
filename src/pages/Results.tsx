import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { calculateDISCScoring, TestResult } from '../lib/scoring';
import { getDISCProfile } from '../lib/discInterpretations';
import ProfileDetail from '../components/ProfileDetail';
import questionsData from '../data/question.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Results: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('discAnswers');

    if (!savedAnswers) {
      window.location.href = '/test'; // Redirigir si no hay respuestas
      return;
    }

    try {
      const answers = JSON.parse(savedAnswers);
      const calculated = calculateDISCScoring(answers, questionsData.blocks as any);
      setResult(calculated);
    } catch (error) {
      console.error('Error al calcular resultados:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Calculando tu perfil DISC...</p>
      </div>
    );
  }

  if (!result) {
    return <div>Error al cargar los resultados</div>;
  }

  const { natural, adapted, dominantStyle } = result;

  // Configuración de gráficos
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -20,
        max: 20,
        ticks: { stepSize: 5 },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const naturalData = {
    labels: ['Dominancia (D)', 'Influencia (I)', 'Estabilidad (S)', 'Cumplimiento (C)'],
    datasets: [{
      label: 'Perfil Natural',
      data: [natural.D, natural.I, natural.S, natural.C],
      backgroundColor: ['#ef4444', '#eab308', '#22c55e', '#3b82f6'],
      borderColor: '#1f2937',
      borderWidth: 1,
    }],
  };

  const adaptedData = {
    labels: ['Dominancia (D)', 'Influencia (I)', 'Estabilidad (S)', 'Cumplimiento (C)'],
    datasets: [{
      label: 'Perfil Adaptado',
      data: [adapted.D, adapted.I, adapted.S, adapted.C],
      backgroundColor: ['#f97316', '#a855f7', '#14b8a6', '#6366f1'],
      borderColor: '#1f2937',
      borderWidth: 1,
    }],
  };

  // Función para descargar PDF (simple por ahora)
  const downloadPDF = () => {
    alert("Función de PDF en desarrollo.\n\nEn la próxima versión podrás descargar un informe completo.");
    // Aquí puedes integrar jsPDF o react-pdf más adelante
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Tu Perfil DISC
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Estilo predominante: <span className="font-semibold text-blue-600">{dominantStyle}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12">
          {/* Perfil Natural */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-red-600">
              Perfil Natural
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Tu estilo auténtico y espontáneo
            </p>
            <div className="h-64 sm:h-80 lg:h-96">
              <Bar data={naturalData} options={chartOptions} />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center text-sm sm:text-base">
              <div><strong>D:</strong> {natural.D}</div>
              <div><strong>I:</strong> {natural.I}</div>
              <div><strong>S:</strong> {natural.S}</div>
              <div><strong>C:</strong> {natural.C}</div>
            </div>
          </div>

          {/* Perfil Adaptado */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-orange-600">
              Perfil Adaptado
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Cómo te muestras actualmente (entorno laboral/social)
            </p>
            <div className="h-64 sm:h-80 lg:h-96">
              <Bar data={adaptedData} options={chartOptions} />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center text-sm sm:text-base">
              <div><strong>D:</strong> {adapted.D}</div>
              <div><strong>I:</strong> {adapted.I}</div>
              <div><strong>S:</strong> {adapted.S}</div>
              <div><strong>C:</strong> {adapted.C}</div>
            </div>
          </div>
        </div>

        {/* Interpretación Detallada */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-10 mt-8 sm:mt-12">
          <ProfileDetail profile={getDISCProfile(dominantStyle)} />

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={downloadPDF}
              className="px-4 sm:px-8 py-2 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg sm:rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
            >
              📄 Descargar Informe PDF
            </button>

            <button
              onClick={() => navigate('/test')}
              className="px-4 sm:px-8 py-2 sm:py-4 border border-gray-300 hover:bg-gray-100 font-semibold rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base active:scale-95"
            >
              Hacer nuevo análisis
            </button>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 mt-8 sm:mt-12 mb-4 sm:mb-6">
          Recuerda: Este es un instrumento de autoconocimiento. No es un diagnóstico psicológico.
        </p>
        <div className="text-center text-xs sm:text-sm text-gray-500 mt-2">
          <p>Tus respuestas son completamente anónimas y se almacenan solo en tu dispositivo.</p>
        </div>
      </div>
    </div>
  );
};

export default Results;