import React from 'react';
import {Box, Button, Checkbox, FormControlLabel, Paper, Typography} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const CustomizeSection = () => (
    <Box my={4}>
        <Box bgcolor="success.main" color="white" py={2} textAlign="center">
            <Typography variant="h5">
                Customize your experience <SettingsIcon fontSize="small"/>
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={3}>
            <Paper elevation={3} sx={{p: 3, width: 300}}>
                <Typography variant="body1" gutterBottom>
                    Customize your piece!
                </Typography>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Customizeable option 1"/>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Customizeable option 2"/>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Customizeable option 3"/>
                <Box textAlign="right" mt={2}>
                    <Button variant="text" size="small">Regenerate now!</Button>
                </Box>
            </Paper>
        </Box>
    </Box>
);

export default CustomizeSection;