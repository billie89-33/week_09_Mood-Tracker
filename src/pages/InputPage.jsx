import "./InputPage.css";
import React, { useState } from "react";
import AddDate from "../components/Add-date";
import SaveButton from "../components/Save";

const InputPage = () => {
  const [mood, setMood] = useState('🥰'); // เก็บรูปอิโมจิที่เลือก
  const [moodText, setMoodText] = useState(''); // เก็บข้อความ
  const [date, setDate] = useState(''); // เก็บวันที่
  const navigate = useNavigate();

  const handleSave = () => {
    if (!date || !moodText) return alert("กรอกข้อมูลให้ครบก่อนนะ!");

     // ดึงของเก่า -> รวมของใหม่ -> เซฟลง localStorage
    const oldData = JSON.parse(localStorage.getItem('myMoods') || '[]');
    const newData = { id: Date.now(), mood, date, text: moodText };
    localStorage.setItem('myMoods', JSON.stringify([newData, ...oldData]));

    // ไปหน้า History
    navigate('/displaypage');
  };


  return (
     <div className="bg-gray-200 p-8 rounded-[40px] w-full max-w-sm shadow-xl flex flex-col items-center">
      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">what's your mood ninja</p>
      <h1 className="text-xl font-bold mb-8 text-gray-800">How are you today?</h1>

      {/* แสดงอิโมจิที่เลือกตัวใหญ่ๆ */}
      <div className="text-8xl mb-10 transition-all duration-300 transform scale-110">
        {mood}
      </div>
      
      {/* ช่องกรอกข้อมูล */}
      <AddDate date={date} setDate={setDate} />
      <AddMood moodText={moodText} setMoodText={setMoodText} />
      
      {/* ส่วนเลือกอารมณ์ */}
      <div className="mt-8 w-full">
        //<MoodButtons selectedMood={mood} setMood={setMood} />
      </div>

      {/* ปุ่มบันทึก */}
      <SaveButton onSave={handleSave} />
    </div>
  );
};

export default InputPage;
