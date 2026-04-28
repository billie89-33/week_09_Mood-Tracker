import React from 'react';

const MoodButtons = ({ selectedMood, setMood }) => {
  const moods = ['🥰', '😡', '🤩', '😰', '😐'];

  const moodLabels = {
    '🥰': 'Loved',
    '😡': 'Angry',
    '🤩': 'Excited',
    '😰': 'Anxious',
    '😐': 'Neutral',
  };

  return (
    <div className="flex justify-around w-full mb-4">
      {moods.map((emoji) => {
        const isSelected = selectedMood === emoji;
        return (
          <button
            key={emoji}
            onClick={() => setMood(emoji)}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all duration-300 cursor-pointer ${isSelected
                ? 'bg-white/70 shadow-lg shadow-primary-200/30 scale-110'
                : 'hover:bg-white/40 hover:scale-105 opacity-50 hover:opacity-80'
              }`}
          >
            <span className={`text-3xl ${isSelected ? 'animate-bounce-soft' : ''}`}>
              {emoji}
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wide transition-colors duration-200 ${isSelected ? 'text-primary-600' : 'text-text-muted'
                }`}
            >
              {moodLabels[emoji]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MoodButtons;