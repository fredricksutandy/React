import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/homepage.js';
import AccordionPage from './pages/accordion-page.js';
import TodoListPage from './pages/todo-list.js';
import PasswordGenerator from './pages/password-generator.js';
import Calculator from './pages/calculator.js';
import AdditemPage from './pages/add-Item-page.js';
import AddtoCartPage from './pages/add-to-cart.js';
import PasswordValidator from './pages/password-validator.js';
import FilterSort from './pages/filter-sort.js';
import FilterItem from './pages/filter-item.js';
import TrackTodo from './pages/track-todo.js';
import SimpleDataFetching from './pages/simple-data-fetching.js';
import Modalpage from './pages/modal-page.js';
import Tabbingpage from './pages/tabbing-page.js';
import Dropdownpage from './pages/dropdown-page.js';
import FakeStoreFetching from './pages/fake-store-fetching.js';
import Carousel from './pages/carousel-page.js';
import LoginVerification from './pages/login-verification-page.js';
import SocialmediPost from './pages/social-media-post-page.js';
import CSSEditorPage from './pages/css-editor-page.js';

const MainContent = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accordion-page" element={<AccordionPage />} />
        <Route path="/add-Item-page" element={<AdditemPage />} />
        <Route path="/add-to-cart" element={<AddtoCartPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/carousel-page" element={<Carousel />} />
        <Route path="/css-editor-page" element={<CSSEditorPage />} />
        <Route path="/dropdown-page" element={<Dropdownpage />} />
        <Route path="/filter-item" element={<FilterItem />} />
        <Route path="/filter-sort" element={<FilterSort />} />
        <Route path="/login-verification-page" element={<LoginVerification />} />
        <Route path="/tabbing-page" element={<Tabbingpage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/track-todo" element={<TrackTodo />} />
        <Route path="/modal-page" element={<Modalpage />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/password-validation" element={<PasswordValidator />} />
        <Route path="/simple-data-fetching" element={<SimpleDataFetching />} />
        <Route path="/social-media-post-page" element={<SocialmediPost />} />
        <Route path="/fake-store-fetching" element={<FakeStoreFetching />} />
      </Routes>
    </>
  );
};

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className="bg-neutral-950 py-4 px-4 flex justify-between items-center top-0 w-full fixed h-14">
      <a href="/" className="text-white text-lg font-bold">Purely React</a>
      <button className="rounded-sm p-2 bg-neutral-800 lg:hidden hover:bg-neutral-700" style={{ width: "40px", height: "40px" }} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-white" />
      </button>
    </nav>
  );
};

const Sidebar = ({toggleSidebar}) => {
  return (
    <div className="fixed left-0 top-14 min-h-screen h-full w-full bg-white border-r-2 pt-2 sm:w-64 lg:pt-5">
      <nav className="flex flex-col">
        <Link to="/" exact onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Overview <RiArrowRightSLine className="ml-auto" />
        </Link>

        <p className="text-gray-400 text-xs mb-1 mt-6 px-4">Basic components</p>
        <Link to="/accordion-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Accordion <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/carousel-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Carousel <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/dropdown-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Dropdown <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/modal-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Modal <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/tabbing-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Tabbing <RiArrowRightSLine className="ml-auto" />
        </Link>

        <p className="text-gray-400 text-xs mb-1 mt-6 px-4">Function components</p>
        <Link to="/add-Item-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Add item <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/add-to-cart" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Add to cart <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/calculator" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Calculator <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/css-editor-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          CSS editor <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/filter-item" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Filter item <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/filter-sort" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Filter and sort <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/login-verification-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Login verification <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/todo-list" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Todo list <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/track-todo" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Todo list tracker <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/password-generator" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Password generator <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/password-validation" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Password validation <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/social-media-post-page" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Social media post <RiArrowRightSLine className="ml-auto" />
        </Link>

        <p className="text-gray-400 text-xs mb-1 mt-6 px-4">Fetching Components</p>
        <Link to="/simple-data-fetching" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Simple data fetching <RiArrowRightSLine className="ml-auto" />
        </Link>
        <Link to="/fake-store-fetching" onClick={toggleSidebar} className="flex items-center text-base py-2 px-4 hover:bg-gray-100 text-sm">
          Fake store fetching <RiArrowRightSLine className="ml-auto" />
        </Link>
      </nav>
    </div>
  );
};



const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="flex bg-zinc-100">
        {windowSize > 810 && <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />}
        <MainContent className={`${windowSize <= 810 ? 'ml-0 ' : 'ml-64 '} bg-gray-100`} />

        {windowSize <= 810 && isOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />}
      </div>
    </Router>
  );
};

export default AdminPanel;