import { Box, Table, TableBody, TableCell, TableRow, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    background: #FFF;
    box-shadow: 1px 1px 1px 1px rgba(0 0 0 / 50%);
`;

const CellBody = styled(TableCell)`
    border-bottom: none;
    font-size: 16px;
`;

const PriceDetail = ({ cartItems }) => {

    let netMRP = 0, netPrice = 0;
    cartItems.forEach(item => {
        netPrice += item.Price;
        netMRP += item.MRP;
    })

    return (
        <Container>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2} style={{ color: '#808080', fontSize: 18, fontWeight: 600 }}>PRICE DETAILS</TableCell>
                    </TableRow>
                    <TableRow>
                        <CellBody>Price ({cartItems?.length} items)</CellBody>
                        <CellBody>₹{netMRP}K</CellBody>
                    </TableRow>
                    <TableRow>
                        <CellBody>Discount</CellBody>
                        <CellBody>-₹{netMRP - netPrice}K</CellBody>
                    </TableRow>
                    <TableRow>
                        <TableCell>Delivery Charges</TableCell>
                        <TableCell>Free</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ fontSize: 18, fontWeight: 600 }}>Total Amount</TableCell>
                        <TableCell style={{ fontSize: 18, fontWeight: 600 }}>₹{netPrice}K</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}

export default PriceDetail
