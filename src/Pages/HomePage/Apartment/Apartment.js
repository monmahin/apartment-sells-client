import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Apartment = ({ apartment }) => {
  const { houseName, houseImg, _id } = apartment
  const url = `/placeorder/${_id}`;
  const history = useHistory();
  const handlePlaceOrder = () => {
    history.push(url)
  }
    return (
        <Grid item xs={12} md={4} sm={6}>
             <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="180"
          className='apartment-img'
          image={houseImg}
          alt="green iguana"
        />
        <CardContent  sx={{textAlign:'left'}}>
          <Typography variant="h5">
            <span className='apartment-name'>{houseName}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handlePlaceOrder} className='apartment-name' size="small">
          Buy now
        </Button>
      </CardActions>
    </Card>
 
            </Grid>
    );
};

export default Apartment;