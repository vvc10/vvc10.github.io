import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { playSound } from '../app/utils/playsound';

export function NavigationButton({ direction, onClick }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const position = direction === 'prev' ? 'left-64' : 'right-64';

  return (
    <button
      onClick={() => {
        playSound();
        onClick();
      }}
      className={`absolute ${position} z-10 bg-black/0 p-2 opacity-25 rounded-full transition-colors`}
    >
      <Icon size={34} />
    </button>
  );
}