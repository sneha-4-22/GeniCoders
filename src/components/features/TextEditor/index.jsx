// TextEditor.js
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../shared/config/store';

const TextEditor = ({ tabWidth }) => {
  const snap = useSnapshot(state);
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');

  const modalWidth = tabWidth * 0.9;

  const handleAddText = () => {
    if (text) {
      const newTextElement = {
        id: Date.now(),
        content: text,
        font,
        fontSize,
        color,
        position: { x: 50, y: 50 }, 
      };
      state.textElements = [...state.textElements, newTextElement];
      setText('');
    }
  };

  return (
    <div className='filepicker-container' style={{ width: `${modalWidth}px` }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        className="w-full p-2 mb-2 border rounded"
      />
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <input
        type="number"
        value={fontSize}
        onChange={(e) => setFontSize(parseInt(e.target.value))}
        min="8"
        max="72"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full p-2 mb-1 border rounded"
      />
      <button
        onClick={handleAddText}
        className="w-full p-2  bg-pink-300 text-white rounded hover:bg-pink-300"
      >
        Add Text
      </button>
    </div>
  );
};

export default TextEditor;