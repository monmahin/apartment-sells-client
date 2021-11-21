import { Alert, Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const  [bookingSuccess,setBookingSuccess]=useState(false)
    const onSubmit = data => {
        console.log(data)
        axios.post('https://desolate-lowlands-20122.herokuapp.com/apartments', data)
        .then(res => {
            if (res.data.insertedId) {
            setBookingSuccess(true)
            reset()
        }
    })
    };
    // const { houseName, houseImg, houseInfo, price, place,_id} = apartment
    return (
        <Box item container sx={{ maxWidth: 'sm',mx: 'auto' }}>
            <Paper sx={{m:2,p:2,mx: 'auto'}} elevation={5}>
            <h1 style={{color:'crimson'}}>Add Product</h1>
             <form  onSubmit={handleSubmit(onSubmit)}>
      
      <TextField
            {...register("houseName", { required: true })} 
            id="title"
            // fullWidth
             sx={{ m: 1, width:'44%' }}
            label="title"
            type="text"
            // variant='standard'
        />
      <TextField
            {...register("place", { required: true })} 
            // id="place"
            // fullWidth
             sx={{ m: 1, width:'44%' }}
            label="place"
            type="text"
            // variant='standard'
        />
      <TextField
            {...register("price", { required: true })} 
            // id="title"
            // fullWidth
             sx={{ m: 1, width:'35%' }}
            label="price"
            type="number"
            // variant='standard'
        />
      <TextField
            {...register("houseImg", { required: true })} 
            id="title"
            // fullWidth
             sx={{ m: 1, width:'53%'}}
            label="image"
            type="text"
            // variant='standard'
        />
       <TextField
       {...register("houseInfo", { required: true })} 
          id="outlined-multiline-static"
          label="information"
          multiline
          sx={{ m: 1 ,width:'92%'}}
        //   fullWidth
          rows={4}
        />
    
      
      <br /><br /><br />
      <Button style={{backgroundColor:'crimson',width:'200px'}} type="submit" variant="contained">Submit</Button>
    </form>
    {bookingSuccess && <Alert severity="success" sx={{my:2}}>Appointment Booked successfully!</Alert>}
    </Paper>
    </Box>
    );
};

export default AddProduct;