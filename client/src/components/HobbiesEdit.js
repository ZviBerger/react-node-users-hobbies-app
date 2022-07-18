import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import appFetch from "../Utils/http"
import Alert from '@mui/material/Alert';

export default function HobbiesEdit({ userId }) {
    const [hobbies, setHobbies] = useState([]);
    const [newHobby, setNewHobby] = useState(null);
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (!userId) return;
        reset()
        getUserHobbies()
    }, [userId])

    const reset = () => {
        setMessage('')
        setError('')
        setNewHobby('')
        setHobbies([])
    }

    const resetMsg = () => {
        setMessage('')
        setError('')
    }


    const getUserHobbies = async () => {
        let resp = await appFetch(`/api/hobby/${userId}`, 'GET')

        if (!resp?.data) return setHobbies([])

        if (resp?.data?.hobbies) return setHobbies(resp?.data?.hobbies)

        setError(resp?.error ?? 'Could not get hobbies list')
    }

    const add = () => {
        if (newHobby === '') return;
        resetMsg()
        setHobbies(hobbs => ([...hobbs, newHobby]))
        setNewHobby('')
    }
    const deleteHobby = (hobby) => {
        resetMsg()
        setHobbies(hobbs => hobbs.filter(h => h !== hobby))
    }

    const save = async () => {
        let resp = await appFetch(`/api/hobby/${userId}`, 'POST', { userId, hobbies })

        if (resp?.message)
            return setMessage(resp?.message)

        setError(resp?.error)
    }

    if (!userId) return null;

    return (
        <>
            <h4>Hobbies:</h4>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {hobbies?.map((value) => {
                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" onClick={() => deleteHobby(value)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={value} />
                        </ListItem>
                    );
                })}
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={add}>
                            <AddCircleIcon />
                        </IconButton>
                    }
                >
                    <TextField
                        fullWidth
                        variant='standard'
                        label="New Hobby"
                        value={newHobby}
                        //  margin={false}
                        onChange={(e) => {setNewHobby(e.target.value); resetMsg()}}
                    />
                </ListItem>
            </List>
            <Button onClick={save} variant="contained">Save</Button>
            <div style={{ marginTop: '20px' }}>
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


        </>
    );
}
