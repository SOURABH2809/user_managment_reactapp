import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/authSlice";
import { useFormik } from "formik";
import { YupSchema } from "../schemas/Yup";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth); // Fetch current user data from Redux state

  // Formik configuration for form handling
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        name: currentUser?.name || "",       
        email: currentUser?.email || "",
        password: currentUser?.password || "",
        confirmPassword: "",
      },
      validationSchema: YupSchema,           // Use Yup schema for validation
      onSubmit: (values) => {
        const updatedUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(updateUser(updatedUser));    // Dispatch action to update user data in Redux
      },
    });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  useEffect(() => {
    if (currentUser) {
      setFieldValue("name", currentUser.name);
      setFieldValue("email", currentUser.email);
    }
  }, [currentUser, setFieldValue]);  

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6">USER PROFILE</h2>

        
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">PROFILE DETAILS</h3>
            <button
              onClick={() => setIsEditing(!isEditing)} 
              className="text-white bg-red-700 hover:bg-red-600 p-1 rounded-lg px-2"
            >
              {isEditing ? "CANCEL" : "EDIT"}
            </button>
          </div>

    
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 font-semibold">USERNAME :</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              ) : (
                <p className="mt-1 text-gray-800">{values.name}</p>
              )}
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

          
            <div>
              <label className="text-gray-600 font-semibold">EMAIL ID :</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              ) : (
                <p className="mt-1 text-gray-800">{values.email}</p>
              )}
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            
            <div>
              <label className="text-gray-600 font-semibold">PASSWORD :</label>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              ) : (
                <p className="mt-1 text-gray-800">
                  {"*".repeat(values.password.length)}
                </p>
              )}
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

          
            {isEditing && (
              <div>
                <label className="text-gray-600 font-semibold">
                  CONFIRM PASSWORD:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="Enter Confirm Password"
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}
          </div>

          
          {isEditing && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}  
                className="w-36 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
