import React, { useState } from 'react';
import ResponsiveAppBar from './NavBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CustomerOrder() {
    const navigate = useNavigate();
    const [favourite, setFavourtie] = useState(0);

    const favouriteOnclick = () => {
        if (favourite === 0) {
            setFavourtie(1)
        } else {
            setFavourtie(0)
        }
    }

    return (
        <>
            <Box>
                <ResponsiveAppBar />
            </Box>
            <Box sx={{ width: '100%', height: '100%', display: 'inline-flex', justifyContent: 'center' }}>
                <Box sx={{ width: '50%', height: '100%'}}>
                    <Box sx={{ display: 'inline-flex' }}>
                        <Box sx={{ width: '50%' }}>
                            <Button onClick={() => { navigate('../')}} >{"< Go Back"}</Button>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <IconButton onClick={() => favouriteOnclick()} >
                                {favourite ? <FavoriteIcon sx={{color: '#ff5252'}} /> : <FavoriteBorderIcon sx={{color: '#ff5252'}} />}
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <img style={{ width: "50%", height: "50%" }} src="/bubble_tea.jpeg" />
                        </Box>
                        <Box>
                            ingridient
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', height: '100%', borderLeft: 2}}>
                    right Box
                </Box>
            </Box>
        </>
    );
}