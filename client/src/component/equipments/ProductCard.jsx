import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { addEllipis } from "../../utils/Utils";
import { Link } from 'react-router-dom'

const Styledimg = styled(`img`)({
    borderRadius: "25px 25px 0 0",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
    height: 220
});
const Box2 = styled(Box)({
    marginTop: "-2px",
    zIndex: 5,
    backgroundColor: "#183D3D",
    borderRadius: "0 0 25px 25px ",
    padding: 5,
    textAlign: "center",
});
const Box3 = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
});
const ProductCard = ({ item }) => {

    return (
        <Box margin={1}>
            <Link to={`/details/product/${item._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <Styledimg src={item.URL} alt="productimg" width="100%" />
                <Box2>
                    <Typography color="#FAF0E6" fontSize="25px">
                        {item.Name}
                    </Typography>
                    <hr width="80%" />
                    <Typography color="#F3FDE8" textAlign="center">
                        {addEllipis(item.Description)}
                    </Typography>
                    <hr width="80%" />
                    <Box3>
                        <Box
                            color="#FFEEF4"
                            backgroundColor="#5C8374"
                            borderRadius={2}
                            padding="1px 5px"
                        >
                            ₹{item.MRP}K
                        </Box>
                        <Box
                            color="#FFEEF4"
                            backgroundColor="#5C8374"
                            borderRadius={2}
                            padding="1px 5px"
                        >
                            Recommendedby:{item.RecommendedBy}
                        </Box>
                    </Box3>
                </Box2>
            </Link>
        </Box>
    );
};

export default ProductCard;