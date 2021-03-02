import React from "react";

// Components
import { 
  Box, 
  useColorMode, 
  useMediaQuery 
} from "@chakra-ui/react";
import SideNav from "./SideNav";
import Header from "./Header";

const AppNavigation = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();
  const [phoneScreen] = useMediaQuery("(max-width: 1300px)");

  return (
    <>
      <Header />
      <Box>
        <SideNav
          display={["none", null, "block"]}
          maxWidth="18rem"
          width="full"
        />
        <Box pl={[0, null, "18rem"]} marginTop="4rem">
          <Box
            as="section"
            backgroundColor={colorMode === "light" ? "gray.100" : "gray.900"}
            minHeight="calc(100vh - 4rem)"
          >
            <Box 
              py="2em"
              px={phoneScreen ? "10%" : "2%"} 
              {...rest}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppNavigation;
