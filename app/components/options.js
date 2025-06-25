'use client';
import { useState } from 'react';

export default function OptionSelector({ options = [], onSelect }) {
  const [selected, setSelected] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);

  const handleToggle = (option) => {
    let newSelection;
    if (selected.includes(option)) {
      newSelection = selected.filter((item) => item !== option);
    } else {
      newSelection = [...selected, option];
    }
    setSelected(newSelection);
  };

  const handleSubmit = () => {
    setSubmittedOptions(selected);
    onSelect?.(selected);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10 px-4">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8 gap-4">
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

      <button
        onClick={handleSubmit}
        className="bg-sky-800 text-white font-medium px-6 py-2 rounded-lg hover:bg-sky-600 transition"
      >
        Submit
      </button>

      {submittedOptions.length > 0 && (
        <div className="text-center mt-4 text-sky-700 text-lg">
          <p className="font-semibold mb-1">You selected:</p>
          <ul className="space-y-1">
            {submittedOptions.map((opt) => (
              <li key={opt}>✅ {opt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
