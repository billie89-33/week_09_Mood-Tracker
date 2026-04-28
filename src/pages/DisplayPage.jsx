import React, { useState, useEffect } from "react";
import HistoryCard from "../components/History-card";

const DisplayPage = () => {
  const [items, setItems] = useState([]);

  // ดึงข้อมูลเมื่อเปิดหน้า
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myMoods") || "[]");
    setItems(data);
  }, []);

  // ฟังก์ชันลบรายการ
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("myMoods", JSON.stringify(updatedItems));
  };

  return (
    <div className="glass-card p-6 md:p-8 w-full max-w-md min-h-[600px] animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 ai-badge-glow" />
          <span className="text-[11px] text-accent-500 font-bold uppercase tracking-[0.2em] font-display">
            Mood Journal
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-text-primary font-display tracking-tight">
          📖 Your History
        </h2>
        {items.length > 0 && (
          <p className="text-xs text-text-muted mt-1">
            {items.length} mood{items.length !== 1 ? 's' : ''} recorded
          </p>
        )}
      </div>

      <div className="space-y-3">
        {/* วนลูปโชว์ 8 ช่องตามดีไซน์ต้นฉบับของคุณ */}
        {[...Array(8)].map((_, i) => (
          <HistoryCard
            key={i}
            index={i}
            entry={items[i]}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* ปุ่มล้างข้อมูลทั้งหมด (ถ้ามีข้อมูล) */}
      {items.length > 0 && (
        <button
          onClick={() => {
            if (window.confirm("ลบประวัติทั้งหมดใช่ไหม?")) {
              localStorage.removeItem("myMoods");
              setItems([]);
            }
          }}
          className="mt-8 w-full text-xs text-text-muted hover:text-rose-500 transition-all duration-300 uppercase tracking-wider font-semibold cursor-pointer hover:tracking-widest"
        >
          🗑️ Clear All History
        </button>
      )}
    </div>
  );
};

export default DisplayPage;
