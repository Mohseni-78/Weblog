import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { GET_BLOG } from "../../graphql/query";
import Loader from "../loader/Loader";
import CardEL from "../shared/CardEL";

const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOG);
  if (loading) return <Loader/>;
  if (error) return <h3>Error ...</h3>;

    return (
      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEL {...post} />
          </Grid>
        ))}
      </Grid>
    );
};

export default Blog;
