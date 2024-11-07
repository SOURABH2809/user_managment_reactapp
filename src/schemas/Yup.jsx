import * as Yup from "yup";
const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

export const YupSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z'-\s]*$/, "Invalid name")
    .min(2, "Use a valid name")
    .max(20, "Use a valid name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(
      regex,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const SigninSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(
      regex,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
