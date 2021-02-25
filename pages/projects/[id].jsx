import React from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon as ChevronRight } from "@chakra-ui/icons";
import AppNavigation from "../../components/Navigation/AppNavigation";

// Content
import projectDetails from "../../content/projects/project-details.json";
import ProjectDetailsContent from "../../content/projects/project-details-content";

const ProjectPage = (props) => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRight color="gray.500" />}
        fontSize="xl"
        mb={5}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">{props.details.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box>
        <Heading size="2xl" mb={10}>
          {props.details.title}
        </Heading>
        <ProjectDetailsContent project={props.details.title} />
      </Box>
    </AppNavigation>
  );
};

ProjectPage.getInitialProps = ({ query }) => {
  return {
    details: projectDetails[query.id],
  };
};

export default ProjectPage;
