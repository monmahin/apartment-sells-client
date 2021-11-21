import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [apartments, setApatments] = useState([])
    useEffect(() => {
        fetch('https://desolate-lowlands-20122.herokuapp.com/apartments')
            .then(res => res.json())
        .then(data=>setApatments(data))
    },[])
    return (
        
            
            <Box sx={{ flexGrow: 1,my:8 }}>
            <Container  maxWidth="lg">
      <Typography style={{ fontWeight: 500,color: "#65360D",margin:'30px' }} variant="h3"  component="div">
         <span className='apartment-title'>Apartments</span>
        </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                    {
                        apartments.slice(0,6).map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>)
                    }
           </Grid>
      </Container>
         </Box>
        
    );
};

export default Apartments;
