import React, { useState } from 'react';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-[550px]">
      <div className="tab-container mb-2 flex">
        <button
          onClick={() => handleTabClick('overview')}
          className={`px-4 py-3 w-full text-start transition-all w-1/3 ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          Overview
        </button>
        <button
          onClick={() => handleTabClick('discoveries')}
          className={`px-4 py-3 w-full text-start transition-all w-1/3 ${activeTab === 'discoveries' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          Discoveries
        </button>
        <button
          onClick={() => handleTabClick('branches')}
          className={`px-4 py-3 w-full text-start transition-all w-1/3 ${activeTab === 'branches' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          Branches
        </button>
      </div>

      <div className="tab-content bg-white p-4 w-full overflow-y-auto">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-bold mb-3">Overview of Science</h2>
            <p className='text-sm text-gray-500'>
              Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis quis justo hendrerit iaculis. Integer volutpat ex at turpis tristique, ac interdum mi posuere. Sed fringilla tincidunt mi vel tincidunt.
            </p>
            {/* Add more text as needed */}
          </div>
        )}
        {activeTab === 'discoveries' && (
          <div>
            <h2 className="text-xl font-bold mb-3">Major Scientific Discoveries</h2>
            <p className='text-sm text-gray-500 mb-2'>
              Discovery 1: Description and impact. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis quis justo hendrerit iaculis. Integer volutpat ex at turpis tristique, ac interdum mi posuere.
            </p>
            <p className='text-sm text-gray-500'>
              Discovery 2: Another significant finding. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis quis justo hendrerit iaculis. Integer volutpat ex at turpis tristique, ac interdum mi posuere.
            </p>
            {/* Add more text as needed */}
          </div>
        )}
        {activeTab === 'branches' && (
          <div>
            <h2 className="text-xl font-bold mb-3">Branches of Science</h2>
            <div>
              <h3 className='font-bold text-md'>Physics</h3>
              <p className='text-sm text-gray-500'>
                Description of Physics and its focus areas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis quis justo hendrerit iaculis. Integer volutpat ex at turpis tristique, ac interdum mi posuere.
              </p>
            </div>
            <div>
              <h3 className='font-bold text-md'>Chemistry</h3>
              <p className='text-sm text-gray-500'>
                Description of Chemistry and its focus areas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis quis justo hendrerit iaculis. Integer volutpat ex at turpis tristique, ac interdum mi posuere.
              </p>
            </div>
            {/* Add more branches as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;
