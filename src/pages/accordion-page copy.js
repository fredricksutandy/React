import React, { useState } from 'react';
import dribbble from '../images/dribbble.png';
import Accordion from '../components/Accordion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';

const AccordionPage = () => {
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
    <div className='w-full mt-14 md:ml-64'>
      <div className='px-3 py-4 md:px-36 pt-36 pb-10 w-100' 
        style={{
        backgroundImage: `url(${dribbble})`,
        backgroundSize: '50%',
      }}>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl px-8 pb-8 pt-6 bg-white w-auto">Accordion</h1>
      </div>
      <div className="p-5 md:px-36 md:py-16 w-full h-full">
      <p className="text-md md:text-xl text-black max-w-[800px] mb-20">Accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.</p>
        
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
        <div className="bg-white p-8 md:p-10 w-fit flex flex-col w-full max-w-[750px] h-[300px] overflow-y-auto">
          <Accordion title="Accordion 1" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <Accordion title="Accordion 2" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <Accordion title="Accordion 2" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>

        {/* Inline Markdown Rendering */}
        <div className="markdown-renderer w-full overflow-x-auto max-w-[750px]">
          <div className="flex items-center justify-between bg-gray-800 p-2 rounded-t-md">
            <div className="text-white font-bold">Your Code Snippet</div>
            <button onClick={copyToClipboard} className="flex items-center space-x-2 text-white">
              <span>Copy</span>
              <FaCopy />
            </button>
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={{ background: '#2E2E2E', ...atomDark, borderRadius: 0 }}
            className="w-full text-sm"
          >
            {markdownContent}
          </SyntaxHighlighter>
          {copySuccess && <div className="text-green-500">Copied to clipboard!</div>}
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
