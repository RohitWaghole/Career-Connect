import React, { useState, useContext, useEffect } from "react";
import { SetPopupContext } from "../App";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundImage: 'url("login.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Add any other background properties as needed
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: "transparent",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      setPopup({
        open: true,
        severity: "success",
        message: "Message sent successfully",
      });
      // Handle form submission

      // Clear the input fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Please fill in all fields",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { name, email, message } = formData;
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && message.trim() !== ""
    );
  }, [formData]);

  return (
    <Paper className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className={classes.textField}
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.textField}
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              className={classes.textField}
              required
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              disabled={!isFormValid}
              style={{ backgroundColor: "#821212", color: "white" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactUs;
