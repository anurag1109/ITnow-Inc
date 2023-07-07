import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { addUser, selectUsers } from "../store/userSlice";
import { useSelector } from "react-redux";
import PopUp from "../common/PopoUp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// registration component
const RegistrationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState<string>("");
  const users = useSelector(selectUsers);

  // initial values
  const initialValues = {
    id: Math.random(),
    name: "",
    email: "",
    dob: "",
    city: "",
    pincode: "",
  };

  // form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    dob: Yup.date()
      .required("Date of Birth is required")
      .max(
        new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000),
        "Must be at least 18 years old"
      ),
    city: Yup.string().required("City is required"),
    pincode: Yup.number()
      .required("Pincode is required")
      .min(100000, "Pincode must be 6 digits")
      .max(999999, "Pincode must be 6 digits"),
  });

  // handling form submit
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const email = users.filter((item: any) => item.email === values.email);
    if (email?.length > 0) {
      setDesc("Email already exists");
    } else {
      dispatch(addUser(values));
      //resetting form
      resetForm();
      onClose();
      setDesc("Registration Successfully");
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* form input fields */}
        <Form>
          <Box sx={{ paddingTop: 1 }}>
            <Grid container spacing={2} xs={12}>
              {/* name */}
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth={true}
                />
                <ErrorMessage name="name" component="div" />
              </Grid>
              {/* email */}
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth={true}
                />
                <ErrorMessage name="email" component="div" />
              </Grid>
              {/* dob */}
              <Grid item xs={12}>
                <Field as={TextField} type="date" name="dob" fullWidth={true} />
                <ErrorMessage name="dob" component="div" />
              </Grid>
              {/* city */}
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  fullWidth={true}
                />
                <ErrorMessage name="city" component="div" />
              </Grid>
              {/* pincode */}
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth={true}
                />
                <ErrorMessage name="pincode" component="div" />
              </Grid>
              {/* register button */}
              <Grid container item xs={12} justifyContent={"center"}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </Formik>
      <PopUp desc={desc} onClose={() => setDesc("")} />
    </>
  );
};

export default RegistrationForm;
