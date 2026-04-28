import React from 'react';



const SaveButton = ({ onSave }) => {
  return (
    <div className="mt-8 w-full flex justify-center">
      <button
        onClick={onSave}
        className="bg-[#374151] text-white px-12 py-2 rounded-full font-bold 
                   shadow-lg hover:bg-black active:scale-95 transition-all duration-200"
      >
        บันทึก
      </button>
    </div>
  );
};

export default SaveButton;