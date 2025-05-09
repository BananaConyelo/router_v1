import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Project from '../pages/Project';
import Error from '../pages/NotFound';
import { useState, useRef, useEffect } from 'react';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState('0px');

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


    useEffect(() => {
      if (isOpen && menuRef.current) {
        setMenuHeight(`${menuRef.current.scrollHeight}px`);
      } else {
        setMenuHeight('0px');
      }
    }, [isOpen]);

    return (
      <div>
        <div id='larger-screen'>
          <nav className="bg-gray-800 p-4">
            <div className="flex justify-center space-x-6">
              <Link to="/"           
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >Home</Link>
              <Link to="/about"           
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >About</Link>
              <Link to="/project"           
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >Projects</Link>
              <Link to="/contact"           
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >Contact</Link>
            </div>
          </nav>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes> 
        </div>


        
        <div id="smaller-screen">
          <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div className="text-white text-lg font-bold">My Portfolio</div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>


            <div
              ref={menuRef}
              style={{ height: menuHeight, transition: 'height 300ms ease' }}
              className="overflow-hidden md:overflow-visible md:h-auto flex flex-col md:flex-row md:space-x-6"
            >
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/project"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>

    );
  }
  export default NavBar;