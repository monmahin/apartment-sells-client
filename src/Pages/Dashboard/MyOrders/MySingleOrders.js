import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MySingleOrders = ({buyer,handleDelete}) => {
    const { price, property, image,_id } = buyer
    return (
        <Grid  item xs={12} md={4} sm={6}>
        <Card  sx={{ maxWidth: 345 ,height:'100%'}}>
 <CardActionArea>
   <CardMedia
     component="img"
     height="180"
     className='apartment-img'
     image={image}
     alt="green iguana"
   />
   <CardContent  sx={{float:'left'}}>
     <Typography variant="h5">
       <span className='apartment-name'>{property}</span>
     </Typography>
   </CardContent>
 </CardActionArea>
    <CardActions sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',mx:1}}>
    <Typography variant="h5">
            <span className='apartment-name'>{price}</span>
    </Typography>
   <Button onClick={()=>handleDelete(_id)} size='small' color='error' variant="contained">
     cancel
   </Button>
 </CardActions>
</Card>

       </Grid>
    );
};

export default MySingleOrders;