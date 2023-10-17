import { Box, Typography, styled } from "@mui/material";
import React from "react";

const StyledBox1 = styled(Box)(({ theme }) => ({
    marginTop: "2rem",
    display: "flex",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "2rem",
    backgroundColor: "whitesmoke",
    borderRadius: "1rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
    },
}));

const Articles = () => {
    return (
        <Box style={{ display: "flex", flexDirection: "column", textalign: "center", alignItems: "center" }} >
            {/*        Box1         */}
            <StyledBox1>
                <Box textAlign={"center"} width={"40%"} height={"100%"}>
                    <img
                        src="https://www.universalimplements.com/img/gallery/universal-implments-warehouse.jpg"
                        alt=""
                        width={"90%"}
                        height={"100%"}
                        style={{
                            borderRadius: "1rem",
                            boxShadow: "1px 1px 5px black",
                            marginLeft: "20px",
                        }}
                    />
                </Box>
                <Box width={"100%"} maxHeight={"100%"}>
                    <Typography variant="h4" color={"#00cc00"}>
                        Agriculture in Action - Behind the scenes
                    </Typography>
                    <Typography marginBottom={"1.5rem"} style={{ opacity: "0.5" }}>
                        5th May'19
                    </Typography>
                    <Typography variant="h5" color={"#008000"}>
                        Our Team
                    </Typography>
                    <Typography>
                        Our journey begins with our passionate and skilled team of
                        agricultural experts. From seasoned agronomists to logistics
                        wizards, every member plays a vital role in ensuring our customers
                        receive the best possible service.
                    </Typography>
                    <Typography variant="h5" marginTop={".5rem"} color={"#008000"}>
                        Our Warehouses
                    </Typography>
                    <Typography>
                        Step into our state-of-the-art warehouse, where the magic truly
                        happens. Here, our extensive inventory of top-quality agricultural
                        products is meticulously organized and managed.
                    </Typography>
                </Box>
            </StyledBox1>
            {/*       Box2        */}
            <StyledBox1>
                <Box textAlign={"center"} width={"40%"} height={"100%"}>
                    <img
                        src="https://assets.e-agriculture.fao.org/public/styles/full_node/public/news/Digital_Ag_Transformation.png?itok=SubmP-Nj"
                        alt=""
                        width={"90%"}
                        height={"100%"}
                        maxWidth={"1133px"}
                        style={{
                            borderRadius: "1rem",
                            boxShadow: "1px 1px 5px black",
                            marginLeft: "20px",
                        }}
                    />
                </Box>
                <Box width={"100%"}>
                    <Typography variant="h4" color={"#00cc00"}>
                        Our Workshops and Training Programs
                    </Typography>
                    <Typography marginBottom={"1.5rem"} style={{ opacity: "0.5" }}>
                        25th March'22
                    </Typography>
                    <Typography variant="h5" color={"#008000"}>
                        Farming Workshops
                    </Typography>
                    <Typography>
                        Throughout the year, we host hands-on workshops on various aspects
                        of farming, from soil health and pest management to crop rotation
                        and sustainable practices. These workshops bring together local
                        farmers, experts, and our team to foster a collaborative learning
                        environment.
                    </Typography>
                    <Typography variant="h5" marginTop={".5rem"} color={"#008000"}>
                        Webinars
                    </Typography>
                    <Typography>
                        In an increasingly digital world, we've adapted by offering webinars
                        on relevant agricultural topics. These webinars are accessible to
                        farmers nationwide, providing them with insights from industry
                        professionals without geographical limitations. That is the reason of why they come here.
                    </Typography>
                </Box>
            </StyledBox1>
            {/*       Box3         */}
            <StyledBox1>
                <Box textAlign={"center"} width={"40%"} height={"100%"}>
                    <img
                        src="https://img2.cgtrader.com/items/2114142/48a7871042/large/stara-tractor-with-seed-drill-3d-model-max--obj-mtl-3ds-c4d-lwo-lw-lws-ma-mb.jpg"
                        alt=""
                        width={"90%"}
                        height={"100%"}
                        style={{
                            borderRadius: "1rem",
                            boxShadow: "1px 1px 5px black",
                            marginLeft: "20px",
                        }}
                    />
                </Box>
                <Box width={"100%"}>
                    <Typography variant="h4" color={"#00cc00"}>
                        A Year in Review
                    </Typography>
                    <Typography marginBottom={"1.5rem"} style={{ opacity: "0.5" }}>
                        14th Nov'21
                    </Typography>
                    <Typography variant="h5" color={"#008000"}>
                        Crop Boosters Extraordinaire
                    </Typography>
                    <Typography>
                        Our range of innovative crop enhancers, like seeder, have
                        received resounding applause from farmers nationwide. These products
                        not only boosted yields but also improved crop quality, helping
                        farmers thrive in an ever-competitive market.
                    </Typography>
                    <Typography variant="h5" marginTop={".5rem"} color={"#008000"}>
                        Sustainable Farming Initiatives
                    </Typography>
                    <Typography>
                        In line with our dedication to eco-friendly practices, our
                        sustainable farming solutions gained significant traction. From
                        organic fertilizers to water-saving irrigation systems, we've
                        enabled farmers to adopt greener and more responsible farming
                        methods.
                    </Typography>
                </Box>
            </StyledBox1>
        </Box>
    );
};

export default Articles;