import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import GameBoard from './GameBoard';
import StartScreen from './StartScreen';

const GameContainer: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const { gameState, playCard, continueAfterRound, startNewGame } = useGame();
  
  const handleStartGame = () => {
    setGameStarted(true);
  };
  
  const handlePlayAgain = () => {
    startNewGame();
  };
  
  return (
    <>
      {!gameStarted ? (
        <StartScreen onStartGame={handleStartGame} />
      ) : (
        <>
          <GameBoard 
            gameState={gameState}
            onPlayCard={playCard}
            onContinue={continueAfterRound}
          />
          
          {gameState.gamePhase === 'gameOver' && (
            <div className="fixed inset-0 flex items-center justify-center z-20 bg-neutral-950/80">
              <div className="container-panel max-w-md w-full p-6">
                <h2 className="text-xl font-bold text-center mb-4 text-primary-500">
                  Game Over!
                </h2>
                <p className="text-center mb-6">
                  {gameState.winner === gameState.humanPlayerId 
                    ? "Congratulations! You've successfully contained the virus and won the game!" 
                    : `Player ${gameState.winner! + 1} has won the game.`}
                </p>
                <button 
                  className="button button-primary w-full"
                  onClick={handlePlayAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GameContainer;