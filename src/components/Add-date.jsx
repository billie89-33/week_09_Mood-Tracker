import { useState } from "react";

function AddDate() {
  const [date, setDate] = useState("");

  return (
    <input
      type="text"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      placeholder="yy-mm-dd   (input your date)"
      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white "
    />
  );
}

export default AddDate;
