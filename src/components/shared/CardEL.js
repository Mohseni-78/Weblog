import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import moment from "jalali-moment"

const CardEL = (props) => {
  return (
    <Card
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px", borderRadius: "10px" }}
    >
      <CardHeader
        sx={{ color: "text.secondary" }}
        avatar={
          <Avatar src={props.author.avatar.url} sx={{ marginLeft: "5px" }} />
        }
        title={props.author.name}
        subheader={moment(props.publishedAt).locale('fa').format('YYYY/MM/DD')}
      />
      <CardMedia
        component="img"
        image={props.image.url}
        height="194"
        alt={props.slug}
      />
      <CardContent>
        <Typography component="h3" variant="p" sx={{ fontSize: "13px" }}>
          {props.title}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Link to={`/blogs/${props.slug}`} style={{textDecoration : "none",width: "100%", borderRadius: 3}}>
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
  );
};

export default CardEL;
