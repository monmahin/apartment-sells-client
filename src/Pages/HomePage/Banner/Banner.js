// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import bg from '../../../images/banner.jpg';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('${bg}')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
        position: "relative",
    //   top:'-80px',
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
      color: "crimson",
      fontSize: "4rem",
    },
    center: {
        // textAlign:'left',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxwidth: '400px',
        
    },
    
   
  }));
const Banner = () => {
    const classes = useStyles();

    return (
        <Box  className={classes.hero} sx={{maxWidth:'100%'}}>
            
            <Box className={classes.center} >
            <h5  className='nav-home' style={{marginBottom:'0'}}>
            WELCOME TO <span style={{color:'crimson'}}>SUNSHINE</span>
            </h5>
            <Typography  variant="h4" sx={{fontWeight:400,color:'grey.900',minWidth:'350px' ,mx:'auto' ,px:1}} >
            Stunning and luxery apartments for living with the best advantages by our lucrative collections. 
            </Typography>
            <Link to='/apartments' style={{
                textDecoration: 'none',
            }}>
                <Button sx={{bgcolor:'grey.800'}} variant="contained"
                endIcon={<AddIcon />}
                >
                  Explore More </Button>
            </Link>
       </Box>
            
      </Box>
    );
};

export default Banner;