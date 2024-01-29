import React, { useState } from 'react';
import ElementCard from '../components/CSSEditor/ElementCard';
import EditorCard from '../components/CSSEditor/EditorCard';

function CSSEditorPage() {
  const [selectedStyle, setSelectedStyle] = useState({});
  
  const handleSelectStyle = (styleOptions) => {
    setSelectedStyle(styleOptions);
  };



  return (
    <div className='w-full mt-14 sm:ml-64'>
      <div className='px-8 sm:px-4 pb-8 pt-6'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">CSS editor page</h1>
        <div>
        {/* <EditorCard onSelectStyle={handleSelectStyle} /> */}
        <ElementCard />

        </div>
      </div>
    </div>
  );
}

export default CSSEditorPage;
