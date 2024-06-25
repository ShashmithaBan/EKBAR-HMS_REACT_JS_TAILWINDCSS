
import { Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
 
const initialValues = {
    fullName : '',
    email:'',
    numOfAdults:'',
    numOfChildren:'',
    roomId:'',
    checkInDate:'',
    checkOutDate:''
}

export const CreateBooking = () => {
    const handleSubmit = () =>{

    }
  return (
    <div className='flex flex-col'>
        <h1 className="relative text-center lg:text-left text-2xl font-semibold">
            Create Booking
        </h1>
        <div className="">
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className='space-y-4 px-2 lg:w-[1000px] mt-5 w-[400px]'>
                <Grid container className='space-y-3 gap-2 flex justify-center items-center'>
                    <Grid item xs={12}>
                    <TextField
                    color='warning'
                    name = "fullName"
                    label="Full Name" 
                    variant="outlined"
                    fullWidth
                    className='border-white'
                    
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                    color='warning'
                    name = "email"
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    className='border-white'
                    
                    />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                    color='warning'
                    name = "email"
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    className='border-white'
                    
                    />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField
                    color='warning'
                    name = "email"
                    label="Email" 
                    variant="outlined"
                    fullWidth
                    className='border-white'
                    
                    />
                    </Grid>
                </Grid>
            
            </Form>
        </Formik>
        </div>
       
    </div>
  )
}
