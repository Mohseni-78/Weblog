import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import parse from "html-react-parser";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/query";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";
import Loader from "../loader/Loader";


const BlogPages = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return (
    <Grid container m={5}>
      <Loader/>
    </Grid>
  );
  if (error) return <h3>Error ...</h3>;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="h1"
              variant="h4"
              fontWeight="500"
              color="primary"
              my={5}
            >
              {data.post.title}
            </Typography>
            <ArrowBackRoundedIcon
              onClick={() => navigate(-1)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <img
            alt={data.post.slug}
            width="100%"
            src={data.post.image.url}
            style={{ borderRadius: "24px" }}
          />
        </Grid>
        <Grid
          item
          mt={4}
          xs={12}
          sx={{
            display: "flex",
            alignItem: "center",
          }}
        >
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "60px", height: "60px" }}
          />
          <Box component="div" ml={1}>
            <Typography component="h4" variant="h6">
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="p">
          {parse(data.post.content.html)}
          </Typography>
        </Grid>
      </Grid>
      <CommentForm slug={slug} />
      <Comments slug={slug} />
    </Container>
  );
};

export default BlogPages;
