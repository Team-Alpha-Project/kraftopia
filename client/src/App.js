import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Dashboard from "./pages/User/Dashboard";
import Profile from "./components/Profile";
import Orders from "./pages/User/Orders";
import Wishlist from "./components/Wishlist";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import SingleProduct from "./pages/SingleProduct";
import Blog from "./pages/Blog";

const App = () => {
  const theme = {
    colors: {
      first: "#22c55e",
      firstLight: "#A9FFC9",
      title: "black",
      bodyColor: "#fff",
      black: "#1E1E1E",
      blackLight: "hsl(0, 0%, 40%)",
      white: "hsl(0, 0%, 95%)",
      text: "hsl(0, 0%, 35%)",
      textLight: "hsl(0, 0%, 64%)",
      container: "hsl(0, 0%, 90%)",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "#22c55e",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    font: {
      fontFamily: "'Oswald', sans-serif",
      h1: "1.75rem",
      h2: "1.25rem",
      h3: "1.125rem",
      normal: "0.938rem",
      small: "0.813rem",
      smaller: "0.75rem",
      biggest: "2.5rem",
    },

    fontWeight: {
      Regular: "400",
      Medium: "500",
      SemiBold: "600",
      Bold: "700",
    },

    zIndex: {
      zTooltip: "10",
      zFixed: "100",
    },

    shadow: {
      boxShadow: "0 2rem 2rem 0 rgb(132 144 255 / 30%)",
    },

    media: {
      // mobile: "790px",
      mobile: "390px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/order" element={<Orders />} />
            <Route path="user/wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/users" element={<Users />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          {/* <Route path="/district/:districtName" component={SingleDistrict} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
