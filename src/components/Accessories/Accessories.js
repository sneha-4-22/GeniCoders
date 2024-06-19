import React, { useState } from 'react';
import './Accessories.css';
import accessory1 from '../../images/Accessories/a1.png';
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
import accessory12 from '../../images/Accessories/a12.png';
const accessoriesData = [
  { id: 1, name: 'Women\'s Square Frame Trendy Sunglasses With Chain Decor For Daily Life Beach Accessories', image: accessory1, price: 800, color: 'red', size: 'M', pattern: 'striped' },
  { id: 2, name: '3pcs Girls Butterfly Charm Bracelet', image: accessory2, price: 1500, color: 'blue', size: 'S', pattern: 'plain' },
  { id: 3, name: 'Set Of 14 Cute Hair Clips For Girls Hair Styling', image: accessory3, price: 1125, color: 'green', size: 'L', pattern: 'polka dot' },
  { id: 4, name: 'Floral Bun Hair Ties For Women, Romantic Aesthetic Hair Scrunchies, Extra-Large Chiffon Scrunchy', image: accessory4, price: 2250, color: 'yellow', size: 'M', pattern: 'striped' },
  { id: 5, name: 'Faux Pearl & Rhinestone Decor Star Drop Earrings', image: accessory5, price: 1875, color: 'pink', size: 'S', pattern: 'plain' },
  { id: 6, name: 'White Beaded Acrylic Butterfly Elastic Hairpin For Women, Clear Glass Beaded', image: accessory6, price: 400, color: 'purple', size: 'L', pattern: 'polka dot' },
  { id: 7, name: 'Luxury Zinc Alloy Faux Pearl & Rhinestone Decor Leaf Detail Chain Bracelet For Women For Daily Life', image: accessory7, price: 2800, color: 'red', size: 'M', pattern: 'striped' },
  { id: 8, name: 'Butterfly Decor Cubic Zirconia Detail Ring', image: accessory8, price: 3000, color: 'blue', size: 'S', pattern: 'plain' },
  { id: 9, name: 'Aeora S925 Silver Thirteen Hanging Pieces Bracelet for Women Gift Bracelets & Bangles JewelryMaterial', image: accessory9, price: 3750, color: 'green', size: 'L', pattern: 'polka dot' },
  { id: 10, name: 'Faux Pearl Lily Of The Valley Flower Rhinestone Leaf Alloy Tassel Simple Decorative Ladies Headband', image: accessory10, price: 3375, color: 'yellow', size: 'M', pattern: 'striped' },
  { id: 11, name: '1pc Cute Cartoon Flower Design Diamond Inlaid Bracelet For Women, Daily Wear, Birthday/Festival Gift', image: accessory11, price: 4125, color: 'pink', size: 'S', pattern: 'plain' },
  { id: 12, name: 'silver tone metal leaves Gold filled wire or Sterling Silver wire Plated jewellery wire Plated ear wire hooks Handcrafted clay flowers in ivories or light blush Hoop ', image: accessory12, price: 2125, color: 'silver', size: 'S', pattern: 'plain' },
];

const Accessories = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    price: null,
    color: '',
    size: '',
    pattern: ''
  });
  const [sortCriteria, setSortCriteria] = useState('none');
  const [filteredAccessories, setFilteredAccessories] = useState(accessoriesData);

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const applyFilters = () => {
    let filtered = accessoriesData;

    if (filterCriteria.color) {
      filtered = filtered.filter(item => item.color === filterCriteria.color);
    }
    if (filterCriteria.size) {
      filtered = filtered.filter(item => item.size === filterCriteria.size);
    }
    if (filterCriteria.pattern) {
      filtered = filtered.filter(item => item.pattern === filterCriteria.pattern);
    }
    if (filterCriteria.price) {
      const [min, max] = filterCriteria.price.split('-').map(Number);
      filtered = filtered.filter(item => item.price >= min && item.price <= max);
    }

    // Set filtered accessories based on applied filters
    setFilteredAccessories(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    let sortedAccessories = [...filteredAccessories];

    switch (e.target.value) {
      case 'low-to-high':
        sortedAccessories.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        sortedAccessories.sort((a, b) => b.price - a.price);
        break;
      default:
        // Reset to original order or default sort logic
        sortedAccessories = accessoriesData;
        break;
    }

    setFilteredAccessories(sortedAccessories);
  };

  return (
    <div className="accessories-container">
      <div className={`filters-sidebar ${filtersVisible ? 'active' : ''}`}>
        <div className="filter-section">
          <h3>Filter by Price</h3>
          <select name="price" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="0-1000">0-1000</option>
            <option value="1001-2000">1001-2000</option>
            <option value="2001-3000">2001-3000</option>
            <option value="3001-4000">3001-4000</option>
            <option value="4001-5000">4001-5000</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Filter by Color</h3>
          <div className="color-options">
            <div className="color-square" style={{ backgroundColor: 'red' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'red' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'blue' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'blue' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'green' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'green' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'yellow' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'yellow' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'pink' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'pink' } })}></div>
            <div className="color-square" style={{ backgroundColor: 'purple' }} onClick={() => handleFilterChange({ target: { name: 'color', value: 'purple' } })}></div>
          </div>
        </div>
        <div className="filter-section">
          <h3>Filter by Size</h3>
          <select name="size" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div className="filter-section">
          <h3>Filter by Pattern</h3>
          <select name="pattern" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="plain">Plain</option>
            <option value="striped">Striped</option>
            <option value="polka dot">Polka Dot</option>
          </select>
        </div>
        <button className="apply-filters-btn" onClick={applyFilters}>Apply Filters</button>
      </div>

      <div className="accessories-content">
        <div className="accessories-header">
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
              <option value="none">None</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="accessories-grid">
          {filteredAccessories.map(accessory => (
            <div key={accessory.id} className="accessory-item">
              <img src={accessory.image} alt={accessory.name} />
              <p>{accessory.name}</p>
              <p>&#8377;{accessory.price}</p>
              <div className="price-tag">&#8377;{accessory.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
