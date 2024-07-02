import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login } from '../../Store/userSlice';
import '../Auth/Signin.css'

 const initialValues = {
  username: '',
  password: '',
};

export const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const token = useSelector(state => state.user.token);
  const message = useSelector(state => state.user.message);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };
if(token){
 navigate('/dashboard')

}
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='back flex justify-center'>
      <div className="flex h-screen justify-center items-center w-full bg-[#00000040]">
        <div className="flex justify-center items-center flex-col gap-2 p-5 py-5 shadow-xl backdrop-blur-sm bg-[#ffffff63] rounded-lg">
          <h1 className='text-2xl font-bold text-white'>Admin Login</h1>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className='flex flex-col w-[330px] space-y-5'>
              <Field
                as={TextField}
                color='warning'
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                color='warning'
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button type='submit' variant='contained' sx={{
                width: 330,
                justifyContent: 'center',
                backgroundColor: "#FFCF40",
                fontWeight: "bold",
                '&:hover': {
                  backgroundColor: "#E5B935",
                }
              }}>
                Login
              </Button>
            </Form>
          </Formik>
          {loading && <Typography variant="body2" align="center" className='w-[300px] text-red-800'>Loading...</Typography>}
          {error && <Typography variant="body2" align="center" className='w-[300px] text-red-800'>{error}</Typography>}
          {token && (
            <Typography variant="body2" align="center" className='w-[300px] text-green-800'>
              {message}
            </Typography>
          )}
          <Typography variant="body2" fontWeight={'bold'} align="center" fontFamily={'monospace'} gutterBottom className='w-[300px] text-red-800 '>
            Only Admins can log in to the site. Customers can book their rooms without logging in. <br />
            <span className='text-neutral-800'>If you are a Customer </span><button className='text-white underline' onClick={() => navigate('/')}>Click Here</button>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Signin;
