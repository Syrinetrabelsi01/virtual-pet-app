function StatBars({ hunger, energy, happiness }) {
  // 👇 Put this logic at the top inside the component
  const getColor = (value) => {
    if (value < 30) return '#f87171'; // red-400
    if (value < 70) return '#facc15'; // yellow-400
    return '#4ade80'; // green-400
  };

  const fillStyle = (value) => ({
    height: '100%',
    width: `${value}%`,
    backgroundColor: getColor(value),
    transition: 'width 0.5s ease-in-out',
    borderRadius: '9999px',
  });

  // 👇 Then use it in your return block
  return (
    <div style={{ width: '100%', maxWidth: '300px', margin: '20px auto' }}>
      <div style={{ marginBottom: '16px' }}>
        <label className="block text-sm font-medium mb-1">Hunger 🍗</label>
        <div style={{ height: '20px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={fillStyle(hunger)} />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label className="block text-sm font-medium mb-1">Energy ⚡</label>
        <div style={{ height: '20px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={fillStyle(energy)} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Happiness 😊</label>
        <div style={{ height: '20px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={fillStyle(happiness)} />
        </div>
      </div>
    </div>
  );
}

export default StatBars;
