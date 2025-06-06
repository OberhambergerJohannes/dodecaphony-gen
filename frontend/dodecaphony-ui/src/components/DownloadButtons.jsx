import React from 'react';
import {Box, Button} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function DownloadButtons({onDownloadWAV}) {
    return (
        <Box display="flex" justifyContent="center" gap={2} my={2}>
            <Button variant="contained" color="success" startIcon={<PictureAsPdfIcon/>}>Download PDF</Button>
            <Button variant="contained" color="success" startIcon={<AudiotrackIcon/>} onClick={onDownloadWAV}>Download WAV</Button>
            <Button variant="contained" color="success" startIcon={<LibraryMusicIcon/>}>Get Sheets</Button>
        </Box>
    )
}

export default DownloadButtons;