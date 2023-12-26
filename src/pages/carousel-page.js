import React, { useState } from 'react';
import CarouselInside from '../components/CarouselSlider/Carousel-navigation-inside';
import CarouselOutside from '../components/CarouselSlider/Carousel-navigation-outside';
import dribbble from '../images/dribbble.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Carousel() {
  const [copySuccess, setCopySuccess] = useState(false);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopySuccess(true);

    // Reset copy success message after a short delay
    setTimeout(() => {
      setCopySuccess(false);
    }, 1500);
  };

  return (
    <div className='w-full mt-14 md:pl-64'>
      <div className='px-3 py-4 md:px-20 lg:px-30 xl:36 pt-40 pb-10 w-100'style={{
        backgroundImage: `url(${dribbble})`,
        backgroundSize: '40%',
      }}>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl px-8 pb-8 pt-6 bg-white w-auto">Carousel</h1>
      </div>
      <div className='px-3 py-4 md:px-20 lg:px-30 xl:36 md:py-16 w-full h-full'>
      <p className="text-md md:text-xl text-black max-w-[800px] mb-20">Website carousels, also known as carousel sliders, refer to a slideshow of photo or video content on a website. Dynamic carousels display various content of the same type or topic at a certain motion, speed, and time while static carousels are navigated manually with side buttons or arrows. -<a className='mb-20 text-blue-500' href="https://sendpulse.com/blog/website-carousel-design"> by, SendPulse</a></p>
      
      <p className="font-bold text-3xl mb-5">Usage Scenarios</p>
      <p className="text-md md:text-1xl text-black max-w-[800px] mb-20"> Accordions are widely used in web development for organizing and presenting information in a hierarchical structure. They are commonly found in:
        <ul className='mt-5 flex flex-col gap-2 text-md ms-4'>
          <li>- Navigation menus</li>
          <li>- FAQs (Frequently Asked Questions) sections</li>
          <li>- Settings panels</li>
          <li>- Any scenario requiring a compact, expandable/collapsible content layout.</li>
        </ul>
      </p>

      <p className="font-bold text-3xl mb-5">Demo</p>
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
