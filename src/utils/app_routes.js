import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../presentation/pages/home/Home.js";
import HomeSection from "../presentation/pages/home/section/HomeSection/HomeSection.js";
import AboutUsSection from "../presentation/pages/home/section/AboutUsSection/AboutUsSection.js";
import MenuSection from "../presentation/pages/home/section/MenuSection/MenuSection.js";
import ContactUsSection from "../presentation/pages/home/section/ContactUsSection/ContactUsSection.js";

export const app_router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: <HomeSection />,
        },
        {
          path: "about-us",
          element: <AboutUsSection />,
        },
        {
          path: "menu",
          element: <MenuSection />,
        },
        {
          path: "contact-us",
          element: <ContactUsSection />,
        },
      ],
    },
  ]);
  