import { useMutation } from "@apollo/client";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { POST_COMMENT } from "../../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Validate } from "../helper/Validation";
import { theme } from "../../mui/theme";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [Error, setError] = useState([]);
  const [touch, setTouch] = useState({
    name: false,
    email: false,
    text: false,
  });
  const [postComment, { loading, error, data }] = useMutation(POST_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  useEffect(() => {
    setError(
      Validate({
        name,
        email,
        text,
      })
    );
  }, [name, email, text]);

  const clickHandler = () => {
    if (Object.keys(Error).length === 0) {
      postComment();
      setName("");
      setEmail("");
      setText("");
      toast.success("با موفقیت ارسال شد برای تایید از سمت ادمین", {
        position: "top-center",
      });
      setTouch({ name: false, email: false, text: false });
    } else {
      toast.warn("فیلد ها نمیتواند خالی باشد", {
        position: "top-center",
      });
      setTouch({ name: true, email: true, text: true });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography
            component="p"
            variant="h6"
            color="primary"
            fontWeight="700"
          >
            فرم ارسال کامنت
          </Typography>
        </Grid>

        <Grid item xs={12} m={2}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setTouch({ ...touch, name: true })}
          />

          <Typography color="error" mt={1.5}>
            {Error.name && touch.name && Error.name}
          </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setTouch({ ...touch, email: true })}
          />
          <Typography color="error" mt={1.5}>
            {Error.email && touch.email && Error.email}
          </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="کامنت"
            variant="outlined"
            sx={{ width: "100%" }}
            multiline
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setTouch({ ...touch, text: true })}
          />
          <Typography color="error" mt={1.5}>
            {Error.text && touch.text && Error.text}
          </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
          {loading ? (
            <Button variant="contained" disabled>
              در حال ارسال ...
            </Button>
          ) : (
            <Button variant="contained" onClick={clickHandler}>
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Grid>
    </ThemeProvider>
  );
};

export default CommentForm;
