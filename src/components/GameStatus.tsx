import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Brush as Virus } from 'lucide-react';

interface GameStatusProps {
  message: string;
  phase: string;
  onContinue?: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ message, phase, onContinue }) => {
  const getIcon = () => {
    switch (phase) {
      case 'roundEnd':
        return <AlertTriangle className="text-warning-500 w-5 h-5 mr-2" />;
      case 'gameOver':
        return <Shield className="text-primary-500 w-5 h-5 mr-2" />;
      default:
        return <Virus className="text-accent-500 w-5 h-5 mr-2" />;
    }
  };
  
  return (
    <motion.div 
      className="container-panel mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getIcon()}
          <span className="text-sm md:text-base">{message}</span>
        </div>
        
        {onContinue && phase === 'roundEnd' && (
          <motion.button
            className="button button-primary text-xs md:text-sm px-3 py-1 ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
          >
            Continue
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default GameStatus;