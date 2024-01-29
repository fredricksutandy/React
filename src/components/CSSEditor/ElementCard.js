import React, { useState } from 'react';

const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'];

const App = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  const handleSelectHardcoded = (element) => {
    setSelectedTag(element);
  };

  return (
    <div>
      {tags.map((tag) => (
        <p
          key={tag}
          className={selectedTag === tag ? 'selected' : ''}
          onClick={() => handleSelectTag(tag)}
        >
          Click me - {tag}
        </p>
      ))}

      <div>
        <p
          className={selectedTag === 'title' ? 'selected' : ''}
          onClick={() => handleSelectHardcoded('title')}
        >
          Title goes here
        </p>
        <p
          className={selectedTag === 'content' ? 'selected' : ''}
          onClick={() => handleSelectHardcoded('content')}
        >
          a longer content goes here and this one just acts like meaningful content but it truly isn't, poor little content
        </p>
        <button
          className={selectedTag === 'button' ? 'selected' : ''}
          onClick={() => handleSelectHardcoded('button')}
        >
          Button here!
        </button>
      </div>

      <style>{`
        .selected {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
};

export default App;
