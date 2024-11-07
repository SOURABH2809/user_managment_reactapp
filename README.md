# USER ACCOUNT MANAGEMENT APP
<br>

### Live Link :- https://user-managment-react-app.netlify.app/

## Project Overview :-
This project is a React Application (V16+) that allows users to create and manage accounts. The application includes a login page, a registration page, and a page where users can view and edit their account information.The application emphasizes responsive design, robust form validation, and persistent state management to ensure a smooth and secure user experience.

## 🧐Features :-
- **User Registration:** Allows new users to create an account.
- **User Login:** Enables existing users to log into their accounts.
- **Account Management:** Users can view and edit account information in the User Profile page.
- **Responsive Design:** Optimized for mobile and desktop users.
- **Form Validation:** Ensures data integrity with Formik for form handling.
- **Error Handling:** Provides robust validation feedback using Yup for better user experience.

## Pages Overview :-
1. **Login Page:**
- Allows users to log in using their email and password.
- Redirects users to the User Profile page upon successful login.
- Displays appropriate error messages for invalid login credentials.
  
2. **Registration Page**
- Users can create an account by entering an username, email and password.
- Includes form validation for secure registration.
- Data Persistence - Saves account details to localStorage through Redux actions.
  

3. **User Profile**
- Allows authenticated users to view and update their account information.
- Allows users to update details, which are stored in localStorage using Redux Persist for 
     persistence.
- Includes a “Logout” button in the top-right corner to log out the user and redirect to the 
     Login Page.
- Ensures updated details are available across sessions using persistence.

## Tech Stack :-
- **Frontend Framework:** React (V16+)
- **Styling:** Tailwind CSS for a sleek, responsive design
- **State Management:** Redux Toolkit for efficient state handling
- **Data Persistence:** Redux Persist to ensure data retention across sessions
- **Form Handling:** Formik with Yup for form validation and error handling
- **Routing:** React Router for smooth navigation between pages

## 🚀Getting Started :-
To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>

2. **Install the dependencies**:
   ```bash
   npm install

3. **Start the development server**:
   ```bash
    npm start

4. **Open the application**:
    ```bash
    The application will open in your default browser at `http://localhost:5173`.

## Folder Structure :-
The project is structured as follows:

- **public/:** HTML template and static assets.
- **src/components/:** Reusable components like Header.js, Footer.js.
- **pages/:** Pages of the app, including Signin.jsx, Register.jsx, UserProfile.js.
- **app/:** Redux store configuration, includes store.jsx.
- **features/:** Feature-specific Redux slices, like authSlice.jsx.
- **schemas/:** Validation schemas using Yup, e.g., yup.jsx.
- **App.jsx:** Root component managing layout and routing.
- **Main.jsx:** Entry point rendering the app, includes global providers.
- **index.css:** Global styles, including Tailwind CSS setup.

<hr>
<p align="center">
Developed with ❤️ by Sourabh Gautam
</p>
