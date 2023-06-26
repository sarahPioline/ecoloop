import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./componants/menu";
import { Home } from "./page/home";
import { Calculator } from "./page/calculator";
import { Box, extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./componants/footer";
import { Blog } from "./page/blog";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news/:id?",
    element: <Blog />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

const theme = extendTheme({
  colors: {
    brand: {
      100: "#00CC81",
      200: "#71DFB7",
      300: "#AAECD4",
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Menu />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
