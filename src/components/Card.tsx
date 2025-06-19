import React from 'react';
import { motion } from 'framer-motion';
import { Card as CardType } from '../types/game';
import { getDisplayRank, getSuitSymbol } from '../utils/deckUtils';

interface CardProps {
  card?: CardType;
  isPlayable?: boolean;
  isHidden?: boolean;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  card,
  isPlayable = false,
  isHidden = false,
  onClick,
  className = '',
}) => {
  if (!card) {
    return (
      <div className={`card card-back ${className}`}>
        <div className="flex items-center justify-center">
          <span className="text-accent-500 text-2xl font-bold">VP</span>
        </div>
      </div>
    );
  }

  const { suit, rank } = card;
  const suitSymbol = getSuitSymbol(suit);
  const displayRank = getDisplayRank(rank);
  
  const isRed = suit === 'hearts' || suit === 'diamonds';
  const cardClassName = isHidden
    ? `card card-back ${className}`
    : `card card-${suit} ${isPlayable ? 'card-playable' : ''} ${className}`;

  return (
    <motion.div
      className={cardClassName}
      onClick={isPlayable ? onClick : undefined}
      whileHover={isPlayable ? { scale: 1.05, y: -5 } : {}}
      whileTap={isPlayable ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      {isHidden ? (
        <div className="flex items-center justify-center">
          <span className="text-accent-500 text-2xl font-bold">VP</span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="absolute top-1 left-2 flex flex-col items-center">
            <span className="text-sm md:text-base font-mono">{displayRank}</span>
            <span className="text-base md:text-lg">{suitSymbol}</span>
          </div>
          
          <span className="text-3xl md:text-4xl">{suitSymbol}</span>
          
          <div className="absolute bottom-1 right-2 flex flex-col items-center rotate-180">
            <span className="text-sm md:text-base font-mono">{displayRank}</span>
            <span className="text-base md:text-lg">{suitSymbol}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;