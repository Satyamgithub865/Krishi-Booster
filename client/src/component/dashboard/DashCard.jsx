import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CountingCard from "./CountingCard";

const StyledBox = styled(Box)({
  display: 'flex',
  backgroundColor: "#F3FDE8",
  borderRadius: "10px",
  textAlign: 'center',
  padding: 15,
  margin: 10
});

const DashCard = ({ title, limit, image }) => {
  return (
    <StyledBox>
      <img src={image} alt="dif" width={100} height={100} style={{borderRadius: '50%',marginRight: 8}} />
      <Box>
        <Typography color="#878787">{title}</Typography>
        <CountingCard limit={limit} />
      </Box>
    </StyledBox>
  );
};

export default DashCard;