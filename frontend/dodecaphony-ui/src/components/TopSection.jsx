import React from 'react';
import {Box, Button, Typography} from '@mui/material';

function TopSection({ onRegenerate }) {
    return (
        <Box textAlign="center" mt={5}>
            <Typography variant="h4" gutterBottom>
                Create your own piece!
            </Typography>
            <Button variant="contained" color="success" size="large" onClick={onRegenerate}>
                Regenerate piece now
            </Button>
        </Box>
    )
}

export default TopSection;