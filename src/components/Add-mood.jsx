import React from 'react';

// เราจะรับ props ชื่อ moodText (ค่าปัจจุบัน) และ setMoodText (ฟังก์ชันเปลี่ยนค่า)
const AddMood = ({ moodText, setMoodText }) => {
  return (
    <div className="w-full px-2">
      <label className="block text-xs font-semibold text-text-secondary mb-1.5 ml-1 tracking-wide">
        💭 What's on your mind?
      </label>
      <input
        type="text"
        className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm shadow-sm outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 focus:bg-white/70 transition-all duration-300 text-sm text-text-primary placeholder-text-muted font-body"
        placeholder="add your mood..."
        value={moodText} // ดึงค่าจากหน้าพ่อมาโชว์
        onChange={(e) => setMoodText(e.target.value)} // เมื่อพิมพ์ ให้ส่งค่ากลับไปที่หน้าพ่อ
      />
    </div>
  );
};

export default AddMood;