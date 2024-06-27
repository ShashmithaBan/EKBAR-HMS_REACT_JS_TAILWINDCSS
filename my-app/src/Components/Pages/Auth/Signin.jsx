import React from 'react'
import '../Auth/Signin.css'
import { Field, Form, Formik } from 'formik'
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'







const initialValues ={
    email:'',
    password:''
}

export const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) =>{
    console.log('form values',values)
    
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    
    <div className='back flex justify-center '>
        <div className="flex h-screen justify-center items-center bg-[#00000040] ">
          <div className="flex justify-center items-center flex-col gap-2 p-5 py-5 shadow-xl  backdrop-blur-sm bg-[#ffffff63] rounded-lg">
            <h1 className='text-2xl font-bold text-white'>Admin Login</h1>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className='flex flex-col w-[330px] space-y-5 '>
                    <TextField
                    
                    color='warning'
                    name = "email"
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    className='border-white'
                    
                    />
                    <TextField
                    color='warning'
                    name = "password"
                    label="Password" 
                    variant="outlined"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
            endAdornment={
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
            }
                  
                    />
                    <Button type='submit' variant='contained'  sx={{
          width: 330,
          justifyContent:'center',
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
             <Typography variant="body2" fontWeight={'bold'} align="center" fontFamily={'monospace'} gutterBottom className='w-[300px] text-red-800 '>
  Only Admins can log in to the site. Customers can book their rooms without logging in. <br/>
  <span className='text-neutral-800'>If you are a Customer </span><button className='text-white underline'  onClick={()=>navigate('/') }>Click Here</button>
  
</Typography>
             
          </div>
             
        </div>
        
    </div>
  )
}
