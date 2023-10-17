import React from 'react'
import { AppBar, Toolbar, IconButton, styled, Typography, Box, Badge } from '@mui/material'
import { Menu, ShoppingCart } from '@mui/icons-material'
import Logo from '../../assets/Ari_Logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Heading = styled(AppBar)`
    z-index: 1201;
    height: 70px;
    background: #00cc00;
`

const SubHeading = styled('span')({
    fontSize: 28,
    fontFamily: 'cursive',
    fontWeight: 700,
    color: '#004d00'
})

const Subheading2 = styled('span')({
    fontSize: 25,
    fontWeight: 400,
    fontFamily: 'fantasy'
})

const Navbar = ({ open, handleDrawer }) => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <Heading open={open}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ marginRight: '20px' }}
                    >
                        <Menu style={{ color: 'wheat' }} />
                    </IconButton>
                    <img src={Logo} alt="logo" height={70} />
                    <Typography><SubHeading>Krishi</SubHeading> <Subheading2>Booster</Subheading2></Typography>

                </Box>
                <Link to={'/user/signup'}>SignUp</Link>
                <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                    <Box sx={{ display: "flex", alignItems: "center", cursor: 'pointer' }}>
                        <Badge badgeContent={cartItems.length} color="secondary">
                            <ShoppingCart fontSize='large' />
                        </Badge>
                        <Typography fontWeight={600}>
                            Cart
                        </Typography>
                    </Box>
                </Link>
            </Toolbar>
        </Heading>
    )
}

export default Navbar
