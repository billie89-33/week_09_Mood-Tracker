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
    <div className="bg-gray-200 p-6 rounded-[40px] w-full max-w-sm shadow-xl min-h-[600px]">
      <h2 className="text-center font-bold text-gray-700 mb-6 text-lg tracking-widest uppercase">
        History
      </h2>

      <div className="space-y-4">
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
          className="mt-8 w-full text-[10px] text-gray-400 hover:text-red-400 transition-colors uppercase tracking-tighter"
        >
          Clear All History
        </button>
      )}
    </div>
  );
};

export default DisplayPage;
