import React, { useState } from 'react';
import dribbble from '../images/dribbble.png';
import Accordion from '../components/Accordion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
      <div className='px-3 py-4 md:px-20 lg:px-30 xl:36 pt-40 pb-10 w-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl px-8 pb-8 pt-6 bg-white w-auto">Accordion</h1>
      </div>
      <div className="px-3 py-4 md:px-20 lg:px-30 xl:36 md:py-16 w-full h-full">
      <p className="text-md md:text-xl text-black max-w-[800px] mb-20">Accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item. -<a className='mb-20 text-blue-500' href="https://en.wikipedia.org/wiki/Accordion_(GUI)"> by, Wikipedia</a></p>  

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
        <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full max-w-[800px] h-[300px] overflow-y-auto">
          <Accordion title="Accordion 1" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <Accordion title="Accordion 2" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <Accordion title="Accordion 2" body="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>

        {/* Inline Markdown Rendering */}
        <p className="font-bold text-3xl mb-5">Coding Snippet</p>
        <div className="markdown-renderer w-full max-w-[800px] mt-4 mb-20">
          <div className="flex items-center justify-between bg-zinc-800">
            <div className="text-white ms-4 py-2">Accordion.js</div>
            <button onClick={copyToClipboard} className="flex items-center space-x-2 bg-blue-700 h-100 text-white py-3 transition-all px-10 hover:bg-blue-800">
              <span>Copy</span>
            </button>
            {copySuccess && <div className="bg-green-200 p-2 rounded border border-green-700 text-green-600 fixed w-fit bottom-3 text-sm right-3 z-50 flex items-center gap-2 font-semibold">Copied to clipboard!</div>}
        
          </div>
          <div className="w-full relative overflow-x-auto bg-black p-2">
          <SyntaxHighlighter
            language="jsx"
            style={{ background: 'black', ...okaidia,  borderRadius: 0,
            'pre[class*="language-"]': {
              marginTop: 0,
            },
          }}
            className="w-fit text-sm mt-0 bg-black p-2 h-[630px]"
          >
            {markdownContent}
          </SyntaxHighlighter>
          </div>
          
        </div>

        <p className="font-bold text-3xl mb-5">Development & Coding Process</p>
        <p className="text-md md:text-1xl text-black max-w-[800px] mb-20"> Accordions are widely used in web development for organizing and presenting information in a hierarchical structure. They are commonly found in:
          <ul className='mt-5 flex flex-col gap-2 text-md ms-4'>
            <li>- Navigation menus</li>
            <li>- FAQs (Frequently Asked Questions) sections</li>
            <li>- Settings panels</li>
            <li>- Any scenario requiring a compact, expandable/collapsible content layout.</li>
          </ul>
        </p>

        <p className="font-bold text-3xl mb-5">Future Improvement</p>
        <p className="text-md md:text-1xl text-black max-w-[800px] mb-20"> Accordions are widely used in web development for organizing and presenting information in a hierarchical structure. They are commonly found in:
        </p>

        <p className='whitespace-pre-line'>
          Absolutely! Let's break down the methods and functions used in your `Accordion` component:
React Hooks:
1. **useState:**
   - Used to declare the `isActive` state variable, which tracks whether the accordion is currently active or not.

### **Event Handling:**
1. **onClick Event:**
   - Used to trigger the `toggleAccordion` function when the button is clicked.

### **Component Structure:**
1. **Functional Component:**
   - The entire component is a functional component defined using the arrow function syntax.

### **State Update:**
1. **setIsActive:**
   - Used to update the `isActive` state based on the current state, toggling between `true` and `false` on each click.

### **Conditional Rendering:**
1. **Conditional Rendering of Icons:**
   - Uses a ternary operator to conditionally render either the up or down chevron icon based on the `isActive` state.

2. **Conditional Rendering of Content:**
   - The {`{isActive && ...}`}expression is used for conditional rendering of the content (`body`) when the accordion is active.

### **DOM Manipulation:**
1. **Class Manipulation:**
   - The `className` attribute is dynamically updated based on the `isActive` state to apply different styles, enabling visual changes when the accordion is active.

### **Inline Styles:**
1. **Inline Styling with Tailwind CSS:**
   - Uses Tailwind CSS classes to style the button and the content container.

### **JSX Elements:**
1. **JSX Elements:**
   - Defines the structure of the component using JSX, including `div`, `button`, `span`, `FaChevronUp`, `FaChevronDown`, and another `div` for the content.

### **Interpolation and Expression:**
1. **`${}` (Template Literal):**
   - Used for string interpolation to dynamically display the `title` in the button.

### **Props:**
1. **Destructuring Props:**
   - Destructures `title` and `body` from the props passed to the component.

### **Accessibility:**
1. **Focus Management:**
   - Utilizes the `focus:outline` and `outline-2` classes to manage focus and provide a visual indication of focus.

### **Dynamic Styling:**
1. **Dynamic Styling with Tailwind CSS:**
   - Dynamically applies styles based on the component's state, providing a visually interactive user experience.

This breakdown covers the key methods, functions, and techniques used in your `Accordion` component. Each aspect contributes to the functionality and visual presentation of the accordion within a React component.</p>



      </div>
    </div>
  );
};

export default AccordionPage;
