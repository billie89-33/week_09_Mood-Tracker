import React from 'react';



const SaveButton = ({ onSave }) => {
  return (
    <div className="mt-6 w-full flex justify-center">
      <button
        onClick={onSave}
        className="group relative bg-gradient-to-r from-primary-500 to-accent-500 text-white px-14 py-3 rounded-full font-bold font-display text-sm tracking-wider
                   shadow-lg shadow-primary-300/30 hover:shadow-xl hover:shadow-primary-400/40 
                   active:scale-95 hover:scale-105 transition-all duration-300
                   overflow-hidden cursor-pointer"
      >
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        <span className="relative flex items-center gap-2">
          บันทึกเรื่องราว
        </span>
      </button>
    </div>
  );
};

export default SaveButton;