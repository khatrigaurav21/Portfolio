import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { Card as CardType, Player } from '../types/game';
import { canPlayCard } from '../utils/deckUtils';

interface PlayerHandProps {
  player: Player;
  isCurrentPlayer: boolean;
  isHuman: boolean;
  activeSuit: string | null;
  onPlayCard: (cardId: string) => void;
}

const PlayerHand: React.FC<PlayerHandProps> = ({
  player,
  isCurrentPlayer,
  isHuman,
  activeSuit,
  onPlayCard,
}) => {
  const { hand } = player;
  
  // Sort cards by suit and rank
  const sortedHand = [...hand].sort((a, b) => {
    if (a.suit !== b.suit) {
      return a.suit.localeCompare(b.suit);
    }
    return a.value - b.value;
  });

  return (
    <motion.div 
      className={`container-panel ${isCurrentPlayer ? 'border-primary-500' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-sm md:text-base font-semibold ${isCurrentPlayer ? 'text-primary-500' : ''}`}>
          {player.name} {isCurrentPlayer ? '(Current Turn)' : ''}
        </h3>
        <span className="text-xs md:text-sm text-neutral-400">
          Cards: {hand.length}
        </span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {sortedHand.map((card) => {
          const isPlayable = isCurrentPlayer && 
            isHuman && 
            canPlayCard(card, activeSuit as any, hand);
            
          return (
            <div 
              key={card.id} 
              className="w-10 md:w-14 lg:w-16"
            >
              <Card
                card={card}
                isPlayable={isPlayable}
                isHidden={!isHuman}
                onClick={() => isPlayable && onPlayCard(card.id)}
              />
            </div>
          );
        })}
        
        {hand.length === 0 && (
          <p className="text-neutral-400 italic py-4">No cards</p>
        )}
      </div>
    </motion.div>
  );
};

export default PlayerHand;