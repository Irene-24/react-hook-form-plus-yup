import * as yup from "yup";

const userSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    age: yup
      .number()
      .typeError("Must be a number")
      .required("Please enter a valid age")
      .integer("Age must be a whole number")
      .moreThan(0, "Age must be greater than 0"),
    location: yup.string().required("Location is required"),
    mode: yup.string().required("Work mode is required"),
    frameworks: yup
      .array()
      .min(1, "Please selectat least pne item")
      .of(yup.string()),
  })
  .required();

const userInit = {
  name: "",
  email: "",
  age: "",
  location: "",
  mode: "",
  frameworks: [],
};

export { userInit, userSchema };
