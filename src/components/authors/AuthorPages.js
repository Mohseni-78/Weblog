import { useQuery } from "@apollo/client";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import Loader from "../loader/Loader";

import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/query";

const AuthorPages = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

if (loading) return (
    <Grid container m={5}>
      <Loader/>
    </Grid>
  );
  if (error) return <h3>Error ...</h3>;

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: "250px", height: "250px" }}
          />
          <Typography component="h3" variant="h5" fontWeight="700" mt={2}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="p" mt={2} color="text.secondary">
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {HTMLReactParser(data.author.description.html)}
        </Grid>
        <Grid item xs={12}>
          <Typography component="h4" variant="p" mb={3}>
            مقالات {data.author.name}
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {data.author.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  image={post.image.url}
                  height="194"
                  alt={post.slug}
                />
                <CardContent>
                  <Typography
                    component="h3"
                    variant="p"
                    sx={{ fontSize: "13px" }}
                  >
                    {post.title}
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Link
                    to={`/blogs/${post.slug}`}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      borderRadius: 3,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%", borderRadius: 3 }}
                    >
                      مطالعه مقاله
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPages;
