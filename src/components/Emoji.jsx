import HappyIcon from "./assets/happy.svg";
import SadIcon from "./assets/sad.svg";
import NormalIcon from "./assets/normal.svg";
import AngryIcon from "./assets/angry.svg";

const moodImages = {
  // 2. เปลี่ยนจาก <HappyIcon /> เป็น <img src={...} />
  happy: <img src={HappyIcon} className="w-40 h-40" alt="happy" />,
  sad: <img src={SadIcon} className="w-40 h-40" alt="sad" />,
  angry: <img src={AngryIcon} className="w-40 h-40" alt="angry" />,
  normal: <img src={NormalIcon} className="w-40 h-40" alt="normal" />,
};

export default function Emoji({ currentMood }) {
  const DisplayIcon = moodImages[currentMood] || (
    <img src={HappyIcon} className="w-40 h-40" alt="default" />
  );

  return (
    <div className="flex justify-center items-center my-8">
      <div className="emoji-vibe">{DisplayIcon}</div>
    </div>
  );
}
