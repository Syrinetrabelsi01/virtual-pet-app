import { useState, useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import StatBars from './components/StatBars';
import ActionButtons from './components/ActionButtons';

// ✅ Helper to safely read from localStorage
const getFromStorage = (key, fallback) => {
  const value = localStorage.getItem(key);
  const num = parseInt(value);
  return isNaN(num) ? fallback : num;
};

function App() {
  const [hunger, setHunger] = useState(() => getFromStorage('hunger', 70));
  const [energy, setEnergy] = useState(() => getFromStorage('energy', 50));
  const [happiness, setHappiness] = useState(() => getFromStorage('happiness', 80));

  // ✅ Ask for notification permission
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // ✅ Decay values over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(prev - 1, 0));
      setEnergy(prev => Math.max(prev - 1, 0));
      setHappiness(prev => Math.max(prev - 1, 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Save to localStorage + notify if low
  const notify = (message) => {
    if (Notification.permission === 'granted') {
      new Notification(message);
    }
  };

  useEffect(() => {
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('energy', energy);
    localStorage.setItem('happiness', happiness);

    if (hunger < 20) notify("⚠️ Your panda is starving!");
    if (energy < 20) notify("⚡ Your panda is exhausted!");
    if (happiness < 20) notify("😢 Your panda is feeling sad!");
  }, [hunger, energy, happiness]);

  // ✅ Button handlers
  const feedPet = () => setHunger(prev => Math.min(prev + 10, 100));
  const playWithPet = () => setHappiness(prev => Math.min(prev + 10, 100));
  const letPetSleep = () => setEnergy(prev => Math.min(prev + 10, 100));

  return (
    <div className="h-screen bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🐾 Your Virtual Panda</h1>

        <div className="flex flex-col items-center gap-1">
          <PetDisplay hunger={hunger} energy={energy} happiness={happiness} />
          <StatBars hunger={hunger} energy={energy} happiness={happiness} />
        </div>

        <ActionButtons
          onFeed={feedPet}
          onPlay={playWithPet}
          onSleep={letPetSleep}
        />
      </div>
    </div>
  );
}

export default App;
