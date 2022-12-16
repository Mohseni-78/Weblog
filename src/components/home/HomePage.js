import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Author from "../authors/Author";
import Blog from "../blogs/Blog";

const HomePage = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography component="h3" variant="h5" my={3} fontWeight="700">
              {" "}
              نویسنده ها
            </Typography>
            <Author/>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography component="h3" variant="h5" my={3} fontWeight="700">
              مقالات
            </Typography>
            <Blog/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
