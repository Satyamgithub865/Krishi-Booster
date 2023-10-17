import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const Products = () => {
    const equip = useSelector((state) => state.products.products);

    return (
        <Grid container>
            {
                equip?.map(item => (
                    <Grid item key={item._id} xs={12} sm={12} md={6} lg={4} xl={4}>
                        <ProductCard item={item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Products
