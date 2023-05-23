import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to our Job Portal!
      </Typography>
      <Typography variant="body1" gutterBottom>
        At <strong>CareerConnect</strong>, we are dedicated to connecting
        talented professionals with their dream jobs. Our platform provides a
        seamless and user-friendly experience for both job seekers and
        employers, making the hiring process efficient and effective.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our team is passionate about bridging the gap between employers and job
        seekers. We understand the challenges faced by both parties and strive
        to create a platform that addresses their needs. With our extensive
        network and advanced search features, we make it easier for job seekers
        to find relevant opportunities and for employers to identify top talent.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Why choose us?
      </Typography>
      <ol>
        <li>
          <Typography variant="body1" gutterBottom>
            Comprehensive Job Listings: Our platform offers a wide range of job
            listings across various industries and positions. Whether you're a
            recent graduate or an experienced professional, you'll find a
            diverse array of opportunities tailored to your skills and
            interests.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            User-Friendly Interface: We believe that navigating a job portal
            should be intuitive and hassle-free. Our user-friendly interface
            ensures a smooth experience, allowing you to easily search and apply
            for jobs, manage your applications, and communicate with potential
            employers.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            Employer Tools: For employers, we provide a range of powerful tools
            to streamline the hiring process. From creating compelling job
            listings to managing applications and communicating with candidates,
            our platform simplifies the recruitment process, saving you time and
            effort.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            Career Resources: We go beyond job listings by offering valuable
            career resources. Our blog features insightful articles, expert
            tips, and industry trends to help you enhance your job search
            strategies, improve your interview skills, and stay updated on the
            latest developments in your field.
          </Typography>
        </li>
      </ol>
      <Typography variant="body1" gutterBottom>
        At <strong>CareerConnect</strong>, we are committed to delivering a
        superior job search experience. We believe that finding the right job or
        the right candidate shouldn't be a daunting task. With our innovative
        platform and dedicated team, we strive to empower professionals and
        businesses alike, making the job search process a seamless and rewarding
        journey.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vivamus tristique ullamcorper facilisis. Sed in neque at enim blandit
        suscipit ut eu mauris. Fusce nec nunc vitae felis egestas auctor vitae
        et ligula. Nunc posuere placerat elit, eu mollis mi varius eu.
      </Typography>
    </Container>
  );
};

export default AboutUs;
