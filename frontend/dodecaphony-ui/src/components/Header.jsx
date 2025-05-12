import React from 'react';
import {AppBar, Button, Toolbar} from '@mui/material';

function Header() {
    return (
        <AppBar position="static" color="success">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Button color="inherit">Dodecaphony generator</Button>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;