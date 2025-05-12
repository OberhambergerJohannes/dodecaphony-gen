import React from 'react';
import {Box, Grid, Typography} from '@mui/material';

function Footer() {
    return (
        <Box bgcolor="success.main" color="white" py={2} mt={4}>
            <Grid container justifyContent="space-between" px={4}>
                <Typography variant="body2">Mandatory website information</Typography>
                <Typography variant="body2">Further information</Typography>
            </Grid>
        </Box>
    )
}

export default Footer;
