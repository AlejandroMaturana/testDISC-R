import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Block, Answer } from '../lib/scoring';
import questionsData from '../data/question.json';

const Test: React.FC = () => {
  const blocks: Block[] = questionsData.blocks as Block[];

  const [currentBlock, setCurrentBlock] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedMost, setSelectedMost] = useState<string>('');
  const [selectedLeast, setSelectedLeast] = useState<string>('');
  const [error, setError] = useState<string>('');

  const current = blocks[currentBlock];

  const handleSelectMost = (word: string) => {
    if (selectedLeast === word) {
      setError("No puedes elegir la misma palabra como 'Más' y 'Menos'");
      return;
    }
    setSelectedMost(word);
    setError('');
  };

  const handleSelectLeast = (word: string) => {
    if (selectedMost === word) {
      setError("No puedes elegir la misma palabra como 'Más' y 'Menos'");
      return;
    }
    setSelectedLeast(word);
    setError('');
  };

  const handleNext = () => {
    if (!selectedMost || !selectedLeast) {
      setError("Debes seleccionar una palabra 'Más' y una 'Menos'");
      return;
    }

    const newAnswer: Answer = {
      blockNumber: current.blockNumber,
      most: selectedMost,
      least: selectedLeast,
    };

    setAnswers([...answers, newAnswer]);

    if (currentBlock < blocks.length - 1) {
      setCurrentBlock(currentBlock + 1);
      setSelectedMost('');
      setSelectedLeast('');
      setError('');
    } else {
      // Test terminado → redirigir a resultados
      handleFinishTest([...answers, newAnswer]);
    }
  };

  const navigate = useNavigate();

  const handleFinishTest = (finalAnswers: Answer[]) => {
    localStorage.setItem('discAnswers', JSON.stringify(finalAnswers));
    navigate('/results');
  };

  const progress = Math.round((answers.length / blocks.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-2xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Test DISC - 28 Bloques
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 px-2">
            No hay respuestas correctas o incorrectas.
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
            <span>Bloque {current.blockNumber} de 28</span>
            <span className="font-semibold">{progress}%</span>
          </div>
          <div className="h-2.5 sm:h-3 bg-gray-200 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bloque actual */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
            Bloque {current.blockNumber}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {current.words.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-3 sm:p-4 hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <p className="text-base sm:text-lg font-medium text-center mb-3 sm:mb-4">
                  {item.word}
                </p>

                <div className="flex gap-2 sm:gap-3 justify-center">
                  <button
                    onClick={() => handleSelectMost(item.word)}
                    aria-pressed={selectedMost === item.word}
                    aria-label={`Seleccionar ${item.word} como más característico`}
                    className={`flex-1 min-h-[44px] px-3 sm:px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 ${
                      selectedMost === item.word
                        ? 'bg-green-600 text-white shadow-md ring-2 ring-green-400'
                        : 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300'
                    }`}
                  >
                    MÁS
                  </button>

                  <button
                    onClick={() => handleSelectLeast(item.word)}
                    aria-pressed={selectedLeast === item.word}
                    aria-label={`Seleccionar ${item.word} como menos característico`}
                    className={`flex-1 min-h-[44px] px-3 sm:px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${
                      selectedLeast === item.word
                        ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400'
                        : 'bg-red-100 text-red-700 hover:bg-red-200 border border-red-300'
                    }`}
                  >
                    MENOS
                  </button>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <p className="text-red-600 text-center mt-4 sm:mt-6 font-medium text-sm sm:text-base px-2">{error}</p>
          )}
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() => {
              if (currentBlock > 0) {
                setCurrentBlock(currentBlock - 1);
                const prevAnswer = answers.find(a => a.blockNumber === current.blockNumber - 1);
                if (prevAnswer) {
                  setSelectedMost(prevAnswer.most);
                  setSelectedLeast(prevAnswer.least);
                }
              }
            }}
            disabled={currentBlock === 0}
            className="min-h-[44px] px-4 sm:px-6 py-3 text-gray-600 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors text-sm sm:text-base flex-1 sm:flex-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            ← Anterior
          </button>

          <button
            onClick={handleNext}
            className="min-h-[44px] px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg sm:rounded-xl transition-all active:scale-95 text-sm sm:text-base flex-1 sm:flex-none shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            {currentBlock === blocks.length - 1 ? 'Ver Resultados' : 'Siguiente →'}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 px-2">
          Se honesto. Esta información es para uso personal.
        </p>
      </div>
    </div>
  );
};

export default Test;
