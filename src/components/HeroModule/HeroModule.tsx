import React from 'react';
import { Box, Typography } from '@mui/material';

function HeroModule() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '30vh',
                backgroundImage: 'url(/assets/images/hero-module-background.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textShadow: '0px 0px 10px rgba(0,0,0,0.7)',
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                    }
                }}
            >
                World Heritage Sites
            </Typography>
        </Box>
    );
}

export default HeroModule;
