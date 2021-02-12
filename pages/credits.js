import React from "react";

// Components
import { Heading, Text } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";

const Credits = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Credits</Heading>
      <Text fontSize="lg">
        I had help building this portfolio. A lot of it, actually, 
        and it couldn't have ended up looking this nice without any
        one of these peoples help, support, or inspiration.
      </Text>
    </AppNavigation>
  );
};

export default Credits;