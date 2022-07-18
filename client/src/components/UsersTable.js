import React, { useState, useEffect } from 'react'
import appFetch from "../Utils/http"
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import RefreshContextWarper, { useRefresh } from '../context/RefreshContext';
import DeleteUser from './DeleteUser';
const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 100,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: false,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 130,
        editable: false,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        width: 130,
        editable: false,
    },
    {
        field: 'hobbies',
        headerName: 'Hobbies',
        editable: false,
        width: 500,
        renderCell: (obj) => <div>{obj.row.hobbies?.map(hobby => <Chip label={hobby} style={{marginRight:5}}/>)}</div>
    },
    {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        editable: false,
        renderCell: (obj) => <DeleteUser userId={obj.row.id} />
    },
];

function UsersTable() {
    const [users, setUsers] = useState([])
    const { refreshTs } = useRefresh()

    useEffect(() => {
        getUsers()
    }, [refreshTs])

    const getUsers = async () => {
        const users = await appFetch('/api/user/with-hobbies')
        if (users?.data) {
            setUsers(users.data?.map(user => ({ ...user, hobbies: user.hobbies?.[0]?.hobbies })))
        }
    }

    return users ? (
        <Box sx={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={users?.map((user,) => ({ ...user, }))}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}

            />
        </Box>
    ) : (
        <div>Loading</div>
    )
}


export default function () {
    return (
        <RefreshContextWarper><UsersTable /></RefreshContextWarper>
    )

}
