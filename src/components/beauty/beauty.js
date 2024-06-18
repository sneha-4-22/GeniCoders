import React from 'react';
import '../Accessories/Accessories.css';
import b1 from '../../images/beauty/b1.png'; 
import b2 from '../../images/beauty/b2.png';
import b3 from '../../images/beauty/b3.png';
import b4 from '../../images/beauty/b4.png';
import b5 from '../../images/beauty/b5.png';
import b6 from '../../images/beauty/b6.png';
import b7 from '../../images/beauty/b7.png';
import b8 from '../../images/beauty/b8.png';

const beauty = [
  { id: 1, name: 'sandle 1', image: b1 },
  { id: 2, name: 'Accessory 2', image: b2 },
  { id: 3, name: 'Accessory 3', image: b3 },
  { id: 4, name: 'Accessory 4', image: b4 },
  { id: 5, name: 'Accessory 5', image: b5 },
  { id: 6, name: 'Accessory 6', image: b6 },
  { id: 7, name: 'Accessory 7', image: b7 },
  { id: 8, name: 'Accessory 8', image: b8 },
];

const Beauty = () => {
  return (
    <div className="accessories-container">
      <h2>BEAUTY</h2>
      <div className="accessories-grid">
        {beauty.map(beauty => (
          <div key={beauty.id} className="accessory-item">
            <img src={beauty.image} alt={beauty.name} />
            <p>{beauty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beauty;
