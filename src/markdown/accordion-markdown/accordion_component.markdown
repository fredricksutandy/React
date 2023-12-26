#markdown editor
```import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-white w-full">
      <button
        className={`cursor-pointer px-2 py-3 transition-all hover:bg-gray-100 w-full border-t flex items-center focus:outline outline-2 outline-blue-600`}
        onClick={toggleAccordion}
      >
        <span className="text-lg">{title}</span>
        {isActive ? <FaChevronUp size={10} class="ml-auto" /> : <FaChevronDown size={10} class="ml-auto" />}
      </button>
      {isActive && (
        <div className="px-2 py-2 mb-6 text-sm">
          {body}
        </div>
      )}
    </div>
  );
};

export default Accordion;
```