import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useSnapshot } from 'valtio';
import state from '../../shared/config/store';

const fonts = [
  'Arial', 'Helvetica', 'Verdana', 'Tahoma', 'Trebuchet MS',
  'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT',
  'Lucida Sans', 'Palatino', 'Bookman', 'Comic Sans MS', 'Candara',
  'Arial Black', 'Impact'
];

const TextEditor = ({ tabWidth }) => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [alignment, setAlignment] = useState('left');

  const modalWidth = tabWidth * 0.9;

  const handleAddText = () => {
    if (text) {
      const newTextElement = {
        id: Date.now(),
        content: text,
        font,
        fontSize,
        color,
        bold,
        italic,
        underline,
        alignment,
        position: { x: 0, y: 0 },
      };
      state.textElements = [...state.textElements, newTextElement];
      setText('');
    }
  };

  return (
    <div className='filepicker-container' style={{ width: `${modalWidth}px` }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        className="w-full p-2 mb-2 border rounded"
        rows="3"
      />
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        {fonts.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>
      <div className="flex justify-between mb-2">
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          min="8"
          max="72"
          className="w-1/2 p-2 border rounded mr-2"
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
      </div>
      <div className="flex justify-between mb-2">
        <button
          onClick={() => setBold(!bold)}
          className={`p-2 border rounded ${bold ? 'bg-gray-300' : ''}`}
        >
          B
        </button>
        <button
          onClick={() => setItalic(!italic)}
          className={`p-2 border rounded ${italic ? 'bg-gray-300' : ''}`}
        >
          I
        </button>
        <button
          onClick={() => setUnderline(!underline)}
          className={`p-2 border rounded ${underline ? 'bg-gray-300' : ''}`}
        >
          U
        </button>
        <select
          value={alignment}
          onChange={(e) => setAlignment(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <button
        onClick={handleAddText}
        className="w-full p-2 bg-pink-300 text-white rounded hover:bg-pink-400"
      >
        Add Text
      </button>

      <div className="relative">
        {state.textElements.map((element) => (
          <Draggable key={element.id}>
            <div
              style={{
                position: 'absolute',
                left: element.position.x,
                top: element.position.y,
                fontSize: `${element.fontSize}px`,
                fontFamily: element.font,
                color: element.color,
                fontWeight: element.bold ? 'bold' : 'normal',
                fontStyle: element.italic ? 'italic' : 'normal',
                textDecoration: element.underline ? 'underline' : 'none',
                textAlign: element.alignment,
                cursor: 'move',
              }}
            >
              {element.content}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default TextEditor;
