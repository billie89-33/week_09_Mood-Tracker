import React from 'react';

// 2. รับ props ชื่อ date และ setDate เข้ามาในปีกกา
function AddDate({ date, setDate }) {
  return (
    <div className="w-full px-2 mb-3">
      <label className="block text-xs font-semibold text-text-secondary mb-1.5 ml-1 tracking-wide">
        📅 Date
      </label>
      <input
        type="date"
        value={date} // ใช้ค่าจากหน้าพ่อ
        onChange={(e) => setDate(e.target.value)} // ส่งค่ากลับไปให้หน้าพ่อ
        className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm shadow-sm outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 focus:bg-white/70 transition-all duration-300 text-sm text-text-primary font-body cursor-pointer"
        style={{ colorScheme: 'light' }}
      />
    </div>
  );
}

export default AddDate;