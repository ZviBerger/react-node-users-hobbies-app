import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import appFetch from "../Utils/http";
import { useRefresh } from '../context/RefreshContext';

export default function DeleteUser({ userId }) {
    const { shouldRefresh } = useRefresh()

    const deleteUser = async () => {
        let resp = await appFetch(`/api/user/${userId}`, 'DELETE')
        shouldRefresh()
    }

    return (
        <IconButton edge="end" aria-label="comments" onClick={deleteUser}>
            <DeleteIcon />
        </IconButton>
    );
}
