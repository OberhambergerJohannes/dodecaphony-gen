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
function PieceDisplay({ abcString, loading, zoom = 1.0 }) {
    const notationRef = useAbcNotation(abcString, loading);
    return(
        <Box display="flex"
             justifyContent="center"
             my={4}
             style={{width: "100%"}}>
            <Box
                sx={{
                    width: "100%",
                    minWidth: 600,
                    maxWidth: 800,
                    minHeight: 200,
                    maxHeight: 200,
                    overflowX: "auto", //optional scroll bar
                    bgcolor: "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {loading ? (
                    <CircularProgress color="secondary"/>
                ) : (
                    <div ref={notationRef} style={{
                        width: "100%",
                        transform: `scale(${zoom})`,
                        transformOrigin: "center left",
                        height: "auto",
                    }} />
                )}
            </Box>
        </Box>
    );
}

export default PieceDisplay;
