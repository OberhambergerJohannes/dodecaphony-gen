import React from 'react';
import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import Github from '@mui/icons-material/GitHub';

function Header() {
    return (
        <AppBar position="static" color="success">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography color="inherit">Dodecaphony generator</Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    component="a"
                    href="https://github.com/OberhambergerJohannes/dodecaphony-gen"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer'
                    }}
                >
                    <Github sx={{mr: 0.5}} />
                    <Typography color="inherit">
                        Github Repository
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;