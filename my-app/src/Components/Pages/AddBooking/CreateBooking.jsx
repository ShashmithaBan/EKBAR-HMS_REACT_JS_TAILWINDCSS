import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../../Store/bookRoomSlice';

const initialValues = {
  guestFullName: '',
  guestEmail: '',
  numOfAdults: '',
  numOfChildren: '',
  roomId: '', 
  checkInDate: null,
  checkOutDate: null,
};

export const CreateBooking = ({ id }) => {
  const dispatch = useDispatch();
  const booking = useSelector((state)=>state.bookedroom.bookedrooms[0])
  
 
  const handleSubmit = (values) => {
    console.log('Form Values:', values);
    
    try {
      dispatch(addBooking(values)); 
     
      
    } catch (error) {
      console.error('Error creating booking:', error);
    }
   
  };
  

  return (
    <div className='flex flex-col'>
      <h1 className="relative text-center lg:text-left text-2xl font-semibold">
        Create Booking
      </h1>
      {booking&&<p className='w-full text-green-500 bg-green-100 text-center py-2 border-2 border-green-500 rounded text-xs'>
          Your Room No is: <b>{booking.bookingConfirmationCode}</b>
        </p>}
      <div className="mt-5">
        <Formik
          initialValues={{ ...initialValues, roomId: id }}  
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field name="guestFullName">
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
                <Grid item md={6} xs={12}>
                  <Field name="guestEmail">
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
                <Grid item md={2} xs={12}>
                  <Field name="roomId">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label={id ? 'Room' : 'Room'}
                        variant="outlined"
                        fullWidth
                       
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item md={2} xs={12}>
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
                <Grid item md={2} xs={12}>
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
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="checkInDate">
                      {({ field }) => (
                        <DatePicker
                          {...field}
                          label="Check-in Date"
                          inputFormat="DD/MM/YYYY"
                          renderInput={(params) => <TextField {...params} fullWidth />}
                          onChange={(value) => setFieldValue('checkInDate', value)}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="checkOutDate">
                      {({ field }) => (
                        <DatePicker
                          {...field}
                          label="Check-out Date"
                          inputFormat="DD/MM/YYYY"
                          renderInput={(params) => <TextField {...params} fullWidth />}
                          onChange={(value) => setFieldValue('checkOutDate', value)}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      justifyContent: 'center',
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
          )}
        </Formik>
        
        
     
      </div>
    </div>
  );
};
