import React from 'react'
import { emptyCartImg } from '../../utils/Utils'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)({
    textAlign: 'center',
    '& > p': {
        padding: 10
    }
})

const EmptyCart = () => {
    return (
        <Container>
            <img src={emptyCartImg} alt="empty-cart" style={{width: '50vh'}} />
            <Typography variant='h6'>Opps.. Your cart is empty!</Typography>
            <Typography>Add items to your cart</Typography>
        </Container>
    )
}

export default EmptyCart
