import {
  Grid,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImageToCloudinary } from "../util/UploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { addRoom, resetAddRoomStatus } from "../../Store/roomSlice";
import { useNavigate } from "react-router-dom";

const initialValues = {
  roomType: "",
  roomPrice: "",
  images: [],
  pin: "1234",
};

export const AddRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState(false);
  const room = useSelector((state) => state.room);
  const { addRoomStatus } = useSelector((state) => state.room);

  useEffect(() => {
    if (addRoomStatus === "success") {
      setTimeout(() => {
        dispatch(resetAddRoomStatus());
      }, 3000); 
    }
  }, [addRoomStatus, dispatch]);

  const handleImageChange = async (e, setFieldValue, values) => {
    const file = e.target.files[0];
    setUploadImage(true);
    try {
      const imageUrl = await uploadImageToCloudinary(file);
      console.log("Uploaded Image URL:", imageUrl);
      setFieldValue("images", [...values.images, imageUrl]);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploadImage(false);
    }
  };

  const handleRemoveImage = (index, values, setFieldValue) => {
    const updatedImages = [...values.images];
    updatedImages.splice(index, 1);
    setFieldValue("images", updatedImages);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Values:", values);
    dispatch(addRoom(values));
    resetForm();
  };

  return (
    <div className="flex flex-col xl:mx-64 mx-12 py-10 justify-center items-center">
      <h1 className="relative text-center lg:text-left text-2xl font-semibold">
        Add New Room
      </h1>
      {addRoomStatus === "success" && (
        <p className='w-full text-green-500 bg-green-100 text-center py-2 border-2 border-green-500 rounded text-xs'>
          Room Successfully Added
        </p>
      )}
      <div className="mt-5">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue, values }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} className="flex flex-wrap gap-5">
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => handleImageChange(e, setFieldValue, values)}
                  />
                  <label className="relative" htmlFor="fileInput">
                    <span className="w-24 h-24 cursor-pointer flex border-black items-center justify-center p-2 border rounded-md hover:border-yellow-500">
                      <AddPhotoAlternateIcon className="text-black hover:text-yellow-500" />
                    </span>
                    {uploadImage && (
                      <div className="absolute left-0 right-0 top-7 bottom-0 w-24 h-24 flex justify-center">
                        <CircularProgress />
                      </div>
                    )}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {values.images.map((item, index) => (
                      <div key={index} className="relative">
                        <img className="w-24 h-24 object-cover" src={item} alt="" />
                        <IconButton
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            outline: "none",
                          }}
                          onClick={() => handleRemoveImage(index, values, setFieldValue)}
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Field name="roomPrice">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Room Price"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="roomType-label">Room Type</InputLabel>
                    <Field name="roomType">
                      {({ field }) => (
                        <Select
                          labelId="roomType-label"
                          id="roomType"
                          label="Room Type"
                          {...field}
                          value={field.value}
                          onChange={(e) => setFieldValue("roomType", e.target.value)}
                        >
                          <MenuItem value="VIP">VIP</MenuItem>
                          <MenuItem value="Semi">Semi Luxury</MenuItem>
                        </Select>
                      )}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      justifyContent: "center",
                      backgroundColor: "#FFCF40",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#E5B935",
                      },
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
