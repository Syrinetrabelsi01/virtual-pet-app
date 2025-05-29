function ActionButtons({ onFeed, onPlay, onSleep }) {
  const base = `px-6 py-2 rounded-full text-white font-semibold text-base
    shadow-md hover:scale-105 transition-transform duration-150`;

  return (
    <div className="flex justify-center items-center gap-4 mt-2">
      <button
        onClick={onFeed}
        className={`${base} bg-red-500 hover:bg-red-600`}
      >
        🍗 Feed
      </button>
      <button
        onClick={onPlay}
        className={`${base} bg-blue-500 hover:bg-blue-600`}
      >
        🎮 Play
      </button>
      <button
        onClick={onSleep}
        className={`${base} bg-purple-500 hover:bg-purple-600`}
      >
        💤 Sleep
      </button>
    </div>
  );
}

export default ActionButtons;
