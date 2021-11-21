import { Alert, Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
import useAuth from '../../../Hook/useAuth';
import { HashLink } from 'react-router-hash-link';
const AddReview = () => {
    const { user } = useAuth()
    // console.log(user.photoURL)
    const { register, handleSubmit,reset } = useForm();
    const  [bookingSuccess,setBookingSuccess]=useState(false)
    const onSubmit = data => {
        data.image = user?.photoURL;
        console.log(data)
        axios.post('https://desolate-lowlands-20122.herokuapp.com/reviews', data)
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
            <Paper sx={{m:2,p:3,mx: 'auto'}} elevation={5}>
            <h1 style={{color:'crimson'}}>Add Review</h1>
             <form  onSubmit={handleSubmit(onSubmit)}>
      
             <TextField
            {...register("email", { required: true})}
             defaultValue={user.email}
             fullWidth sx={{ m: 1 }}
             type="email"
             readOnly
              />
      <TextField
            {...register("name", { required: true})}
            defaultValue={user.displayName}
            id="name"
            fullWidth sx={{ m: 1 }}
            type="name"
            label="name"
        />
        <TextField
       {...register("reviews", { required: true })} 
          id="outlined-multiline-static"
          label="add review"
          type='text'
          multiline
          sx={{ m: 1 }}
          fullWidth
          rows={4}
        />
          <Box sx={{display:'flex',my:3,alignItems:'center'}}>
                <TextField
            {...register("rating", { required: true })} 
            inputProps={{ min: ".5", max: "5", step: ".5" }}
             sx={{ width:'100px' ,m:1  }}
             size='small'
            label="rating"
            type="number"
            
        />
      <Button  style={{backgroundColor:'crimson',flexGrow:.5}} type="submit" variant="contained">Submit</Button>
      <Button sx={{ml:1}}  variant='contained'  component={HashLink} to='/home#reviews'>Go To Review</Button>
     </Box>
    </form>
    
    {bookingSuccess && <Alert severity="success" sx={{my:2}}>Appointment Booked successfully!</Alert>}
    </Paper>
    </Box>
    );
};

export default AddReview