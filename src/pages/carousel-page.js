import React, { useState } from 'react';
import CarouselInside from '../components/CarouselSlider/Carousel-navigation-inside';
import CarouselOutside from '../components/CarouselSlider/Carousel-navigation-outside';
import dribbble from '../images/dribbble.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Carousel() {
  
  const markdownContent = `
    import React, { useState } from 'react';
    import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
  
    const Accordion = ({ title, body }) => {
      const [isActive, setIsActive] = useState(false);
  
      const toggleAccordion = () => {
        setIsActive(!isActive);
      };
  
      return (
        <div className="bg-white w-full">
          <button
            className={\`cursor-pointer px-2 py-3 transition-all hover:bg-gray-100 
              w-full border-t flex items-center focus:outline outline-2 
              outline-blue-600\`}
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
  `.trim();

  return (
    <div className='w-full mt-14 md:pl-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
      <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Todo's list tracker</h1>

        <div className='mb-10 bg-white p-8 md:p-10 w-full max-w-[800px]'>
            <CarouselInside/>
        </div>

        <div className='mb-10 bg-white p-8 md:p-10 w-full max-w-[800px]'>
            <CarouselOutside/>
        </div>

      </div>
    </div>
  );
}

export default Carousel;
