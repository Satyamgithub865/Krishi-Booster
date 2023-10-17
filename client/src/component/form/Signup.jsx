import React, { useState } from 'react'
import { Box, Button, TextField, Typography, styled } from '@mui/material'
import farmer from '../../assets/farmer.webp'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../../redux/actions/user'

const Container = styled(Box)({
    height: '70vh',
    display: 'flex',
    width: '50%',
    margin: 'auto',
    marginTop: 30,
    padding: 8,
})

const InputWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    '& > div': {
        marginBottom: 20,
        width: '100%'
    },
    alignItems: 'center',
    width: '70%',
    marginTop: 50,
})

const Error = styled(Typography)({
    color: 'red',
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'monospace'
})

const defaultUser = {
    name: '',
    email: '',
    password: ''
}

const Signup = () => {
    const [user, setUser] = useState(defaultUser);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const p = useSelector((state) => state.user.signup);
    console.log(p);

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        setError('');
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const userSignup = () => {
        if (user.name === "" || user.password === "" || user.email === "") {
            setError('Kindly fill all the required fields');
            return;
        }

        const isEmailValid = validateEmail(user.email);

        if (!isEmailValid) {
            setError('please enter correct email address');
            return;
        }
        dispatch(signupUser(user));
    }

    return (
        <Container>
            <Box width={'30%'}>
                <img src={farmer} alt="farmer_img" width={'100%'} style={{ marginTop: 25 }} />
            </Box>
            <InputWrapper>
                <TextField
                    label='name'
                    placeholder='Enter your name'
                    name='name'
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    label='email'
                    placeholder='Enter you email address'
                    name='email'
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    label='password'
                    placeholder='Enter your password'
                    name='password'
                    onChange={(e) => handleChange(e)}
                />
                {error && <Error>{error}</Error>}
                <Button variant='contained' onClick={() => userSignup()}>Sign UP</Button>
            </InputWrapper>
        </Container>
    )
}

export default Signup
