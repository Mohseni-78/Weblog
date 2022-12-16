import { useQuery } from "@apollo/client";
import { Grid, Avatar, Typography, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GET_AUTHOR } from "../../graphql/query";
import Loader from "../loader/Loader";


const Author = () => {
  const { loading, error, data } = useQuery(GET_AUTHOR);

  if (loading) return <Loader/>;
  if (error) return <h3>Error ...</h3>;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 5,
      }}
    >
      {data.authors.map((author,index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} sx={{ padding: 2 }}>
            <Link
              style={{
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
              }}
              alt="hi"
              to={`/authors/${author.slug}`}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== data.authors.length -1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Author;
