import React, { useState, useEffect, useRef } from 'react';
import { Canvas, Image as FabricImage, Text as FabricText } from 'fabric';
import './DesignStudio.css';

const DesignStudio = () => {
  const [canvas, setCanvas] = useState(null);
  const [tshirtColor, setTshirtColor] = useState('#FFFFFF');
  const canvasRef = useRef(null);

  const tshirtColors = ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
  const designElements = {
    logos: ['logo1.png', 'logo2.png', 'logo3.png'],
    animes: ['anime1.png', 'anime2.png', 'anime3.png'],
    stickers: ['sticker1.png', 'sticker2.png', 'sticker3.png'],
    flowers: ['flower1.png', 'flower2.png', 'flower3.png'],
  };

  useEffect(() => {
    const initCanvas = new Canvas(canvasRef.current, {
      width: 300,
      height: 400,
      backgroundColor: tshirtColor
    });
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.backgroundColor = tshirtColor;
      canvas.renderAll();
    }
  }, [canvas, tshirtColor]);

  const changeTshirtColor = (color) => {
    setTshirtColor(color);
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
      <h1>Design Studio</h1>
      <div className="design-area">
        <div className="tshirt-display">
          <canvas ref={canvasRef}></canvas>
        </div>
        <div className="design-options">
          <div className="color-options">
            <h3>Choose T-shirt Color</h3>
            {tshirtColors.map((color) => (
              <button
                key={color}
                className="color-button"
                style={{ backgroundColor: color }}
                onClick={() => changeTshirtColor(color)}
              ></button>
            ))}
          </div>
          <div className="element-options">
            <h3>Add Design Elements</h3>
            {Object.entries(designElements).map(([category, elements]) => (
              <div key={category}>
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <div className="element-grid">
                  {elements.map((element) => (
                    <img
                      key={element}
                      src={`/path/to/your/images/${element}`}
                      alt={element}
                      onClick={() => addElement(`/path/to/your/images/${element}`)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={addCustomText}>Add Custom Text</button>
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;