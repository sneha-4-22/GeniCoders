import React, { useState, useEffect, useRef } from 'react';
import { Canvas, Image as FabricImage, Text as FabricText } from 'fabric';
import { SketchPicker } from 'react-color';
import './DesignStudio.css';
import tshirtImage from './tshirt.png';

const DesignStudio = () => {
  const [canvas, setCanvas] = useState(null);
  const [tshirtColor, setTshirtColor] = useState('#FFFFFF');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const canvasRef = useRef(null);

  const designElements = {
    logos: ['logo1.png', 'logo2.png', 'logo3.png'],
    animes: ['anime1.png', 'anime2.png', 'anime3.png'],
    stickers: ['sticker1.png', 'sticker2.png', 'sticker3.png'],
    flowers: ['flower1.png', 'flower2.png', 'flower3.png'],
  };

  useEffect(() => {
    const initCanvas = new Canvas(canvasRef.current, {
      width: 400,
      height: 700,
    });
    setCanvas(initCanvas);

    // Load T-shirt image
    FabricImage.fromURL(tshirtImage, (img) => {
      if (img) {
        console.log('T-shirt image loaded successfully');
        img.scaleToWidth(400);
        initCanvas.setBackgroundImage(img, initCanvas.renderAll.bind(initCanvas));
      } else {
        console.error('Failed to load T-shirt image');
      }
    }, (error) => {
      console.error('Error loading T-shirt image:', error);
    });

    return () => {
      initCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas) {
      const tshirtObject = canvas.backgroundImage;
      if (tshirtObject) {
        tshirtObject.set('fill', tshirtColor);
        canvas.renderAll();
      }
    }
  }, [canvas, tshirtColor]);

  const changeTshirtColor = (color) => {
    setTshirtColor(color.hex);
  };

  const addElement = (elementUrl) => {
    FabricImage.fromURL(elementUrl, (img) => {
      img.scaleToWidth(100);
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const addCustomText = () => {
    const text = prompt('Enter your custom text:');
    if (text) {
      const textObj = new FabricText(text, {
        left: 50,
        top: 50,
        fontFamily: 'Arial',
        fill: '#000000',
        fontSize: 20
      });
      canvas.add(textObj);
      canvas.renderAll();
    }
  };

  return (
    <div className="design-studio">
      <h1>T-Shirt Design Studio</h1>
      <div className="design-area">
        <div className="tshirt-display" style={{ border: '1px solid black', minHeight: '700px' }}>
          <canvas ref={canvasRef}></canvas>
          <img src={tshirtImage} alt="T-shirt" style={{ width: '400px', display: 'none' }} />
        </div>
        <div className="design-options">
          <div className="color-options">
            <h3>Choose T-shirt Color</h3>
            <div 
              className="color-preview" 
              style={{ backgroundColor: tshirtColor, width: '50px', height: '50px', cursor: 'pointer' }} 
              onClick={() => setShowColorPicker(!showColorPicker)}
            ></div>
            {showColorPicker && (
              <div className="color-picker-popover">
                <div className="color-picker-cover" onClick={() => setShowColorPicker(false)} />
                <SketchPicker color={tshirtColor} onChange={changeTshirtColor} />
              </div>
            )}
          </div>
          <div className="element-options">
            <h3>Add Design Elements</h3>
            {Object.entries(designElements).map(([category, elements]) => (
              <div key={category} className="element-category">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="element-grid">
                  {elements.map((element) => (
                    <img
                      key={element}
                      src={`/images/${element}`}
                      alt={element}
                      onClick={() => addElement(`/images/${element}`)}
                      style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="add-text-btn" onClick={addCustomText}>Add Custom Text</button>
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;