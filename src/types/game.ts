export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  id: string;
  suit: Suit;
  rank: Rank;
  value: number;
}

export interface Player {
  id: number;
  name: string;
  hand: Card[];
  isHuman: boolean;
}

export type GamePhase = 'setup' | 'playing' | 'roundEnd' | 'gameOver';

export interface Round {
  activeSuit: Suit | null;
  cardsPlayed: {
    playerId: number;
    card: Card;
  }[];
  startingPlayerId: number;
  currentPlayerId: number;
  roundWinnerId: number | null;
}

export interface GameState {
  players: Player[];
  currentPlayerId: number;
  humanPlayerId: number;
  round: Round;
  gamePhase: GamePhase;
  winner: number | null;
  message: string;
}

export type GameAction =
  | { type: 'SETUP_GAME'; payload: { players: Player[]; startingPlayerId: number } }
  | { type: 'PLAY_CARD'; payload: { playerId: number; cardId: string } }
  | { type: 'END_ROUND'; payload: { collectorId: number } }
  | { type: 'START_NEW_ROUND'; payload: { startingPlayerId: number } }
  | { type: 'SET_MESSAGE'; payload: { message: string } }
  | { type: 'END_GAME'; payload: { winnerId: number } };