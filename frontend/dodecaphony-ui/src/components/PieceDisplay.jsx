import React from 'react';
import {Box, CircularProgress} from '@mui/material';

function PieceDisplay() {
    return (
        <Box display="flex" justifyContent="center" my={4}>
            <Box width={300} height={200} display="flex" alignItems="center" justifyContent="center" bgcolor="#ddd">
                <CircularProgress color="secondary"/>
            </Box>
        </Box>
    )
}

export default PieceDisplay;