import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/menu";
import { Home } from "./page/home";
import { Calculator } from "./page/formCalculator/Calculator";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/footer";
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
  styles: {
    global: {
      body: {
        color: "black", 
        bg: "white"
        // Remplacez par la couleur de texte par défaut souhaitée
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
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
