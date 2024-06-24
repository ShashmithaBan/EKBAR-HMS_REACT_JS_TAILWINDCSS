import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { List, ListItem, ListItemText, Drawer, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const links = [
  {
    name: "Home",
    path: "/",
  },
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
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      <IconButton onClick={toggleNavbar}>
        {isOpen ? "" : <MenuIcon />}
      </IconButton>
      <Drawer anchor="bottom" open={isOpen} onClose={toggleNavbar} sx={{
          '& .MuiDrawer-paper': {
            width: 'full',
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            
            
          },
        }}>
        <List>
          {links.map((link, index) => (
            <ListItem button key={index} onClick={toggleNavbar} sx={{ justifyContent: 'center' }}>
              <Link to={link.path} className="capitalize font-medium hover:text-accent transition-all text-sm items-center flex justify-center ">
                <ListItemText primary={link.name}  />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileNav;
