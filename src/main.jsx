import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./component/Login.jsx";
import Home from "./component/Home.jsx";
import DateConveter from "./component/DateConveter.jsx";
import RomanToNepaliUnicode from "./component/RomanToNepaliUnicode.jsx";
import AboutUs from "./component/AboutUs.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Blog from "./component/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/date-conveter", element: <DateConveter /> },
      { path: "/roman-to-nepali", element: <RomanToNepaliUnicode /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
