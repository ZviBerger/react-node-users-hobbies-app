import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UsersTable from '../components/UsersTable';

export default function HomePage() {

    return (
        <div style={{ background: 'rgb(231, 235, 240)', minHeight: '100vh', paddingTop: 120, }}>
           <Card sx={{ maxWidth: '80vw', margin: 'auto', borderRadius: 10 }}>
                    <CardContent>
                        <UsersTable />
                    </CardContent>
                </Card>
        </div>
    )

}