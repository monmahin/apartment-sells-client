import React from 'react';
import { Avatar,  Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';

// import people1 from '../../../images/Ellipse 90.png'
import StarIcon from '@mui/icons-material/Star';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const Testimonial = ({ buyer }) => {
  // const value = {};
  return (
    <Grid item xs={12} md={4}>
    <Paper elevation={3} sx={{ p:1 }}>
    <Typography
      variant="body2"
      sx={{  mx:'auto'}}
      >
          <q style={{fontSize:'70px',color:'crimson'}}>
          <address style={{fontSize:'16px',color:'darkgray'}}>
               {buyer?.reviews}.   
          </address>
          </q>
      </Typography>
      <div className='horizontal-border'></div>
      <Box
sx={{
my:5,
 display: 'flex',
alignItems: 'center',
justifyContent:'center',
gap:2
}}
>
<Rating
name="text-feedback"
value={buyer?.rating}
readOnly
precision={0.5}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box>{labels[buyer?.rating]}</Box>
</Box>
      <Box
        sx={{ display: "flex", justifyContent: 'center', alignItems: "center", py: 2, my: 2, }} >
          <Avatar alt="Remy Sharp" src={buyer?.image} sx={{ width: 40, height: 40 ,mr:2}}/>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {buyer?.name} 
          </Typography>        
      </Box>
    </Paper>
  </Grid>
  );
};

export default Testimonial;