import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const links = [
  {
    name: "Semi",
    path: "/semi",
  },
  {
    name: "Luxury",
    path: "/luxury",
  },
  {
    name: "Add Booking",
    path: "/addbooking",
  },
  {
    name: "About us",
    path: "#about",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const navRef = useRef(null);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach(link => {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop - 100; 
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(link.path);
          }
        }
      });

  }},[])

  useEffect(() => {
   
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className='flex justify-between items-center xl:mx-64 mx-12 py-4 '>
      <div className="nav-title font-mono text-2xl font-bold text-primary flex">
        <Link to='/'>Ekbar Hotels </Link>
      </div>
      <div className="navbar hidden lg:flex">
        <nav ref={navRef} className="flex gap-8">
          {links.map((link, index) => (
            <Link
              to={link.path} 
              key={index}
              className={`capitalize font-medium hover:text-accent transition-all text-sm items-center flex ${
                activeLink === link.path ? " font-extrabold text-accent border-b-2 border-accent" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center hidden lg:flex gap-5">
        <a href="#_" className="px-2 py-1 relative rounded group overflow-hidden font-medium bg-yellow-50 border-2 border-primary text-primary inline-block">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white text-sm font-bold">Contact us</span>
        </a>
        <IconButton>
          <Link to='/signin'>
          <AccountCircleIcon sx={{fontSize:'2.2rem', color:'#000000'}}/>
          </Link>
        </IconButton>
      </div>
      <div className="mobile-nav lg:hidden">
        <MobileNav/>
      </div>
    </div>
  );
};

export default Navbar;
