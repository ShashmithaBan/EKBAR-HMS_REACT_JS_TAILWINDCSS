import { Button, TextField } from '@mui/material'
import { yellow } from '@mui/material/colors';
import { Formik ,Form , Field } from 'formik';
import React, { useState } from 'react'

 const initialValues ={
    bCode :""
 }

export const BTTracker = () => {
    
   const handleSubmit = (value) =>{
     console.log("bCode :" , value)
   }  


  return (
    <div className="w-[370px] lg:w-[450px] bttracker shadow-md p-4 py-5 rounded-lg flex flex-col  justify-center items-center space-y-4 h-[270px]">
    <h3 className='font-bold  text-center'>You Can Get Your Booked Room Number
    Here</h3>
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    <Form className='flex flex-col space-y-5 justify-center items-center' >
    <Field
       as = {TextField}
        fullWidth
        id="bCode"
        name="bCode"
        label="Booking Confirmation Code"
        variant="outlined"
        InputLabelProps={{
          style: {
            padding: '0 3px', 
          },
        }}
          

        
      />
      <Button type='submit' name='submit' variant='contained' sx={{
          width: 300,
          justifyContent:'center',
          backgroundColor: "#FFCF40",
          fontWeight: "bold",
          '&:hover': {
            backgroundColor: "#E5B935",
          }
        }}>
  Submit</Button>
    </Form>
    </Formik>
    
    <p className= ' lg:w-[400px] text-green-500 bg-green-100 w-[300px] text-center py-2 border-2 border-green-500 rounded text-xs'>Your Room No is : <b>607</b></p>
    
  </div>
  )
}
