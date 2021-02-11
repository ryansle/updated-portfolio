import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";

const About = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">About Me</Heading>
    </AppNavigation>
  );
};

export default About;