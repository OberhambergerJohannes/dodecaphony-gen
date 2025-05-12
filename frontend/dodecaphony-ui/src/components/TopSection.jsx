import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TopSection() {
    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h4" gutterBottom>
                Create your own piece!
            </Typography>
            <Button variant="contained" color="success" size="large">
                Generate piece now
            </Button>
            <Typography variant="caption" display="block" mt={2}>
                The piece is being generated<br/> <AccessTimeIcon sx={{ fontSize: 14 }}/> It will be ready soon...
            </Typography>
        </Box>
    )
}

export default TopSection;