import "./InputPage.css";
import React, { useState } from 'react';
import AddDate from '../components/Add-date';
import SaveButton from "../components/Save";

const InputPage = () => {
  const [date, setDate] = useState('');

   const handleSave = () => {
    console.log("บันทึกข้อมูลวันที่:", date);
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-700">หน้าแรก (Input Page)</h1>
      <p className="text-gray-500 mt-2">เขียนโค้ดบันทึกอารมณ์ของคุณตรงนี้...</p>
      
      <AddDate date={date} setDate={setDate} />
      <SaveButton onSave={handleSave} />
    </div>
  );
};

export default InputPage;