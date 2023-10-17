import React from 'react'
import BarChart from './BarChart'
import { Box, Grid, Typography } from '@mui/material'
import DashCard from './DashCard'
import Ranges from './Ranges'
import digital from '../../assets/digital_artist_male.jpg'
import crops from '../../assets/crops.png'
import fertilizer from '../../assets/fertilizer.png'
import tractor from '../../assets/tractor.webp'
import bars from '../../assets/bars.webp'
import Articles from './Articles'

const DashBoard = () => {
    const dashCardData = [
        { title: 'Supported People', limit: 50000, image: digital },
        { title: 'Crops Varieties', limit: 1000, image: crops },
        { title: 'Fertilizers Varieties', limit: 100, image: fertilizer },
        { title: 'Equipment Varieties', limit: 8000, image: tractor },
        { title: 'Last Month Reach', limit: 100000, image: bars }
    ]

    return (
        <Box width={'100%'} padding={3}>
            <Grid container>
                {
                    dashCardData.map(data => (
                        <Grid key={data.limit} item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <DashCard title={data.title} limit={data.limit} image={data.image} />
                        </Grid>
                    ))
                }
            </Grid>

            <Grid container style={{ marginTop: 100 }}>
                <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
                    <Box>
                        <Typography color='#878787' >Total Revenue and Public Reach</Typography>
                        <Typography color='#52527a' fontWeight={700} fontSize={25} padding={"4px 1px"}>₹50Cr+</Typography>
                        <BarChart />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box padding={2}>
                        <h2>Social Reach</h2>
                        <Ranges title="Social Media" percent={64} color="Purple" />
                        <Ranges title="Marketplace" percent={40} color="Green" />
                        <Ranges title="Websites" percent={50} color="Yellow" />
                        <Ranges title="Digital Ads" percent={80} color="Pink" />
                        <Ranges title="Others" percent={15} color="Red" />
                    </Box>
                </Grid>
            </Grid>

            <Articles />
        </Box>
    )
}

export default DashBoard
