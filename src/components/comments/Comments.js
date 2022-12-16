import { useQuery } from "@apollo/client";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import React from "react";
import { GET_COMMENT } from "../../graphql/query";
import Loader from "../loader/Loader";

const Comments = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_COMMENT, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader/>;
  if (error) return <h3>Error ...</h3>;

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        m={2}
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px", borderRadius: 4 }}
      >
        <Typography component="div" variant="p" m={4} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            m={2}
            key={comment.id}
            sx={{ border: "1px solid silver", padding: 2, borderRadius: 3 }}
          >
            <Box
              component="div"
              mb={2}
              display="flex"
              sx={{ alignItems: "center" }}
            >
              <Avatar sx={{ marginRight: 1 }} />
              <Typography component="p" variant="p">
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
