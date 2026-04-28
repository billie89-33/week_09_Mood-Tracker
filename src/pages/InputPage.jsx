import React from 'react';
import "./InputPage.css";
import AddMood from '../components/Add-mood';

const InputPage = () => {

const [moodText, setMoodText] = useState(''); // สร้างถังเก็บข้อมูลไว้ที่นี่
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-700">หน้าแรก (Input Page)</h1>
      <p className="text-gray-500 mt-2">เขียนโค้ดบันทึกอารมณ์ของคุณตรงนี้...</p>
      
      <AddMood moodText={moodText} setMoodText={setMoodText} />
      
    </div>
  );
};

export default InputPage;