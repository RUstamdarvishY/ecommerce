import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";


const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
