import React from 'react'
import { Box } from '@mui/material'
import Experts from './Experts'
import Form from './Form'

const Query = () => {
    return (
        <Box width={'100%'} marginTop={2}>
            <Experts />
            <Form />
        </Box>
    )
}

export default Query
