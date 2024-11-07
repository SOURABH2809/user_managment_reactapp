import { createSlice } from "@reduxjs/toolkit";

// Authentication slice with initial state and reducers
const authSlice = createSlice({
  name: "auth", 
  initialState: {
    users: [],          
    currentUser: null,  
    error: null,        
  },
  reducers: {
    
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

   
    login: (state, action) => {
      // Find the user with matching email and password in the users array
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        // If a matching user is found, set them as the current user and reset error
        state.currentUser = user;
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.currentUser = null; 
      state.error = null;       
    },

    updateUser: (state, action) => {
      if (state.currentUser) {
        // Update current user information with the new data from the action payload
        state.currentUser = { ...state.currentUser, ...action.payload };
        
        // Find the index of the current user in the users array
        const userIndex = state.users.findIndex(
          (u) => u.email === state.currentUser.email
        );
        
        // If the user exists in the array, update their information
        if (userIndex !== -1) state.users[userIndex] = state.currentUser;
      }
    },
  },
});

export const { addUser, login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
