import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import appFetch from "../Utils/http"
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HobbiesEdit from './HobbiesEdit';
import { useRefresh } from '../context/RefreshContext';

export default function HobbiesAddingForm() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [userId, setUserId] = useState(null);
  const { refreshTs } = useRefresh()

  useEffect(() => {
    getUsers()
  }, [refreshTs])

  const getUsers = async () => {
    let resp = await appFetch('/api/user', 'GET')
    if (resp?.data) return setUsers(resp?.data)

    setError(resp?.error)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <div style={{margin: '8px'}}><h4>Add Hobbies</h4></div>
      <div style={{margin: '8px'}}>
        <FormControl fullWidth>
          <InputLabel >User</InputLabel>
          <Select
            value={userId}
            label="Age"
            onChange={(event) => { setUserId(event.target.value); }}
          >
            {
              users?.map(user => (
                <MenuItem key={user?.id} value={user?.id}>{`${user.firstName} ${user?.lastName}`}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <HobbiesEdit userId={userId} />
      </div>
      <div>
        {
          error && (
            <Alert severity="error">{error}</Alert>
          )
        }
      </div>
    </Box>
  );
}