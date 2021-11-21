import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';


import AddedApartment from './AddedApartment';

const AddedProducts = () => {
    const [addedApartments, setApartments] = useState([])
    useEffect(() => {
        fetch('https://desolate-lowlands-20122.herokuapp.com/apartments')
            .then(res => res.json())
        .then(data=>setApartments(data))
    }, [])
     // delete 
     const handleDelete = (id) =>{
        const confirm = window.confirm("are you sure ?");
    
        if (confirm === true) {
            const url = `https://desolate-lowlands-20122.herokuapp.com/apartments/${id}`
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
                .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = addedApartments.filter(singleApartment => singleApartment._id !== id);
                    setApartments(remaining);
                }
                
            })
        }
        
        }
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{ flexGrow: 1,my:8 }}>
            <Container  maxWidth="lg">
      <Typography style={{ fontWeight: 500,color: "#65360D",margin:'30px' }} variant="h3"  component="div">
         <span className='apartment-title'>Apartments</span>
        </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                    {
                        addedApartments.slice(10).map(addedApartment => <AddedApartment
                            key={addedApartment._id}
                            addedApartment={addedApartment}
                            handleDelete={handleDelete}
                        ></AddedApartment>)
                    }
           </Grid>
      </Container>
         </Box>
         </>
        
    );
};

export default AddedProducts;
