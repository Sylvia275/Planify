import React from "react";
// Import the main page component
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  /*
    This is the root component of your React application.
    Everything your app displays will start from here.

    <ProfilePage /> is the main screen that your app shows.
    You can later switch this to use React Router
    if you want to have multiple pages.
  */
  return <ProfilePage />;
}
