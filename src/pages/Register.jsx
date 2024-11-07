import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { YupSchema } from "../schemas/Yup";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Formik setup for managing form state, validation, and submission
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",            
      email: "",           
      password: "",        
      confirmPassword: "", 
    },
    validationSchema: YupSchema, // Schema for form validation
    onSubmit: (values) => {
      // Dispatch the addUser action to add a new user
      dispatch(
        addUser({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      navigate("/sign-in");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          REGISTER NEW USER
        </h2>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm">{errors.name}</p> 
            )}
          </div>

          
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Id"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p> 
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p> 
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p> 
            )}
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 font-semibold text-white py-2 rounded hover:bg-blue-700 transition"
            >
              REGISTER USER
            </button>

            <button
              type="button"
              onClick={() => navigate("/sign-in")}
              className="w-full bg-gray-200 font-semibold text-gray-700 py-2 rounded hover:bg-gray-300 transition"
            >
              LOGIN USER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
