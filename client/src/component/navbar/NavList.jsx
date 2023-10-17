import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Agriculture, Grass, PestControl, HelpCenter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {
    const navList = [
        { id: 1, name: 'Dashboard', icon: <Dashboard />, route: '/' },
        { id: 2, name: 'Equipments', icon: <Agriculture />, route: '/equipments' },
        { id: 3, name: 'Seeds', icon: <Grass />, route: '/' },
        { id: 4, name: 'Fertilizers', icon: <PestControl />, route: '/' },
        { id: 5, name: 'Ask Query', icon: <HelpCenter />, route: '/query' }
    ]

    const [activeLink, setActiveLink] = useState('Dashboard');

    const handleClick = (name) => {
        setActiveLink(name);
    }

    return (
        <List>
            {
                navList.map(list => (
                    <Link to={list.route} key={list.id} style={{ color: 'inherit', textDecoration: 'none', }}>
                        <ListItem >
                            <ListItemButton onClick={() => handleClick(list.name)} sx={{
                                backgroundColor: activeLink === list.name ? '#99bbff'
                                    : 'inherit', '&:hover': {
                                        backgroundColor: activeLink === list.name ? '#99bbff' : '#e6eeff',
                                    },
                                    borderRadius: 5
                            }}>
                                <ListItemIcon>
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText primary={list.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
        </List>
    )
}

export default NavList
