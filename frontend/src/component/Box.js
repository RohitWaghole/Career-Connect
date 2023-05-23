import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "90%",
    marginBottom: theme.spacing(2),
    objectFit: "cover",
  },
}));

const Box = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="stretch" justify="center">
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.image}
              src="scam.jpg"
              alt="Beware of Scammers"
            />
            <CardContent>
              <Typography variant="h6">
                <strong>Beware of Scammers</strong>
              </Typography>
              <Typography variant="body1">
                Protect yourself from fraudulent job offers and scams.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.image}
              src="freshers.jpg"
              alt="A Platform for Freshers"
            />
            <CardContent>
              <Typography variant="h6">
                <strong>A Platform for Freshers</strong>
              </Typography>
              <Typography variant="body1">
                Discover entry-level job opportunities tailored for freshers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.image}
              src="boost.jpg"
              alt="Give Your Job Hunt a Boost"
            />
            <CardContent>
              <Typography variant="h6">
                <strong>Give Your Job Hunt a Boost</strong>
              </Typography>
              <Typography variant="body1">
                Get valuable resources and tips to enhance your job search.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Box;
