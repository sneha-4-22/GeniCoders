import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
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
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);
  const [selectedElement, setSelectedElement] = useState(null);

  const modalWidth = tabWidth * 0.9;
  const snap = useSnapshot(state);

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
        position: { x: positionX, y: positionY },
        width: 200,
        height: 50,
      };
      state.textElements = [...state.textElements, newTextElement];
      setText('');
    }
  };

  const handleUpdateTextElement = (key, value) => {
    if (selectedElement) {
      const updatedElements = snap.textElements.map((el) =>
        el.id === selectedElement.id ? { ...el, [key]: value } : el
      );
      state.textElements = updatedElements;
    }
  };

  useEffect(() => {
    if (selectedElement) {
      setText(selectedElement.content);
      setFont(selectedElement.font);
      setFontSize(selectedElement.fontSize);
      setColor(selectedElement.color);
      setBold(selectedElement.bold);
      setItalic(selectedElement.italic);
      setUnderline(selectedElement.underline);
      setAlignment(selectedElement.alignment);
      setPositionX(selectedElement.position.x);
      setPositionY(selectedElement.position.y);
    }
  }, [selectedElement]);

  return (
    <div className="filepicker-container" style={{ width: `${modalWidth}px` }}>
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
      <div className="flex justify-between mb-2">
        <input
          type="range"
          min="0"
          max="100"
          value={positionX}
          onChange={(e) => setPositionX(parseInt(e.target.value))}
          className="w-1/2 mr-2"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={positionY}
          onChange={(e) => setPositionY(parseInt(e.target.value))}
          className="w-1/2"
        />
      </div>
      <button
        onClick={handleAddText}
        className="w-full p-2 bg-pink-300 text-white rounded hover:bg-pink-400"
      >
        Add Text
      </button>
      {selectedElement && (
        <div className="mt-4 p-2 border rounded bg-white">
          <h3 className="mb-2">Edit Text</h3>
          <textarea
            value={text}
            onChange={(e) => handleUpdateTextElement('content', e.target.value)}
            className="w-full p-2 mb-2 border rounded"
            rows="3"
          />
          <select
            value={font}
            onChange={(e) => handleUpdateTextElement('font', e.target.value)}
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
              onChange={(e) => handleUpdateTextElement('fontSize', parseInt(e.target.value))}
              min="8"
              max="72"
              className="w-1/2 p-2 border rounded mr-2"
            />
            <input
              type="color"
              value={color}
              onChange={(e) => handleUpdateTextElement('color', e.target.value)}
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <div className="flex justify-between mb-2">
            <button
              onClick={() => handleUpdateTextElement('bold', !bold)}
              className={`p-2 border rounded ${bold ? 'bg-gray-300' : ''}`}
            >
              B
            </button>
            <button
              onClick={() => handleUpdateTextElement('italic', !italic)}
              className={`p-2 border rounded ${italic ? 'bg-gray-300' : ''}`}
            >
              I
            </button>
            <button
              onClick={() => handleUpdateTextElement('underline', !underline)}
              className={`p-2 border rounded ${underline ? 'bg-gray-300' : ''}`}
            >
              U
            </button>
            <select
              value={alignment}
              onChange={(e) => handleUpdateTextElement('alignment', e.target.value)}
              className="p-2 border rounded"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <button
            onClick={() => {
              state.textElements = state.textElements.filter(el => el.id !== selectedElement.id);
              setSelectedElement(null);
            }}
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Text
          </button>
        </div>
      )}
      <div className="relative w-full h-96 border border-dashed mt-4">
        {snap.textElements.map((element) => (
          <Draggable
            key={element.id}
            defaultPosition={element.position}
            onStop={(e, data) => {
              const updatedElements = snap.textElements.map((el) =>
                el.id === element.id ? { ...el, position: { x: data.x, y: data.y } } : el
              );
              state.textElements = updatedElements;
            }}
            onClick={() => setSelectedElement(element)}
          >
            <Resizable
              width={element.width}
              height={element.height}
              onResize={(e, { size }) => {
                const updatedElements = snap.textElements.map((el) =>
                  el.id === element.id ? { ...el, width: size.width, height: size.height } : el
                );
                state.textElements = updatedElements;
              }}
              draggableOpts={{ grid: [25, 25] }}
              onResizeStop={(e, data) => {
                handleUpdateTextElement('width', data.size.width);
                handleUpdateTextElement('height', data.size.height);
              }}
            >
              <div
                style={{
                  fontFamily: element.font,
                  fontSize: element.fontSize,
                  color: element.color,
                  fontWeight: element.bold ? 'bold' : 'normal',
                  fontStyle: element.italic ? 'italic' : 'normal',
                  textDecoration: element.underline ? 'underline' : 'none',
                  textAlign: element.alignment,
                  width: element.width,
                  height: element.height,
                  display: 'flex',
                  justifyContent: element.alignment,
                  alignItems: 'center',
                  border: '1px dashed #000',
                  padding: '5px',
                  cursor: 'pointer'
                }}
              >
                {element.content}
              </div>
            </Resizable>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default TextEditor;
