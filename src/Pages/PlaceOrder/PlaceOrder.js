import {Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import OrderForm from './OrderForm';
import useApartment from '../../Hook/useApartment'
const PlaceOrder = () => {
  const {apartment}=useApartment()
    // const { apartmentId } = useParams();
    // const [apartment, setApartment] = useState({})
    
    // useEffect(() => {
    //     const url = `https://desolate-lowlands-20122.herokuapp.com/apartments/${apartmentId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data=>setApartment(data));
    // }, [apartmentId])
    const { houseName, houseImg, houseInfo, price, place,_id} = apartment
    return (
        <>
            <Navbar></Navbar>
        <Container sx={{ flexGrow: 1 ,my:12 }}>

      <Grid container spacing={8}>
        <Grid  item xs={12} md={5}>
        
         <Card  sx={{  }}>
      <CardActionArea  >
        <CardMedia
          component="img"
        height='200px'
          className='apartment-img'
          image={houseImg}
          alt="green iguana"
        />
        <CardContent  syle={{textAlign:'left',color:"#65360D"}}>
          <Typography gutterBottom variant="h4">
            <span className='apartment-name'>{houseName}</span>
          </Typography>
          <Typography variant="body1">
            <span className='apartment-name'>{houseInfo}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
         <Typography gutterBottom variant="h5">
            <span className='apartment-name'>{price}</span>
          </Typography>
         <Typography gutterBottom variant="h5">
            <span className='apartment-name'>{place}</span>
          </Typography>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <OrderForm
          key={_id}
          apartment={apartment}
          ></OrderForm>
        </Grid>
       
      </Grid>
    </Container>
    </>
    );
};

export default PlaceOrder;
/* 
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
*/