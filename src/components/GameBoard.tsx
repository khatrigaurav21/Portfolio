import React from 'react';
import { motion } from 'framer-motion';
import PlayerHand from './PlayerHand';
import RoundTracker from './RoundTracker';
import GameStatus from './GameStatus';
import { GameState } from '../types/game';

interface GameBoardProps {
  gameState: GameState;
  onPlayCard: (cardId: string) => void;
  onContinue: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  gameState,
  onPlayCard,
  onContinue,
}) => {
  const { 
    players, 
    currentPlayerId, 
    humanPlayerId,
    round, 
    gamePhase,
    message 
  } = gameState;

  return (
    <motion.div 
      className="min-h-screen flex flex-col p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-center mb-4 glow-text text-primary-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Containment Protocol: Viroverse
        </motion.h1>
        
        <GameStatus 
          message={message} 
          phase={gamePhase} 
          onContinue={gamePhase === 'roundEnd' ? onContinue : undefined} 
        />
        
        <RoundTracker 
          round={round}
          players={players.map(p => ({ id: p.id, name: p.name }))}
        />
        
        <div className="space-y-4">
          {players.map((player) => (
            <PlayerHand
              key={player.id}
              player={player}
              isCurrentPlayer={currentPlayerId === player.id}
              isHuman={player.id === humanPlayerId}
              activeSuit={round.activeSuit}
              onPlayCard={onPlayCard}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GameBoard;