import { BookOnline } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h5" component="h1" flex={1} fontWeight="bold">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                بلاگ
              </Link>
            </Typography>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <BookOnline />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
