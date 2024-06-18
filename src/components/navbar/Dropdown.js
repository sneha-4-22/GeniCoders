import React, { useState } from 'react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown" onClick={toggleDropdown}>
      <a href="#">{label}</a>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </div>
      )}
    </li>
  );
};

export default Dropdown;
