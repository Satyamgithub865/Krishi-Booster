import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Expert1 = styled(Box)({
    textAlign: "center",
    padding: "1rem",
    color: "#00cc00",
    borderRadius: "1rem",
    width: "300px",

});

const Experts = () => {
    return (
        <Box width={"100%"} style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
            <Expert1 height={"50%"} backgroundColor={"whitesmoke"}>
                <img
                    src="https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1.jpg"
                    alt=""
                    width={"150px"}
                    height={"150px"}
                    style={{ borderRadius: "50%" }}
                />
                <Typography variant="h4" marginTop={"1rem"}>Aditya Maharshi</Typography>
                <Typography variant="h6" >Crop Expert</Typography>
                <Typography marginTop={"1rem"}>
                    "Empowering farmers through crop expertise."
                </Typography>
            </Expert1>
            <Expert1 height={"50%"} backgroundColor={"whitesmoke"}>
                <img
                    src="https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1.jpg"
                    alt=""
                    width={"150px"}
                    height={"150px"}
                    style={{ borderRadius: "50%" }}
                />
                <Typography variant="h4" marginTop={"1rem"}>Satyam Kumar</Typography>
                <Typography variant="h6" >Equipment Expert</Typography>
                <Typography marginTop={"1rem"}>
                    "Elevating agriculture with advanced equipment."
                </Typography>
            </Expert1>
            <Expert1 height={"50%"} backgroundColor={"whitesmoke"}>
                <img
                    src="https://www.portotheme.com/wordpress/porto/shortcodes/wp-content/uploads/sites/32/2016/06/team-1.jpg"
                    alt=""
                    width={"150px"}
                    height={"150px"}
                    style={{ borderRadius: "50%" }}
                />
                <Typography variant="h4" marginTop={"1rem"}>Suraj Kumar</Typography>
                <Typography variant="h6" >Fertilizers Expert</Typography>
                <Typography marginTop={"1rem"}>
                    "Nurturing crops with the science of fertilizers."
                </Typography>
            </Expert1>
        </Box>
    );
};

export default Experts;