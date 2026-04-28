import React from 'react';

const HistoryCard = ({ entry, index, onDelete }) => {
  const moodColors = {
    '🥰': 'from-pink-100/80 to-rose-50/60',
    '😡': 'from-red-100/80 to-orange-50/60',
    '🤩': 'from-amber-100/80 to-yellow-50/60',
    '😰': 'from-blue-100/80 to-cyan-50/60',
    '😐': 'from-slate-100/80 to-gray-50/60',
  };

  return (
    <div className={`flex items-center gap-3 group animate-fade-in-up stagger-${index + 1}`}>
      {/* ตัวเลขลำดับด้านหน้า */}
      <span className="text-text-muted text-xs font-bold w-5 text-right font-display opacity-40">
        {index + 1}
      </span>

      {/* การ์ดสีขาวแสดงข้อมูล */}
      <div
        className={`flex-1 p-3.5 rounded-2xl flex items-center justify-between relative transition-all duration-300 min-h-[68px] border border-white/50 ${entry
            ? `bg-gradient-to-r ${moodColors[entry.mood] || 'from-white/70 to-white/50'} backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-[1.01]`
            : 'bg-white/30 backdrop-blur-sm'
          }`}
      >
        {entry ? (
          <>
            <div className="flex items-center gap-3.5 w-full pr-8">
              <span className="text-3xl flex-shrink-0">{entry.mood}</span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-text-muted leading-tight tracking-wider uppercase">
                  {entry.date}
                </span>
                <p className="text-[13px] text-text-primary leading-snug break-words line-clamp-2 font-medium">
                  {entry.text}
                </p>
              </div>
            </div>
            {/* ปุ่มลบ (ถังขยะ) จะปรากฏเมื่อเอาเมาส์ไปวาง หรือแตะ */}
            <button
              onClick={() => onDelete(entry.id)}
              className="absolute right-3 text-text-muted/40 hover:text-rose-500 transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              🗑️
            </button>
          </>
        ) : (
          /* กรณีไม่มีข้อมูลให้โชว์เป็นเส้นว่างๆ ตามดีไซน์ */
          <div className="flex items-center gap-3 w-full px-1 opacity-30">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-accent-100" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-16 bg-primary-100 rounded-full" />
              <div className="h-2 w-24 bg-primary-50 rounded-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;