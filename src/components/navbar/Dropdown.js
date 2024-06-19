import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className="dropdown" ref={dropdownRef} onClick={toggleDropdown}>
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
