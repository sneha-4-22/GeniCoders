import React from 'react';
import './Accessories.css';
import accessory1 from '../../images/Accessories/a1.png'; // Replace with your image paths
import accessory2 from '../../images/Accessories/a2.png';
import accessory3 from '../../images/Accessories/a3.png';
import accessory4 from '../../images/Accessories/a4.png';
import accessory5 from '../../images/Accessories/a5.png';
import accessory6 from '../../images/Accessories/a6.png';
import accessory7 from '../../images/Accessories/a7.png';
import accessory8 from '../../images/Accessories/a8.png';
import accessory9 from '../../images/Accessories/a9.png';
import accessory10 from '../../images/Accessories/a10.png';
import accessory11 from '../../images/Accessories/a11.png';
const accessories = [
  { id: 1, name: 'Accessory 1', image: accessory1 },
  { id: 2, name: 'Accessory 2', image: accessory2 },
  { id: 3, name: 'Accessory 3', image: accessory3 },
  { id: 4, name: 'Accessory 4', image: accessory4 },
  { id: 5, name: 'Accessory 5', image: accessory5 },
  { id: 6, name: 'Accessory 6', image: accessory6 },
  { id: 7, name: 'Accessory 7', image: accessory7 },
  { id: 8, name: 'Accessory 8', image: accessory8 },
  { id: 9, name: 'Accessory 9', image: accessory9 },
  { id: 10, name: 'Accessory 10', image: accessory10 },
  { id: 10, name: 'Accessory 11', image: accessory11 },
];

const Accessories = () => {
  return (
    <div className="accessories-container">
      <h2>Accessories</h2>
      <div className="accessories-grid">
        {accessories.map(accessory => (
          <div key={accessory.id} className="accessory-item">
            <img src={accessory.image} alt={accessory.name} />
            <p>{accessory.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
