import React from 'react';


const Save = ({ data, handleSave }) => {

  const fnSave = () => {
   
    if (!data) return; 
    

    handleSave(data); 
    
    console.log("บันทึกข้อมูลเรียบร้อย:", data);
  };

  return (
    <div className="save-container">
      {/* หน้าตาปุ่มตามที่เพื่อนออกแบบไว้ */}
      <button className="btn-save" onClick={fnSave}>
        SAVE
      </button>
    </div>
  );
};

export default Save; // เพื่อให้เพื่อน Import ไปใช้ได้