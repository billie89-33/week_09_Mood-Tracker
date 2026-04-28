const HistoryCard = ({ date, icon, note, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-3 mb-4 flex flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* DATE */}
      <span className="text-xs text-gray-400 font-medium mb-1.5">{date}</span>

      {/* MAIN */}
      <div className="flex items-start gap-3">
        {/* EMOJI */}
        <div className="text-3xl shrink-0">{icon}</div>

        {/* NOTE */}
        <div className="flex-1 text-sm text-gray-700 line-clamp-2 leading-relaxed">
          {note}
        </div>

        {/* DELETE */}
        <button
          onClick={onDelete}
          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
          aria-label="Delete history"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
