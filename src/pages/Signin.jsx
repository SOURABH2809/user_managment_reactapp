import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice"; 
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SigninSchema } from "../schemas/Yup"; 

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, loading, error } = useSelector((state) => state.auth); // Access auth state from Redux

  // Formik setup for managing form state, validation, and submission
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",        
      password: "",     
    },
    validationSchema: SigninSchema, // Schema for validating inputs
    onSubmit: (values) => {
      // Dispatch login action on form submit
      dispatch(login(values)); 
    },
  });

  // Navigate to user profile if login is successful
  React.useEffect(() => {
    if (currentUser) {
      navigate("/user-profile"); 
    }
  }, [currentUser, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          SIGN IN
        </h2>

  
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p> 
            )}
          </div>

          
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p> // Display password error if validation fails
            )}
          </div>

          
          <div className="flex justify-between mt-6 space-x-4">
            
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {loading ? "Logging in..." : "SIGN IN"} 
            </button>

            
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="w-1/2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              REGISTER USER
            </button>
          </div>

          
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">
              {error === "Invalid credentials"
                ? "Invalid email or password"
                : error} 
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
