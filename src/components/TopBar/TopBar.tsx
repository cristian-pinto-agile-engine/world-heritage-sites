import React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function TopBar() {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate(`/`);
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Button onClick={handleHomeNavigation} color="inherit">
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
