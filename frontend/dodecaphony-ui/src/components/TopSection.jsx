import React from 'react';
import {Box, Button, Typography} from '@mui/material';

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
                ⏳ The piece is being generated<br/>It will be ready soon...
            </Typography>
        </Box>
    )
}

export default TopSection;