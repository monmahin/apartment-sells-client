import { Avatar, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import { fontSize } from '@mui/system';
const useStyles = makeStyles({
  head: {
    backgroundColor: 'crimson',
  },
  headcell: {
    color: 'white',
    fontSize: '16px',
    fontWeight:500
    
  }
});

const ManageOrders = () => {
const [buyers, setBuyers] = useState([])
    const { user } = useAuth()
    const classes = useStyles();
  
    useEffect(() => {
        const url = 'https://desolate-lowlands-20122.herokuapp.com/buyers'
        fetch(url)
            .then(res => res.json())
            .then(data => setBuyers(data));
    }, [user])
    



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
        <div>
            <h1 className="manageOrder" style={{color:'crimson'}}>Manage Orders</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead className={classes.head} >
          <TableRow >
            <TableCell className={classes.headcell}>Image</TableCell>
            <TableCell className={classes.headcell} align="left">email</TableCell>
            <TableCell className={classes.headcell} align="left">Name</TableCell>
            <TableCell className={classes.headcell} align="right">Contact</TableCell>
            <TableCell className={classes.headcell} align="right">Property</TableCell>
            <TableCell className={classes.headcell} align="right">Status</TableCell>
            <TableCell className={classes.headcell} align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {buyers.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                 sx={{ width: 80, height: 80 }} alt="img"
                 src={row.image} />
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.property}</TableCell>
              <TableCell align="right">
                <Button size="small" variant="contained" color="success">
                          {row.status}
                </Button>
                </TableCell>
              <TableCell align="right">
                      <IconButton onClick={()=>handleDelete(row._id)} aria-label="delete" size="large">
                          <DeleteIcon color='error' fontSize="inherit" />
                      </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrders;