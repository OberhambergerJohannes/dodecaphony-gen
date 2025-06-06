import React from 'react';
import {Box, Grid, Typography} from '@mui/material';

function Footer() {
    return (
        <Box bgcolor="success.main" color="white" py={2} mt={4}>
            <Grid container justifyContent="space-between" px={4}>
                <Typography variant="body2">We hope you have very much fun with this generator!</Typography>
                <Typography variant="body2">Thank you!</Typography>
            </Grid>
        </Box>
    )
}

export default Footer;
