export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  votes: number;
  location: string;
  addedBy: string;
  createdAt: Date;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  destinations: string[];
  duration: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
  cost: number;
  rating: number;
  votes: number;
  createdBy: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  reputation: number;
  createdAt: Date;
}