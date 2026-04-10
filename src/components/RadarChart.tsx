import React from 'react';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ProfileScores } from '../lib/scoring';
import { normalizarARadar } from '../lib/diagnostics';

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartComponentProps {
  natural: ProfileScores;
  adapted: ProfileScores;
}

export const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ natural, adapted }) => {
  // Normalizar scores a escala 0-100 para radar
  const datosNatural = [
    normalizarARadar(natural.D),
    normalizarARadar(natural.I),
    normalizarARadar(natural.S),
    normalizarARadar(natural.C),
  ];

  const datosAdaptado = [
    normalizarARadar(adapted.D),
    normalizarARadar(adapted.I),
    normalizarARadar(adapted.S),
    normalizarARadar(adapted.C),
  ];

  const data = {
    labels: ['D - Dominancia', 'I - Influencia', 'S - Estabilidad', 'C - Cumplimiento'],
    datasets: [
      {
        label: 'Perfil Natural',
        data: datosNatural,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0.1,
      },
      {
        label: 'Perfil Adaptado',
        data: datosAdaptado,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'rgb(239, 68, 68)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            weight: 'normal' as const,
          },
          padding: 10,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.r}`; 
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          font: {
            size: 10,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.08)',
        },
        pointLabels: {
          font: {
            size: 13,
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
        Perfil Natural vs Adaptado
      </h2>

      <div className="flex justify-center" style={{ height: '550px' }}>
        <Radar data={data} options={options} />
      </div>

      <p className="mt-3 text-xs text-gray-600 text-center">
        Azul = Perfil Natural | Rojo = Perfil Adaptado (la brecha muestra tu flexibilidad)
      </p>
    </div>
  );
};
