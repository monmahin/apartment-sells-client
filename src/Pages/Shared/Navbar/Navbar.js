import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { useHistory } from 'react-router';
import { Avatar, Button } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import { HashLink } from 'react-router-hash-link';
// import { display } from '@mui/system';
const Navbar = () => {
  // const history = useHistory();
  const { user, logout ,admin} = useAuth()
  // console.log(user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" sx={{bgcolor: 'text.primary',}}>
        <Toolbar>
         
        <Typography variant="h5" 
                    sx={{
                        flexGrow: 1,
                        textAlign: 'left',
                         }}>
               <HashLink className='nav-home' to='/home#home'>Sunshine Holdings</HashLink>     
                </Typography>
          
          <div>
            {isMobile ? <div>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                edge="end"
                
              >
                <MenuIcon />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem >
                  <Button component={Link} to="/" color="inherit">Home</Button>
                </MenuItem>
                <MenuItem  >
                  <Button  component={HashLink} to="/dashboard/addReview" color="inherit">Review</Button>
                </MenuItem>
                <MenuItem  >
                  <Button  component={HashLink} to="/addedApartment" color="inherit">Added Apartments</Button>
                </MenuItem>
                <MenuItem >
                  
                  <Button  component={HashLink} to="/home#about" color="inherit">About Us</Button>
                </MenuItem>
                <MenuItem >
                {
                    user?.email ?
                      <Button onClick={logout} color="inherit">Logout</Button>
                      :
                      <Button component={Link} to="/login" color="inherit">Login</Button>
                    }
                    </MenuItem>
              </Menu>
            </div>
              : 
                <div style={{display:'flex'}}>
                  <Button component={Link}
                    to="/dashboard/addReview" color="inherit">
                  Reviews
                </Button>
                <Button component={HashLink} to="/home#about" color="inherit">
                  About us
                </Button>
                {
                  admin &&  <Button component={Link} to="/addedApartment" color="inherit">
                  Added Apartments
                </Button>
               }
      
                {
                  
                    user?.email ?
                    
                    <div style={{display:'flex'}}>
                       <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
                      <Button onClick={logout} color="inherit">Logout</Button>
                      <Avatar 
                   sx={{ width: 24, height: 24,my:1}} alt="" 
                   src={user.photoURL }
                    />
                      </div>
      
                      :
                      <Button component={Link} to="/login" color="inherit">Login</Button>
                }
               
                </div>
              
              }
             
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;