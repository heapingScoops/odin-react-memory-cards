import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar( {currentScore, highScore} ) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar id="navbar">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Memory Card Game
                    </Typography>
                    <div width="15%">
                        <Typography variant="h6" component="div" >Current Score: {currentScore} </Typography>
                        <Typography variant="h6" component="div" >High Score: {highScore} </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
