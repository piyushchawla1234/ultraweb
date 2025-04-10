// src/components/ToggleButton.tsx
import { useState } from 'react';

const ToggleButton = ({ onToggleChange }: { onToggleChange: (newState: boolean) => void }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    onToggleChange(!isToggled); // Trigger the parent function with the new state
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-6 py-3 rounded-full text-white ${isToggled ? 'bg-green-500' : 'bg-gray-500'}`}
    >
      {isToggled ? 'Turn Off UltraWeb.ai' : 'Turn On UltraWeb.ai'}
    </button>
  );
};

export default ToggleButton;
