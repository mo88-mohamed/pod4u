import { Box } from "@chakra-ui/react";
import NavbBar from "../components/NavBar";


const Layout = ({ children }) => {


    return (
        <Box className="main-container">
            <Box className="container">
            <NavbBar></NavbBar>

                {children}
            </Box>
        </Box>
    );
};

export default Layout;