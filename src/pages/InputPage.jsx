import React from 'react';
import "./InputPage.css";

const InputPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-700">หน้าแรก (Input Page)</h1>
      <p className="text-gray-500 mt-2">เขียนโค้ดบันทึกอารมณ์ของคุณตรงนี้...</p>
      
      {/* เริ่มเขียนโค้ดของคุณที่นี่ */}
      <div className="input-page">
        <div className="input-title">
          <h2>What's your mood?</h2>
        </div>

        <div className="input-emoji">
          <div className="emoji-component">Emoji</div>
        </div>

        <div className="input-date">
          <div className="add-date-component">Add-date</div>
        </div>

        <div className="input-mood">
          <div className="add-mood-component">Add-mood</div>
        </div>

        <div className="input-buttons">
          <div className="mood-buttons-component">Mood-buttons</div>
        </div>

        <div className="input-save">
          <div className="save-component">Save</div>
        </div>
      </div>
      
    </div>
  );
};

export default InputPage;
