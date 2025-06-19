import { Card, GameAction, GameState, Player, Suit } from '../types/game';
import { canPlayCard, findHighestCardOfSuit } from './deckUtils';

/**
 * Initializes a new game state
 */
export const initializeGameState = (players: Player[]): GameState => {
  // Find player with Ace of Spades
  const startingPlayerId = players.findIndex(player => 
    player.hand.some(card => card.suit === 'spades' && card.rank === 'A')
  );

  return {
    players,
    currentPlayerId: startingPlayerId,
    humanPlayerId: 0, // First player is human by default
    round: {
      activeSuit: 'spades', // Game always starts with Ace of Spades
      cardsPlayed: [],
      startingPlayerId,
      currentPlayerId: startingPlayerId,
      roundWinnerId: null,
    },
    gamePhase: 'playing',
    winner: null,
    message: 'Game started! The player with Ace of Spades leads.',
  };
};

/**
 * Handles playing a card
 */
export const playCard = (state: GameState, playerId: number, cardId: string): GameState => {
  // Find the player
  const playerIndex = state.players.findIndex(p => p.id === playerId);
  if (playerIndex === -1) return state;
  
  // Check if this player has already played in this round
  const hasPlayed = state.round.cardsPlayed.some(pc => pc.playerId === playerId);
  if (hasPlayed) {
    return {
      ...state,
      message: 'You have already played a card this round.',
    };
  }
  
  // Find the card
  const cardIndex = state.players[playerIndex].hand.findIndex(c => c.id === cardId);
  if (cardIndex === -1) return state;
  
  const card = state.players[playerIndex].hand[cardIndex];
  
  // Check if it's the first play of the game
  const isFirstPlay = state.round.cardsPlayed.length === 0 && state.round.activeSuit === 'spades';
  if (isFirstPlay && (card.suit !== 'spades' || card.rank !== 'A')) {
    return {
      ...state,
      message: 'You must lead with the Ace of Spades!',
    };
  }
  
  // Check if the card can be played
  const canPlay = canPlayCard(
    card,
    state.round.activeSuit,
    state.players[playerIndex].hand
  );
  
  if (!canPlay) {
    return {
      ...state,
      message: 'You must follow suit if possible!',
    };
  }
  
  // Remove card from player's hand
  const updatedPlayers = [...state.players];
  const updatedHand = [...updatedPlayers[playerIndex].hand];
  updatedHand.splice(cardIndex, 1);
  updatedPlayers[playerIndex] = {
    ...updatedPlayers[playerIndex],
    hand: updatedHand,
  };
  
  // Update the round
  const updatedRound = { ...state.round };
  
  // Set active suit if this is the first card played in the round
  if (updatedRound.cardsPlayed.length === 0) {
    updatedRound.activeSuit = card.suit;
  }
  
  // Add card to played cards
  updatedRound.cardsPlayed.push({ playerId, card });
  
  let updatedPhase = state.gamePhase;
  let updatedMessage = `Player ${playerId + 1} played ${card.rank} of ${card.suit}.`;
  let roundWinnerId = null;
  let nextPlayerId = playerId;
  
  // Check if all players have played
  const isRoundComplete = updatedRound.cardsPlayed.length === state.players.length;
  
  if (isRoundComplete) {
    updatedPhase = 'roundEnd';
    
    // Find the highest card of the led suit
    const highestCard = findHighestCardOfSuit(
      updatedRound.cardsPlayed.map(pc => pc.card),
      updatedRound.activeSuit as Suit
    );
    
    if (highestCard) {
      roundWinnerId = updatedRound.cardsPlayed.find(
        pc => pc.card.id === highestCard.id
      )?.playerId || null;
      
      updatedMessage = `Player ${roundWinnerId! + 1} won the trick with ${highestCard.rank} of ${highestCard.suit}.`;
    }
    
    updatedRound.roundWinnerId = roundWinnerId;
  } else {
    // Move to the next player
    nextPlayerId = (playerId + 1) % state.players.length;
    updatedRound.currentPlayerId = nextPlayerId;
    updatedPhase = 'playing';
  }
  
  // Check if any player has no cards left (win condition)
  const winner = updatedPlayers.find(p => p.hand.length === 0);
  let updatedWinner = state.winner;
  
  if (winner && state.winner === null) {
    updatedPhase = 'gameOver';
    updatedWinner = winner.id;
    updatedMessage = `Player ${winner.id + 1} got away and wins the game!`;
  }
  
  return {
    ...state,
    players: updatedPlayers,
    currentPlayerId: nextPlayerId,
    round: updatedRound,
    gamePhase: updatedPhase,
    winner: updatedWinner,
    message: updatedMessage,
  };
};

/**
 * Handles the AI player's turn
 */
export const getAIMove = (state: GameState, playerId: number): string | null => {
  const player = state.players.find(p => p.id === playerId);
  if (!player) return null;
  
  const { hand } = player;
  const { activeSuit } = state.round;
  
  // If this is the first play of the game, must play Ace of Spades
  if (activeSuit === 'spades' && state.round.cardsPlayed.length === 0) {
    const aceOfSpades = hand.find(card => card.suit === 'spades' && card.rank === 'A');
    return aceOfSpades?.id || null;
  }
  
  // Check if we have cards of the active suit
  const suitCards = hand.filter(card => card.suit === activeSuit);
  
  if (suitCards.length > 0) {
    // Strategy: Play the highest card of the suit to win the trick
    const highestCard = suitCards.reduce(
      (highest, current) => current.value > highest.value ? current : highest,
      suitCards[0]
    );
    return highestCard.id;
  } else {
    // We don't have cards of the active suit, play the lowest value card
    const lowestCard = hand.reduce(
      (lowest, current) => current.value < lowest.value ? current : lowest,
      hand[0]
    );
    return lowestCard.id;
  }
};

/**
 * Handles ending a round and collecting cards
 */
export const endRound = (state: GameState, collectorId: number): GameState => {
  // Return unchanged state if we're not in the roundEnd phase
  if (state.gamePhase !== 'roundEnd') return state;
  
  // Set up the next round
  return {
    ...state,
    gamePhase: 'playing',
    round: {
      activeSuit: null,
      cardsPlayed: [],
      startingPlayerId: collectorId,
      currentPlayerId: collectorId,
      roundWinnerId: null,
    },
    message: `Player ${collectorId + 1} leads the next trick.`,
  };
};

/**
 * Handles game state updates based on actions
 */
export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SETUP_GAME': {
      // Find player with Ace of Spades
      const startingPlayerId = action.payload.players.findIndex(player => 
        player.hand.some(card => card.suit === 'spades' && card.rank === 'A')
      );

      return {
        ...state,
        players: action.payload.players,
        currentPlayerId: startingPlayerId,
        round: {
          activeSuit: 'spades', // Game always starts with Ace of Spades
          cardsPlayed: [],
          startingPlayerId,
          currentPlayerId: startingPlayerId,
          roundWinnerId: null,
        },
        gamePhase: 'playing',
        winner: null,
        message: 'Game started! The player with Ace of Spades leads.',
      };
    }
      
    case 'PLAY_CARD':
      return playCard(state, action.payload.playerId, action.payload.cardId);
      
    case 'END_ROUND':
      return endRound(state, action.payload.collectorId);
      
    case 'START_NEW_ROUND':
      return {
        ...state,
        gamePhase: 'playing',
        round: {
          activeSuit: null,
          cardsPlayed: [],
          startingPlayerId: action.payload.startingPlayerId,
          currentPlayerId: action.payload.startingPlayerId,
          roundWinnerId: null,
        },
      };
      
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload.message,
      };
      
    case 'END_GAME':
      return {
        ...state,
        gamePhase: 'gameOver',
        winner: action.payload.winnerId,
        message: `Player ${action.payload.winnerId + 1} got away and wins the game!`,
      };
      
    default:
      return state;
  }
};