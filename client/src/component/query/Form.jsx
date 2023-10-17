import { Box, styled, Typography, TextField, Button } from "@mui/material";
import ContactSupport from "@mui/icons-material/ContactSupport";
import React, { useState } from "react";

const Querybox = styled(Box)(({ theme }) => ({
    marginTop: "3rem",
    color: "#00cc00",
    backgroundColor: "whitesmoke",
    borderRadius: "2rem",
    padding: " 2rem",
    boxSizing: "border-box",

}));

const Styledimage = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    }
}));

const formData = {
    name: '',
    email: '',
    query: ''
}

const Form = () => {
    const [query, setQery] = useState(formData);

    const handleChange = (e) => {
        setQery({ ...query, [e.target.name]: e.target.value });
    }

    return (
        <Box style={{ display: "flex", justifyContent: "center" }}>
            <Styledimage >
                <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/confused-person-4828095-4018600.png"
                    alt=""
                />
            </Styledimage>
            <Querybox width={"60%"}>
                <Box style={{ marginBottom: 15 }}>
                    <Typography variant="span" fontSize={"40px"}>
                        A
                    </Typography>
                    <Typography variant="span" fontSize={"25px"}>
                        sk{" "}
                    </Typography>
                    <Typography variant="span" fontSize={"40px"}>
                        Y
                    </Typography>
                    <Typography variant="span" fontSize={"25px"}>
                        our{" "}
                    </Typography>
                    <Typography variant="span" fontSize={"40px"}>
                        Q
                    </Typography>
                    <Typography variant="span" fontSize={"25px"}>
                        uery{" "}
                    </Typography>
                    <ContactSupport fontSize="large" />
                </Box>

                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder="Enter your name"
                    fullWidth
                    style={{ display: "block", marginTop: "0" }}
                    name="name"
                    onChange={(e) => handleChange(e)}
                ></TextField>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder="Enter your e-mail address"
                    fullWidth
                    style={{ display: "block", marginTop: "1rem" }}
                    name="email"
                    onChange={(e) => handleChange(e)}
                ></TextField>
                <TextField
                    multiline
                    required
                    id="outlined-multiline-flexible"
                    rows={5}
                    label="Query Description"
                    fullWidth
                    style={{ display: "block", marginTop: "1rem" }}
                    name="query"
                    onChange={(e) => handleChange(e)}
                ></TextField>

                <Box
                    sx={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
                >
                    <Button variant="contained" color="success">
                        Submit
                    </Button>
                </Box>
            </Querybox>
        </Box>
    );
};

export default Form;