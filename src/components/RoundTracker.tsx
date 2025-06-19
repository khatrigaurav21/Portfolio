import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import { getSuitSymbol } from '../utils/deckUtils';
import { Round } from '../types/game';

interface RoundTrackerProps {
  round: Round;
  players: { id: number; name: string }[];
}

const RoundTracker: React.FC<RoundTrackerProps> = ({ round, players }) => {
  const { activeSuit, cardsPlayed } = round;
  
  // Get player names from IDs
  const getPlayerName = (playerId: number): string => {
    const player = players.find(p => p.id === playerId);
    return player ? player.name : `Player ${playerId + 1}`;
  };
  
  return (
    <motion.div 
      className="container-panel mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-base md:text-lg font-bold mb-2 text-center">
        Current Round
      </h2>
      
      {activeSuit && (
        <div className="flex items-center justify-center mb-4">
          <div className={`flex items-center justify-center p-2 rounded-md ${activeSuit === 'hearts' || activeSuit === 'diamonds' ? 'bg-secondary-900/50' : 'bg-neutral-800/50'}`}>
            <span className="text-sm mr-2">Active Suit:</span>
            <span className={`text-xl ${activeSuit === 'hearts' || activeSuit === 'diamonds' ? 'text-secondary-500' : 'text-neutral-300'}`}>
              {getSuitSymbol(activeSuit as any)}
            </span>
            <span className="ml-2 capitalize text-sm">
              {activeSuit}
            </span>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <AnimatePresence>
          {cardsPlayed.map(({ playerId, card }) => (
            <motion.div 
              key={card.id}
              className="w-14 md:w-16 lg:w-20"
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-1 text-center text-xs truncate">
                {getPlayerName(playerId)}
              </div>
              <Card card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {cardsPlayed.length === 0 && (
          <p className="text-neutral-400 italic py-4">No cards played yet</p>
        )}
      </div>
    </motion.div>
  );
};

export default RoundTracker;