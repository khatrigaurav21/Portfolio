import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { 
  GameState, 
  GameAction, 
  Player,
  GamePhase 
} from '../types/game';
import { 
  gameReducer, 
  initializeGameState,
  getAIMove 
} from '../utils/gameLogic';
import { createDeck, shuffleDeck, dealCards } from '../utils/deckUtils';

interface GameContextType {
  gameState: GameState;
  dispatch: React.Dispatch<GameAction>;
  playCard: (cardId: string) => void;
  continueAfterRound: () => void;
  startNewGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize the game
  const initialSetup = (): GameState => {
    // Create and shuffle the deck
    const deck = shuffleDeck(createDeck());
    
    // Create 4 players (1 human, 3 AI)
    const playerHands = dealCards(deck, 4, 13);
    
    const players: Player[] = playerHands.map((hand, index) => ({
      id: index,
      name: index === 0 ? 'You' : `AI Player ${index}`,
      hand,
      isHuman: index === 0,
    }));
    
    // Initialize the game state
    return initializeGameState(players);
  };
  
  const [gameState, dispatch] = useReducer(gameReducer, null, initialSetup);
  
  // Handle AI turns with delay
  useEffect(() => {
    const { currentPlayerId, players, gamePhase } = gameState;
    const currentPlayer = players.find(p => p.id === currentPlayerId);
    
    // If it's an AI's turn and the game is in the playing phase
    if (currentPlayer && !currentPlayer.isHuman && gamePhase === 'playing') {
      // Add a 1-second delay before AI moves
      const timeoutId = setTimeout(() => {
        const cardId = getAIMove(gameState, currentPlayerId);
        if (cardId) {
          dispatch({ 
            type: 'PLAY_CARD', 
            payload: { playerId: currentPlayerId, cardId } 
          });
        }
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [gameState.currentPlayerId, gameState.gamePhase, gameState.round.cardsPlayed.length, gameState.players, gameState.round.currentPlayerId]);
  
  // Play a card (human player action)
  const playCard = (cardId: string) => {
    const { currentPlayerId, humanPlayerId, gamePhase } = gameState;
    
    // Only allow playing if it's the human's turn and the game is in the playing phase
    if (currentPlayerId === humanPlayerId && gamePhase === 'playing') {
      dispatch({ 
        type: 'PLAY_CARD', 
        payload: { playerId: humanPlayerId, cardId } 
      });
    }
  };
  
  // Continue after a round ends
  const continueAfterRound = () => {
    const { round, gamePhase } = gameState;
    
    if (gamePhase === 'roundEnd' && round.roundWinnerId !== null) {
      dispatch({ 
        type: 'END_ROUND', 
        payload: { collectorId: round.roundWinnerId } 
      });
    }
  };
  
  // Start a new game
  const startNewGame = () => {
    const deck = shuffleDeck(createDeck());
    const playerHands = dealCards(deck, 4, 13);
    
    const players: Player[] = playerHands.map((hand, index) => ({
      id: index,
      name: index === 0 ? 'You' : `AI Player ${index}`,
      hand,
      isHuman: index === 0,
    }));
    
    const initialState = initializeGameState(players);
    dispatch({ 
      type: 'SETUP_GAME', 
      payload: { 
        players: initialState.players,
        startingPlayerId: initialState.currentPlayerId
      } 
    });
  };
  
  return (
    <GameContext.Provider value={{ 
      gameState, 
      dispatch, 
      playCard, 
      continueAfterRound,
      startNewGame
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};