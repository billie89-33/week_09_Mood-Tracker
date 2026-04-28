import React from 'react';

// เราจะรับ props ชื่อ moodText (ค่าปัจจุบัน) และ setMoodText (ฟังก์ชันเปลี่ยนค่า)
const AddMood = ({ moodText, setMoodText }) => {
  return (
    <div className="w-full px-4">
      <input
        type="text"
        className="w-full p-4 rounded-lg bg-white shadow-inner outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-300 transition-all"
        placeholder="add your mood..."
        value={moodText} // ดึงค่าจากหน้าพ่อมาโชว์
        onChange={(e) => setMoodText(e.target.value)} // เมื่อพิมพ์ ให้ส่งค่ากลับไปที่หน้าพ่อ
      />
    </div>
  );
};

export default AddMood;