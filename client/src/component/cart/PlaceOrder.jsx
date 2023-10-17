import React from 'react'
import {Box, Button, styled} from '@mui/material'

const Container = styled(Box)({
    background: '#FFF',
    boxShadow: '1px 1px 1px 1px rgba(0 0 0 / 10%)',
    padding: 15,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    borderTop: '2px solid #878787'
});

const Btn = styled(Button)({
    bordeRadius: 2, 
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
    width: 250, 
    background: '#fb641b', 
    fontWeight: 600,
    padding: '15px 30px',
})

const PlaceOrder = () => {
  return (
    <Container>
        <Btn variant='contained'>Place Order</Btn>
    </Container>
  )
}

export default PlaceOrder
