import React from 'react';
import "./dropdown.css"

function Dropdown({isOpen, selectedOption, selectOption, options, setIsOpen}) {

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <i className={isOpen ? 'arrow-up' : 'arrow-down'}></i>
      </button>
      {isOpen && (
        <ul className="dropdown-list ">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item" onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;