import React from 'react';
import { MapPin, Star, ThumbsUp } from 'lucide-react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{destination.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
            <p className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {destination.location}
            </p>
          </div>
          <div className="flex items-center text-gray-500">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span className="text-sm">{destination.votes}</span>
          </div>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            View Details
          </button>
          <span className="text-sm text-gray-500">
            Added by {destination.addedBy}
          </span>
        </div>
      </div>
    </div>
  );
}