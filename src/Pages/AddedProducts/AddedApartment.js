import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const AddedApartment = ({ addedApartment, handleDelete }) => {
    const { houseName, houseImg, price,_id } = addedApartment
    return (
        <Grid  item xs={12} md={4} sm={6}>
        <Card  sx={{ maxWidth: 345 ,height:'100%'}}>
 <CardActionArea>
   <CardMedia
     component="img"
     height="180"
     className='apartment-img'
     image={houseImg}
     alt="green iguana"
   />
   <CardContent  sx={{float:'left'}}>
     <Typography variant="h5">
       <span className='apartment-name'>{houseName}</span>
     </Typography>
   </CardContent>
 </CardActionArea>
    <CardActions sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',mx:1}}>
    <Typography variant="h5">
            <span className='apartment-name'>${price}</span>
    </Typography>
   <Button size='small' onClick={()=>handleDelete(_id)} color='error' variant="contained">
     cancel
   </Button>
 </CardActions>
</Card>

       </Grid>
    );
};

export default AddedApartment;
