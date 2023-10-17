import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, Typography, Box, styled } from '@mui/material'
import CartDetails from './CartDetails';
import PriceDetail from './PriceDetail';
import PlaceOrder from './PlaceOrder';
import EmptyCart from './EmptyCart';

const LeftGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginBottom: 20
    }
}));

const Header = styled(Typography)({
    padding: 20,
    marginBottom: 30,
    fontSize: 30,
    fontFamily: 'serif',
    fontWeight: 600,
    textAlign: 'center',
    borderRadius: 4
});

const Main = styled(Box)({
    margin: '0px 20px 100px 20px',
    width: '100%',
    padding: 20
})

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <>
            <Main>
                <Header>My Cart ({cartItems?.length} items)</Header>
                <Grid container>
                    <LeftGrid item lg={9} md={9} sm={12} xs={12}>
                        {
                            cartItems?.length > 0 ?
                                cartItems.map(item => (
                                    <CartDetails item={item} key={item._id} />
                                ))
                                :
                                <EmptyCart />
                        }
                    </LeftGrid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <PriceDetail cartItems={cartItems} />
                    </Grid>
                </Grid>
            </Main>
            {cartItems?.length > 0 && <PlaceOrder />}
        </>
    )
}

export default Cart
