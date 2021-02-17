import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../../components/Navigation/AppNavigation";

// Utilities
import { useRouter } from "next/router";


const ProjectPage = ({ contents }) => {
  const router = useRouter();

  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">{contents.title}</Heading>
    </AppNavigation>
  );
};

export default ProjectPage;