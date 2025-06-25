'use client';
import { useState } from 'react';

export default function OptionSelector({ options = [], onSelect }) {
  const [selected, setSelected] = useState([]);

  const handleToggle = (option) => {
    let newSelection;
    if (selected.includes(option)) {
      newSelection = selected.filter((item) => item !== option);
    } else {
      newSelection = [...selected, option];
    }
    setSelected(newSelection);
    onSelect?.(newSelection);
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8 gap-4 mt-8">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-gray-700 text-base font-medium"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => handleToggle(option)}
            className="w-5 h-5 text-sky-600 accent-sky-600"
          />
          {option}
        </label>
      ))}
    </div>
  );
}
