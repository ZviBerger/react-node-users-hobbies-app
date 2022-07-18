import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import appFetch from "../Utils/http"
import Alert from '@mui/material/Alert';
import { useRefresh } from '../context/RefreshContext';

export default function UserCreateForms() {
  const [userData, setUserData] = useState({})
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { shouldRefresh } = useRefresh()
  const onFieldChange = e => {
    if (error || message) {
      setMessage(null)
      setError(null)
    }
    setUserData(state => ({ ...state, [e.target.name]: e.target.value }))
  }
  const createUser = async () => {
    try {
      let resp = await appFetch('/api/user', 'POST', userData)
      if (resp?.error) setError(resp?.error)
      else setMessage(resp?.message)
      shouldRefresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <div style={{margin: '8px'}}><h4>Add User</h4></div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
          name='firstName'
          value={userData?.['firstName']}
          onChange={onFieldChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
          name='lastName'
          value={userData?.['lastName']}
          onChange={onFieldChange}

        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue=""
          name='address'
          value={userData?.['address']}
          onChange={onFieldChange}

        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue=""
          name='phoneNumber'
          value={userData?.['phoneNumber']}
          onChange={onFieldChange}

        />
      </div>
      <div style={{margin: '8px'}}>
        <Button onClick={createUser} variant="contained">Create</Button>

      </div>
      <div style={{margin: '12px 8px 8px 8px' }}>
        {
          error && (
            <Alert severity="error">{error}</Alert>
          )
        }
        {
          message && (
            <Alert severity="success">{message}</Alert>
          )
        }
      </div>
    </Box>
  );
}