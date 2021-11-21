import { Alert, Button, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';
const OrderForm = ({apartment}) => {
    const { user } = useAuth();
    const  [bookingSuccess,setBookingSuccess]=useState(false)
    // console.log(loginUser)
    const { register, handleSubmit, reset } = useForm();
    const { houseName,houseImg,price } = apartment
    // console.log(apartment)
    const onSubmit = data => {
        data.status = 'pending'
        data.image = houseImg;
        data.price=price
        console.log(data);
        axios.post('https://desolate-lowlands-20122.herokuapp.com/buyers', data)
        .then(res => {
            if (res.data.insertedId) {
                // res.status = 'pending'
                // console.log(res.status)
            setBookingSuccess(true)
            reset()
        }
    })
    }
    return (
        <div >
            <Typography variant="h5" gutterBottom>Booking Order</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            {...register("email", { required: true})}
             defaultValue={user.email}
             fullWidth sx={{ m: 1 }}
             type="email"
             readOnly
              />
            <Input
            {...register("name", { required: true})}
             defaultValue={user.displayName}
             id="name"
             fullWidth sx={{ m: 1 }}
             type="name"
             label="name"
              />
            <Input
            {...register("property", { required: true})}
             defaultValue={houseName}
             fullWidth sx={{ m: 1 }}
             readOnly
              />
           
            <TextField
            {...register("phone", { required: true })} 
            id="phone"
            step='1'
            fullWidth sx={{ m: 1 }}
            label="phone"
            type="number"
            // variant='standard'
        />
            <TextField
            {...register("quantity", { required: true })} 
            id="number"
            step='1'
            fullWidth sx={{ m: 1 }}
            label="quantity"
            type="number"
            // variant='standard'
        />
        {/* <input type="submit" /> */}
        <Button fullWidth type="submit" variant="contained">Submit</Button>
        {bookingSuccess && <Alert severity="success" sx={{my:2}}>Appointment Booked successfully!</Alert>}
            </form>
            
        </div>
    );
};

export default OrderForm;
