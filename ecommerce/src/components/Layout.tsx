import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import '../main.css'


const Layout = () => {
  return (
    <>
      <NavBar />
      <Box marginY={10}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
