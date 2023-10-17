import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, fetchProductById } from '../../redux/actions/product';

import { Box, Button, Typography, Rating, styled } from "@mui/material";
import { LocalOffer, ShoppingCart } from '@mui/icons-material';

const MainBox = styled(Box)({
    display: "flex",
    width: '100%',
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 30
});

const Styledimg = styled(`img`)({
    boxShadow: "1px 2px 5px #AEC3AE",
    borderRadius: "4px",
    height: 350,
    width: 350
});

const Box2 = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
});

const OfferBox = styled(Box)({
    '& > p': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5,
    }
})

const DetailView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const item = useSelector((state) => state.products.product);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id, dispatch]);

    if (!item) {
        return <h1>Item is not present</h1>
    }

    const percent = ((item.MRP - item.Price) / item.MRP) * 100;
    const val = 4;

    const addItemToCart = (id) => {
        dispatch(addProductToCart(id));
        navigate('/cart');
    }

    return (
        <MainBox>
            <Box margin={'auto 0px'} style={{ display: 'flex', flexDirection: 'column' }}>
                <Styledimg src={item.URL} alt={`${item.Name}_pic`} />
                <Button variant="contained" onClick={() => addItemToCart(item._id)} style={{ padding: '20px 8px', bordeRadius: 2, boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)', background: 'orange', fontWeight: 600, fontSize: 20, textTransform: 'none', marginTop: 30 }}
                ><ShoppingCart style={{ marginRight: 20 }} />Add to Cart</Button>
            </Box>
            <Box>
                <Box>
                    <Typography variant="h3">{item.Name}</Typography>
                    <Typography component="legend">
                        {item.RecommendedBy} Reviews
                    </Typography>
                    <Rating name="simple-controlled" value={val} />
                </Box>
                <hr />
                <Box2>
                    <Typography variant="h4" fontWeight={600}>₹{item.Price}K</Typography>

                    <Typography variant="h6" color="#878787">
                        <strike>₹{item.MRP}K</strike>
                    </Typography>

                    <Typography variant="h6" color="green">
                        {percent}% off
                    </Typography>
                    <Button>Dealer Contact Details</Button>
                </Box2>
                <hr />

                <OfferBox>
                    <Typography fontWeight={600} fontSize={20}>Available offers</Typography>
                    <Typography>
                        <LocalOffer fontSize='small' style={{ color: 'green' }} />
                        Bank OfferFlat₹200 off on HDFC Bank Credit/Debit Card on 3 months
                        EMI Txns, Min Txn Value ₹10,000T&C
                    </Typography>
                    <Typography>
                        <LocalOffer fontSize='small' style={{ color: 'green' }} />
                        Bank OfferFlat ₹500 off on HDFC Bank Credit/Debit Card on 6 months
                        EMI Txns, Min Txn Value ₹10,000T&C
                    </Typography>
                    <Typography>
                        <LocalOffer fontSize='small' style={{ color: 'green' }} />
                        Special PriceGet extra 9% off (price inclusive of
                        cashback/coupon)T&C
                    </Typography>
                    <Typography>
                        <LocalOffer fontSize='small' style={{ color: 'green' }} />
                        Combo OfferBuy 2 items save 5%; Buy 3 or more save 7%See all
                        productsT&C
                    </Typography>
                    <Typography>
                        <LocalOffer fontSize='small' style={{ color: 'green' }} />
                        Buy this product & get Rs.100 off on your next purchase of FansT&C
                    </Typography>

                    <Button>View 5 more offers</Button>
                </OfferBox>
                <hr />
                <Box margin={'20px 0px'}>
                    <Button>Be First To Review</Button>
                </Box>
                <Box>
                    <Typography fontWeight={600} fontSize={20}>Product Description: </Typography>
                    <Typography>{item.Description}</Typography>
                </Box>
            </Box>
        </MainBox>
    )
}

export default DetailView
