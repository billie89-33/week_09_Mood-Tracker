import React from 'react';
import "./DisplayPage.css"

const DisplayPage = () => {
  const mockData = [1, 2, 3];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-700">หน้าประวัติ (History Page)</h1>
      <p className="text-gray-500 mt-2">เขียนโค้ดแสดงรายการที่บันทึกตรงนี้...</p>

      {/* เริ่มเขียนโค้ดของคุณที่นี่ */}
      <div className="display-page">
        <div className="display-title">
          <h2>History</h2>
        </div>

        <div className="history-list">
          {mockData.map((item) => (
            <div key={item} className="history-item">
              <div className="history-card-component">History-card</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DisplayPage;
