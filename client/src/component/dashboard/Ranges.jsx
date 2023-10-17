import React from 'react';
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox1 = styled(Box)({
    backgroundColor: "whitesmoke",
    height: "10px",
    width: "100%",
    position: "absolute",
    border: "5px solid white",
    borderRadius: "10px",
})

const StyledBox2 = styled(Box)({
    position: "absolute",
    height: "10px",
    borderRadius: "10px",
    top: "5px",
})

const StyledBox3 = styled(Box)({
    position: "relative",
})

const Ranges = ({ title, percent, color }) => {


    return (
        <Box marginBottom={6}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{title}</span>
                <span>{percent}%</span>
            </Box>
            <StyledBox3>
                <Box>
                    <StyledBox1>
                        <Box>
                        </Box>
                    </StyledBox1>
                    <StyledBox2 width={`${percent}%`} backgroundColor={color}>
                        <Box>
                        </Box>
                    </StyledBox2>
                </Box>
            </StyledBox3>
        </Box>
    );
};

export default Ranges;