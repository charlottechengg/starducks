import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './NavBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Icon, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const sizes = [
    {
        label: 'Small',
        value: 'small'
    },
    {
        label: 'Medium',
        value: 'medium'
    },
    {
        label: 'Large',
        value: 'large'
    }
]

const sugars = ['0%', '25%', '50%', '75%', '100%']
const ices = ['0%', '50%', '100%']
const flavours = ['Origin', 'Matcha', 'Oat', 'Vanilla']

const toppings = ['Grass Jelley', 'Coffee Jelley', 'Aloe Jelley', 'Fruit Jelley', 'Red Bean', 'Taro Paste', 'Tapioca']

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function CustomerOrder() {
    const navigate = useNavigate();
    const basePriceS = 4.99
    const basePriceM = 5.99
    const basePriceL = 6.99
    const [price, setPrice] = useState(basePriceM);
    const [favourite, setFavourtie] = useState(0);
    const [shoppingItem, setShoppingItem] = useState(0);
    const [size, setSize] = useState('medium');
    const [quantity, setQuantity] = useState(1)
    const [sugar, setSugar] = useState('100%')
    const [ice, setIce] = useState('100%')
    const [flavour, setFlavour] = useState('Original')
    const [selectedToppings, setToppings] = useState(['Tapioca'])

    const favouriteOnclick = () => {
        if (favourite === 0) {
            setFavourtie(1)
        } else {
            setFavourtie(0)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
    }

    const handleChangeTopping = (event) => {
        const {
            target: { value },
        } = event;
        setToppings(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const calculatePrice = () => {
        var basePrice = 0
        if (size === 'small') {
            basePrice = basePriceS
        } else if (size === 'medium') {
            basePrice = basePriceM
        } else {
            basePrice = basePriceL
        }
        var result = (basePrice + (selectedToppings.length - 1) * 0.5) * quantity
        setPrice(result.toFixed(2))
    }

    useEffect(() => calculatePrice())

    return (
        <>
            <Box>
                <ResponsiveAppBar shoppingItem={shoppingItem} />
            </Box>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '50%', height: '100%', display: 'div' }}>
                    <Box sx={{ display: 'flex', width: '100%', height: '30%' }}>
                        <Box sx={{ width: '90%' }}>
                            <Button onClick={() => { navigate('../') }} >{"< Go Back"}</Button>
                        </Box>
                        <Box sx={{ width: '10%' }}>
                            <IconButton onClick={() => favouriteOnclick()} >
                                {favourite ? <FavoriteIcon sx={{ color: '#ff5252' }} /> : <FavoriteBorderIcon sx={{ color: '#ff5252' }} />}
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                        <Box sx={{ display: 'div', width: '100%', height: '100%', alignContent: 'center' }}>
                            <Typography align='center' sx={{ width: '100%', height: '100%', }}>
                                <img style={{ width: "60%", height: "100%" }} src="/bubble_tea_large.jpeg" />
                            </Typography>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Box sx={{ height: '30%' }}>
                                <Typography >Bubble Tea</Typography>
                                <Typography >${price}</Typography>
                            </Box>
                            <Box sx={{ height: '50%' }}>
                                <Typography >Ingredient:</Typography>
                                <Typography >Water</Typography>
                                <Typography>Tea</Typography>
                                <Typography>Milk</Typography>
                                {selectedToppings.map((topping) => (
                                    <Typography>{topping}</Typography>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', height: '100%', borderLeft: 1 }}>
                    <Typography align='center'>
                        <Grid container spacing={1} direction="row" sx={{ marginTop: '3%', marginBottom: '1%' }} >
                            <Grid item xs={4.5} />
                            <Grid item xs={1}>
                                <IconButton onClick={() => decreaseQuantity()}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>{quantity}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton onClick={() => increaseQuantity()}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4.5} />
                        </Grid>
                        <Grid>
                            <TextField
                                id="size"
                                select
                                label="Size"
                                value={size}
                                onChange={(event) => {
                                    setSize(event.target.value)
                                }}
                                helperText="Please select your drink size"
                            >
                                {sizes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid sx={{ marginTop: '1%' }}>
                            <TextField
                                id="sugar"
                                select
                                label="Sugar"
                                value={sugar}
                                onChange={(event) => {
                                    setSugar(event.target.value)
                                }}
                                helperText="Please select your sweetness"
                            >
                                {sugars.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid sx={{ marginTop: '1%' }}>
                            <TextField
                                id="flavour"
                                select
                                label="Flavour"
                                value={flavour}
                                onChange={(event) => {
                                    setFlavour(event.target.value)
                                }}
                                helperText="Please select milk tea flavour"
                            >
                                {flavours.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid sx={{ marginTop: '1%' }}>
                            <TextField
                                id="ice"
                                select
                                label="Ice"
                                value={ice}
                                onChange={(event) => {
                                    setIce(event.target.value)
                                }}
                                helperText="Please select ice percentage"
                            >
                                {ices.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid>
                            <InputLabel id="topping-label">Toppings</InputLabel>
                            <Select
                                id="topping"
                                multiple
                                value={selectedToppings}
                                onChange={handleChangeTopping}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {toppings.map((topping) => (
                                    <MenuItem key={topping} value={topping}>
                                        <Checkbox checked={selectedToppings.indexOf(topping) > -1} />
                                        <ListItemText primary={topping} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid sx={{ marginTop: '3%' }}>
                            <Button onClick={() => setShoppingItem(shoppingItem + quantity)} variant="outlined">
                                Add {quantity > 1 ? "items" : "item"} - $ {price}
                            </Button>
                        </Grid>
                    </Typography>
                </Box>
            </Box>
        </>
    );
}