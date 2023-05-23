import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f2f4f6",
    overflow: "hidden",
    overflowX: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    // height: "92vh", // Adjust the height to leave space for the footer
    // height: "calc(100vh - 200px)", // Adjust the height to leave space for the footer
    objectFit: "cover",
    opacity: "0.95",
    margin: "20px",
    marginTop: "40px",
    marginBottom: "0",
  },
  overlay: {
    position: "absolute",
    top: "22%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  overlayText: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  content: {
    position: "relative",
    zIndex: "1",
    width: "100%",
  },
  footer: {
    backgroundColor: "#333",
    padding: theme.spacing(4),
    textAlign: "center",
    color: "#fff",
    // position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "130px",
  },
  footerLink: {
    color: "#fff",
    margin: theme.spacing(0, 1),
  },
  mediaIcons: {
    marginTop: theme.spacing(2),
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img className={classes.image} src="homePage2.jpg" alt="Job Portal" />
        {/* <div className={classes.overlay}>
          <h1 className={classes.overlayText}>Get Your Dream Job</h1>
        </div> */}
        <Box />
        <footer className={classes.footer}>
          <Typography variant="body1">
            Contact us at:{" "}
            <Link
              href="mailto:example@example.com"
              className={classes.footerLink}
            >
              careerconnect@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1">
            Phone:{" "}
            <Link href="tel:+91 99999-99999" className={classes.footerLink}>
              (+91) 99999 99999
            </Link>
          </Typography>
          <div className={classes.mediaIcons}>
            <Link href="#" className={classes.footerLink}>
              <Facebook />
            </Link>
            <Link href="#" className={classes.footerLink}>
              <Twitter />
            </Link>
            <Link href="#" className={classes.footerLink}>
              <Instagram />
            </Link>
          </div>
          <Typography variant="body2" style={{ marginTop: "16px" }}>
            <hr style={{ width: "50%" }}></hr>© 2023{" "}
            <strong>CareerConnect</strong>. All rights reserved.
            <hr style={{ width: "50%" }}></hr>
          </Typography>
        </footer>
      </div>
    </div>
  );
};

export const ErrorPage = () => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "100vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
