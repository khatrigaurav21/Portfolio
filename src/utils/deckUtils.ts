import { Card, Rank, Suit } from '../types/game';

// Define the order of ranks from lowest to highest
const rankOrder: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Define the suits
const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];

/**
 * Creates a standard deck of 52 cards
 */
export const createDeck = (): Card[] => {
  const deck: Card[] = [];
  
  suits.forEach(suit => {
    rankOrder.forEach((rank, index) => {
      deck.push({
        id: `${suit}-${rank}`,
        suit,
        rank,
        value: index + 2, // 2 has value 2, Ace has value 14
      });
    });
  });
  
  return deck;
};

/**
 * Shuffles a deck of cards using the Fisher-Yates algorithm
 */
export const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffled = [...deck];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

/**
 * Deals cards to players
 */
export const dealCards = (deck: Card[], numPlayers: number, cardsPerPlayer: number): Card[][] => {
  const hands: Card[][] = Array(numPlayers).fill(null).map(() => []);
  
  for (let i = 0; i < cardsPerPlayer; i++) {
    for (let j = 0; j < numPlayers; j++) {
      if (deck.length > 0) {
        const card = deck.pop()!;
        hands[j].push(card);
      }
    }
  }
  
  return hands;
};

/**
 * Determines if a card can be played
 */
export const canPlayCard = (
  card: Card,
  activeSuit: Suit | null,
  hand: Card[]
): boolean => {
  // If no active suit, any card can be played
  if (activeSuit === null) {
    return true;
  }
  
  // If the card matches the active suit, it can be played
  if (card.suit === activeSuit) {
    return true;
  }
  
  // If the player has no cards of the active suit, any card can be played
  const hasActiveSuit = hand.some(c => c.suit === activeSuit);
  return !hasActiveSuit;
};

/**
 * Finds the highest card of a specific suit
 */
export const findHighestCardOfSuit = (cards: Card[], suit: Suit): Card | null => {
  const suitCards = cards.filter(card => card.suit === suit);
  
  if (suitCards.length === 0) {
    return null;
  }
  
  return suitCards.reduce((highest, current) => 
    current.value > highest.value ? current : highest
  , suitCards[0]);
};

/**
 * Gets the display symbol for a suit
 */
export const getSuitSymbol = (suit: Suit): string => {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'clubs': return '♣';
    case 'spades': return '♠';
  }
};

/**
 * Gets the display value for a rank
 */
export const getDisplayRank = (rank: Rank): string => {
  return rank;
};