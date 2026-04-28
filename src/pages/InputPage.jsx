import "./InputPage.css";

import React, { useState } from "react";
import AddDate from "../components/Add-date";
import SaveButton from "../components/Save";
import AddMood from "../components/Add-mood";
import { useNavigate } from "react-router-dom";
import MoodButtons from "../components/Mood-buttons";

const InputPage = () => {
  const [mood, setMood] = useState("🥰"); // เก็บรูปอิโมจิที่เลือก
  const [moodText, setMoodText] = useState(""); // เก็บข้อความ
  const [date, setDate] = useState(""); // เก็บวันที่
  const navigate = useNavigate();

  const handleSave = () => {
    if (!date || !moodText) return alert("กรอกข้อมูลให้ครบก่อนนะ!");
    console.log("ปุ่มๆๆๆๆๆๆๆๆๆๆ");
    // ดึงของเก่า -> รวมของใหม่ -> เซฟลง localStorage
    const oldData = JSON.parse(localStorage.getItem("myMoods") || "[]");
    const newData = { id: Date.now(), mood, date, text: moodText };

    localStorage.setItem("myMoods", JSON.stringify([newData, ...oldData]));

    // ไปหน้า History
    navigate("/displaypage");
  };

  return (
    <div className="glass-card p-8 md:p-10 w-full max-w-md flex flex-col items-center animate-fade-in-up">
      {/* AI Header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-500 ai-badge-glow" />
        <p className="text-[11px] text-accent-500 font-bold uppercase tracking-[0.2em] font-display">
          Moody
        </p>
      </div>

      <h1 className="text-2xl font-extrabold mb-8 text-text-primary font-display tracking-tight">
        How are you today? 🌈
      </h1>

      {/* แสดงอิโมจิที่เลือกตัวใหญ่ๆ */}
      <div className="text-8xl mb-8 animate-bounce-soft drop-shadow-lg">
        {mood}
      </div>

      {/* ช่องกรอกข้อมูล */}
      <AddDate date={date} setDate={setDate} />

      <AddMood moodText={moodText} setMoodText={setMoodText} />

      {/* ส่วนเลือกอารมณ์ */}
      <div className="mt-8 w-full">
        <MoodButtons selectedMood={mood} setMood={setMood} />
      </div>

      {/* ปุ่มบันทึก */}
      <SaveButton onSave={handleSave} />
    </div>
  );
};

export default InputPage;
