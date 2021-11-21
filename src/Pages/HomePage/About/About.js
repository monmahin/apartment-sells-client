import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aboutBanner from '../../../images/banner.jpg'
const About = () => {
    return (
        <Box id='about' sx={{ flexGrow: 1 }}>
            <Container sx={{ my: 8 }} >
            <Typography variant="h3" 
                     sx={{ fontWeight: "600", py: 3 }}>
                    <span
                    className='apartment-title'
                    style={{ color: "#65360D" }}>
                    ABOUT OUR COMPANY</span> 
                </Typography>      
      <Grid container spacing={{ xs: 2, md: 8 }}>
        <Grid container item xs={12} md={6}>
          <img width='100%' src={aboutBanner} alt="" />
        </Grid>
                    <Grid  item xs={12} md={6}>
                <Typography variant="h4" 
                     sx={{ fontWeight: "bold", py: 3,color:'grey.900' }}>
                  <span className='apartment-name'>
                  Luxury
                    <span style={{ color: "#65360D" }}>           Apartments.
                    </span>
                  </span>
                </Typography>
        
            <Typography
             variant="body1" 
              sx={{ textAlign: "justify" }}>
                  <span className='apartment-name'>
                     Smart Home Technology installed as standard in each apartment putting you in total control of your home at the touch of a button from wherever you might be. Each apartments has been individually designed to maximise has been individually designed to maximise has been individually designed to maximise space and light. 
                  </span>
            
            </Typography>
        </Grid>
        
      </Grid>
      </Container>
    </Box>
    );
};

export default About;