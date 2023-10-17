import { Box, ButtonGroup, Button, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/product';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    borderBottom: '1px solid #d9d9d9',
    background: '#FFF',
    margin: '0 20px 0 0',
    boxShadow: '1px 1px 1px 1px rgba(0 0 0 / 10%)',
    [theme.breakpoints.down('md')]: {
        marginRight: 0
    }
}));

const LeftContainer = styled(Box)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    & > * {
        padding: 10px;
    }
`
const RightContainer = styled(Box)`
    padding: 15px;
`

const StyledButton = styled(Button)`
    border-radius: 50%;
`

const CartDetails = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevState => prevState - 1 > 0 ? prevState - 1 : 0);
    }

    const percent = ((item.MRP - item.Price) / item.MRP) * 100;

    const removeItemFromCart = () => {
        dispatch(removeFromCart(item._id));
    }

    return (
        <Container>
            <LeftContainer>
                <img src={item.URL} alt="item-pic" style={{ width: 100, height: 100 }} />
                <ButtonGroup aria-label="outlined primary button group">
                    <StyledButton onClick={() => decreaseQuantity()}>-</StyledButton>
                    <Button disabled={true}>{quantity}</Button>
                    <StyledButton onClick={() => increaseQuantity()}>+</StyledButton>
                </ButtonGroup>
            </LeftContainer>
            <RightContainer>
                <Typography variant='h6'>{item.Name}</Typography>
                <Typography>
                    <Box component="span" style={{ color: '#878787' }}>Seller: XYZ</Box>
                </Typography>
                <Box style={{ marginTop: 10 }}>
                    <Typography component='span' variant='h6' style={{ fontSize: 20, fontWeight: 600 }}>₹{item.Price}K</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography component='span' style={{ color: '#878787' }} ><strike>₹{item.MRP}K</strike></Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography component='span' style={{ color: 'green' }}>{percent}% off</Typography>
                </Box>
                <Button style={{ marginTop: 30 }} onClick={() => removeItemFromCart()} >Remove</Button>
            </RightContainer>
        </Container >
    )
}

export default CartDetails
