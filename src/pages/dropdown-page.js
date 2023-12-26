import Dropdown from '../components/Dropdown';
import Navigation from '../components/Navigation-menu';
import Dropdownhover from '../components/Dropdown-hover';
import Dropdownhovermenu from '../components/Dropdown-hover-menu';

function Dropdownpage() {
 
  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
          <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Dropdown</h1>
          <div>
            <Dropdown title="Click this">
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Custom Option 1
            </div>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Custom Option 2
            </div>
            </Dropdown>

            <Dropdownhover title="Hover this">
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Custom Option 1
            </div>
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Custom Option 2
            </div>
            </Dropdownhover>
          </div>
          <div className="relative">
            <Dropdownhovermenu title="Hover this">
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Custom Option 1
              </div>
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Custom Option 2
              </div>
            </Dropdownhovermenu>
          </div>
          {/* <Navigation></Navigation> */}
      </div>
    </div>
  );
}

export default Dropdownpage;
