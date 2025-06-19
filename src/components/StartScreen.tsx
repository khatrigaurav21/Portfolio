import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Play, Info } from 'lucide-react';

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  const [showRules, setShowRules] = React.useState(false);
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6"
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
      
      <motion.div 
        className="container-panel max-w-md w-full z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center mb-6">
          <ShieldAlert className="text-primary-500 w-8 h-8 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold glow-text text-primary-500">
            Containment Protocol
          </h1>
        </div>
        
        <h2 className="text-xl font-bold text-center mb-6 text-accent-500">
          Viroverse
        </h2>
        
        {showRules ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">Game Rules:</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>• Each player starts with 13 cards from a standard deck</li>
              <li>• One player plays a card, setting the active suit</li>
              <li>• Other players must follow with the same suit if possible</li>
              <li>• If a player can't match the suit, they play a different suit and the round ends</li>
              <li>• The highest card in the correct suit collects all cards</li>
              <li>• If all players follow suit, highest card wins and starts next round</li>
              <li>• The goal is to get rid of all your cards first</li>
            </ul>
            
            <button 
              className="button button-secondary w-full"
              onClick={() => setShowRules(false)}
            >
              Hide Rules
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-neutral-300 mb-6">
              A 4-player turn-based strategy game where you must contain the viral spread by following suit.
            </p>
            
            <button 
              className="button button-primary w-full flex items-center justify-center"
              onClick={onStartGame}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Game
            </button>
            
            <button 
              className="button bg-neutral-800 hover:bg-neutral-700 w-full flex items-center justify-center"
              onClick={() => setShowRules(true)}
            >
              <Info className="w-5 h-5 mr-2" />
              Game Rules
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StartScreen;