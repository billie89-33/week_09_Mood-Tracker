import "./InputPage.css";
import React, { useState } from "react";
import AddDate from "../components/Add-date";
import SaveButton from "../components/Save";

const InputPage = () => {
  const [date, setDate] = useState("");

  const handleSave = () => {
    console.log("บันทึกข้อมูลวันที่:", date);
  };

  return (
    <div className="input-page">
      <div className="input-title">
        <h2>What's your mood?</h2>
      </div>

      <div className="input-emoji">
        <div className="emoji-component">Emoji</div>
      </div>

      <div className="input-date">
        <AddDate date={date} setDate={setDate} />
      </div>

      <div className="input-mood">
        <div className="add-mood-component">Add-mood</div>
      </div>

      <div className="input-buttons">
        <div className="mood-buttons-component">Mood-buttons</div>
      </div>

      <div className="input-save">
        <SaveButton onSave={handleSave} />
      </div>
    </div>
  );
};

export default InputPage;
