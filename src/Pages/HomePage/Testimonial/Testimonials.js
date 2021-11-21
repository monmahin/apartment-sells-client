import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Testimonial from './Testimonial';



const Testimonials = () => {
  const [buyers, setBuyers] = useState([])

  
    useEffect(() => {
        const url = 'https://desolate-lowlands-20122.herokuapp.com/reviews'
        fetch(url)
            .then(res => res.json())
          .then(data => {
            console.log(data)
            setBuyers(data)
          });
    }, [])
    return (
        <Box id='reviews' sx={{ my: 5 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
        >
          Testimonials
        </Typography>
        <Grid container spacing={2} sx={{ my: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    buyers.slice(-3).map(buyer => <Testimonial
                        key={buyer._id}
                        buyer={buyer}
                    ></Testimonial>)
          }
                
        </Grid>
      </Box>
    );
};

export default Testimonials;