import { Grid, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from '@mui/material';

const initialValues = {
  fullName: '',
  email: '',
  numOfAdults: '',
  numOfChildren: '',
  roomId: '',
  checkInDate: '',
  checkOutDate: ''
};

export const CreateBooking = () => {
    const handleSubmit = (values) => {
        console.log('Form Values:', values);
        
      };

  return (
    <div className='flex flex-col'>
      <h1 className="relative text-center lg:text-left text-2xl font-semibold">
        Create Booking
      </h1>
      <div className="mt-5">
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="fullName">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                   
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={2}>
              <Field name="roomId">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Room Id"
                    variant="outlined"
                    fullWidth
                   
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={2}>
              <Field name="numOfAdults">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Num of Adults"
                    variant="outlined"
                    fullWidth
                    
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={2}>
              <Field name="numOfChildren">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Num of Children"
                    variant="outlined"
                    fullWidth
                   
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Button
              fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  
                    justifyContent:'center',
                    backgroundColor: "#FFCF40",
                    fontWeight: "bold",
                    '&:hover': {
                      backgroundColor: "#E5B935",
                    }
                  }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
     
    </Formik>
      </div>
    </div>
  );
};
