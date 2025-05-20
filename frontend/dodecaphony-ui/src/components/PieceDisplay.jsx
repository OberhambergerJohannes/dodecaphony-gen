import React from 'react';
import useAbcNotation from './useAbcNotation.jsx';
import {Box, CircularProgress} from '@mui/material';

/**
 * show music notes in a "picture"
 * abcString: ABC notation string
 * loading: state of loading music notes as a boolean
 * @returns {Element}
 * @constructor
 */
function PieceDisplay({ abcString, loading }) {
    const notationRef = useAbcNotation(abcString, loading);
    return(
        <Box display="flex" justifyContent="center" my={4}>
            <Box width={300} height={200} display="flex" alignItems="center" justifyContent="center" bgcolor="#ddd">
                {loading ? (
                    <CircularProgress color="secondary"/>
                ) : (
                    <div ref={notationRef} style={{width: "100%", height: "100%"}} />
                )}
            </Box>
        </Box>
    );
}

export default PieceDisplay;