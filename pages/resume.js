import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";

const Resume = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Condensed Portfolio</Heading>
    </AppNavigation>
  );
};

export default Resume;