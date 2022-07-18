import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UserCreateForms from '../components/UserCreateForm';
import HobbiesAddingForm from '../components/HobbiesAddingForm';
import RefreshContextWarper from '../context/RefreshContext';
import Grid from '@mui/material/Grid';

export default function FormsPage() {

    return (
        <div style={{ background: 'rgb(231, 235, 240)', minHeight: '100vh', paddingTop: 120}}>
            <RefreshContextWarper>
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch">
                    <Grid item xs={12} lg={6}>
                        <Card sx={{ maxWidth: 500, margin: 'auto', }} style={{ borderRadius: 20 }} elevation={5}>
                            <CardContent>
                                <UserCreateForms />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card sx={{ maxWidth: 500, margin: 'auto',}} style={{ borderRadius: 20 }} elevation={5}>
                            <CardContent>
                                <HobbiesAddingForm />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </RefreshContextWarper>
        </div>
    )

}