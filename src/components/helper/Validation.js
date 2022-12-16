const Validate = (data) => {
  // console.log(data);
  const Errors = {};
  if (data.name === "") {
    Errors.name = "نام کاربری اجباری است";
  }
  if (data.email === "") {
    Errors.email = "ایمیل اجباری است";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    Errors.email = "ایمیل وارد شده صحیح نیست";
  }
  if (data.text === "") {
    Errors.text = "کامنت اجباری است";
  } 
   if (data.text.length <= 3) {
    Errors.text = "کامنت وارد شده کوتاه است";
  }
  //   console.log(errors);
  return Errors;
};

export { Validate };
