import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import MySingleOrders from './MySingleOrders';

const MyOrders = () => {
    const [buyers, setBuyers] = useState([])
    const { user } = useAuth()
    
  
    useEffect(() => {
        const url = `https://desolate-lowlands-20122.herokuapp.com/buyers?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBuyers(data));
    }, [user.email])
     // delete 
     const handleDelete = (id) =>{
        const confirm = window.confirm("are you sure ?");
    
        if (confirm === true) {
            const url = `https://desolate-lowlands-20122.herokuapp.com/buyers/${id}`
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = buyers.filter(buyer => buyer._id !== id);
                    setBuyers(remaining);
                }
                
            })
        }
        
        }
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           buyers.map(buyer=><MySingleOrders
            buyer={buyer} key={buyer._id} handleDelete={handleDelete}
           ></MySingleOrders>)
       }
      </Grid>
    </Box>
    );
};

export default MyOrders;