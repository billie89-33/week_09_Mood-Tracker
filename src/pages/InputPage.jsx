import "./InputPage.css";
import Emoji from "../components/Emoji";

const InputPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-700">
        What's your mood today?
      </h1>
      <p className="text-gray-500 mt-2">or what's on your mind</p>
      <Emoji currentMood="happy" />
      {/* เริ่มเขียนโค้ดของคุณที่นี่ */}
    </div>
  );
};

export default InputPage;
