import { Alert, Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {user}=useAuth()
    // const { token } = useAuth();
    const handleOnBlur = e => {
      setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://desolate-lowlands-20122.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                setSuccess(true)
            }
        })

      e.preventDefault()  
    }
    return (
        <Box>
        
            <Paper sx={{py:5}} elevation={3}>
                <h2>Make Admin by {user?.displayName}</h2>
            <form style={{margin:'80px 0'}}
                onSubmit={handleAdminSubmit}
            >
                <TextField
                    sx={{ maxWidth: '50%' }}
                    label="Email"
                    type="email"
                    size="small"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button style={{backgroundColor:'crimson'}} sx={{mx:3,mt:1}} type="submit" variant="contained">Submit</Button>
        </form>
        {success && <Alert sx={{mt:2}}
          severity="success">Made Admin successfully!</Alert>}
           </Paper>
        
        </Box>
    );
};

export default Admin;