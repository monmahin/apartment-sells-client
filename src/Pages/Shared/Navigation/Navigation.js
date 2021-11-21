import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Navigation = () => {
  
    return (
        <Box sx={{flexGrow:1}}>
               <AppBar position="fixed" sx={{bgcolor: 'text.primary',}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
                </IconButton>
               
                <Typography variant="h5" 
                    sx={{
                        flexGrow: 1,
                        textAlign: 'left',
                         }}>
               <Link className='nav-home' to='/home'>Sunshine Holdings</Link>     
                </Typography>
                
                <Button href="/#reviews" color="inherit">
                  Reviews
                </Button>
                <Button href="/#about" color="inherit">
                  About us
                </Button>
                
                
            <Button color="inherit">Login</Button>
            
        </Toolbar>
      </AppBar>
     </Box>
    );
};

export default Navigation;