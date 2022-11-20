import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './NavBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormLabel, Grid, Icon, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import smallImage from '../../asset/bubble_tea_small.jpg';
import mediumImage from '../../asset/bubble_tea_medium.jpeg';
import largeImage from '../../asset/bubble_tea_large.jpg';

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

export default function CustomerOrder({shoppingItem, setShoppingItem, selectedToppings, setToppings}) {
    const theme = useTheme()
    const navigate = useNavigate();
    const basePriceS = 4.99
    const basePriceM = 5.99
    const basePriceL = 6.99
    const [price, setPrice] = useState(basePriceM);
    const [favourite, setFavourtie] = useState(0);
    // const [shoppingItem, setShoppingItem] = useState(0);
    const [size, setSize] = useState('medium');
    const [quantity, setQuantity] = useState(1)
    const [sugar, setSugar] = useState('100%')
    const [ice, setIce] = useState('100%')
    const [flavour, setFlavour] = useState('Origin')
    // const [selectedToppings, setToppings] = useState(['Tapioca'])

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

    var image = mediumImage;
    const showImage = () => {
        if (size === "small") {
            image = smallImage
        } else if (size === "large") {
            image = largeImage
        } else {
            image = mediumImage
        }
        return image;
    }

    useEffect(() => calculatePrice())

    return (
        <>
            <Box>
                <ResponsiveAppBar shoppingItem={shoppingItem} />
            </Box>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={false} sm={4} md={6} sx={{
                    backgroundImage: `url(${showImage()})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <Grid container sx={{ display: 'flex', width: '100%', height: '30%', marginTop:'2%' }}>
                        <Grid item md={11}>
                            <Button sx={{ color: '#EAEAEA' }} onClick={() => { navigate('../') }} >{"< Go Back"}</Button>
                        </Grid>
                        <Grid item md={1}>
                            <IconButton onClick={() => favouriteOnclick()} >
                                {favourite ? <FavoriteIcon sx={{ color: '#ff5252' }} /> : <FavoriteBorderIcon sx={{ color: '#ff5252' }} />}
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='flex-end' md={12} rowSpacing={5} sx={{ mt:'1%' }} >
                        <Grid item md={9}/>
                        <Grid item md={3} sm={3} justifyContent='flex-end'>
                                <Typography fontSize={20} fontWeight='bold' color={size === 'large' ? '#B2B2B2' : '#022b3a'}>Bubble Tea 1</Typography>
                                <Typography fontSize={20} color={size === 'large' ? '#B2B2B2' : '#022b3a'}>${price}</Typography>
                        </Grid>
                        <Grid item md={9}/>
                        <Grid item md={3} sm={3} justifyContent='flex-end'>
                                <Typography fontSize={20} fontWeight='bold' color={size === 'small' ? '#022b3a' : '#B2B2B2'}>Ingredient:</Typography>
                                <Typography fontSize={20} color={size === 'small' ? '#022b3a' : '#B2B2B2'}>Water</Typography>
                                <Typography fontSize={20} color={size === 'small' ? '#022b3a' : '#B2B2B2'}>Tea</Typography>
                                <Typography fontSize={20} color={size === 'small' ? '#022b3a' : '#B2B2B2'}>Milk</Typography>
                                {selectedToppings.map((topping) => (
                                    <Typography fontSize={20} color={size === 'small' ? '#022b3a' : '#B2B2B2'}>{topping}</Typography>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            
                <Grid sx={{ width: '30%', display: "flex", my: 8, mx:4, flexDirection:"column", height: '100%', alignItems: "center", ml: 'auto', mr: 'auto' }}>
                    <FormControl sx={{ mt: '35%'  }} fullWidth variant="outlined">
                        <InputLabel htmlFor="quantity">Quantity</InputLabel>
                        <OutlinedInput
                            id="quantity"
                            startAdornment={
                                <InputAdornment position="start">
                                <IconButton
                                    onClick={() => decreaseQuantity()}
                                    edge="start"
                                >
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                onClick={() => increaseQuantity()}
                                edge="end"
                                >
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </InputAdornment>
                            }
                            value={quantity}
                            label="Password"
                        />

                        <TextField
                            sx={{ marginTop: '2%' }}
                            id="size"
                            fullwidth
                            select
                            label="Size"
                            value={size}
                            onChange={(event) => {
                                setSize(event.target.value)
                            }}
                        >
                            {sizes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            sx={{ marginTop: '2%' }}
                            id="sugar"
                            select
                            label="Sugar"
                            value={sugar}
                            onChange={(event) => {
                                setSugar(event.target.value)
                            }}
                        >
                            {sugars.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            sx={{ marginTop: '2%' }}
                            id="flavour"
                            select
                            label="Flavour"
                            value={flavour}
                            onChange={(event) => {
                                setFlavour(event.target.value)
                            }}
                        >
                            {flavours.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            sx={{ marginTop: '2%' }}
                            id="ice"
                            select
                            label="Ice"
                            value={ice}
                            onChange={(event) => {
                                setIce(event.target.value)
                            }}
                        >
                            {ices.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <FormControl sx={{ mt: '2%' }} fullWidth variant="outlined">
                        <InputLabel id='topping-label'>Toppings</InputLabel>
                            <Select
                                labelId='topping-label'
                                input={<OutlinedInput label="Toppings" />}
                                sx={{ marginTop: '2%' }}
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
                    </FormControl>
                    <Grid sx={{ marginTop: '3%' }}>
                        <Button sx={{ color: '#BA94D1', borderColor: '#BA94D1'  }} onClick={() => setShoppingItem(shoppingItem + quantity)} variant="outlined">
                            Add {quantity > 1 ? "items" : "item"} - $ {price}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}