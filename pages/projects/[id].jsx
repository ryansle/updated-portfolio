import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../../components/Navigation/AppNavigation";

// Content
import projectDetails from "../../content/project-details.json";

const ProjectPage = (props) => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">{props.details.title}</Heading>
    </AppNavigation>
  );
};

ProjectPage.getInitialProps = ({ query }) => {
  return {
    details: projectDetails[query.id],
  };
};

export default ProjectPage;
