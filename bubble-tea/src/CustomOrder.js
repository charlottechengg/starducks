import React from 'react';
import ResponsiveAppBar from './NavBar';
import Box from '@mui/material/Box';

export default function CustomerOrder() {
    return (
        <>
            <Box>
                <ResponsiveAppBar />
            </Box>
            <Box sx={{ display: 'inline-flex', justifyContent: 'center' }}>
                <Box>
                    left Box
                </Box>
                <Box>
                    right Box
                </Box>
            </Box>
        </>
    );
}