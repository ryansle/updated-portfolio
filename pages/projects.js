import React from "react";

// Components
import { Heading, Box, Divider } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";
import ProjectGroup from "../components/Projects/ProjectGroup";

// Utilities
import { v4 as uuid } from "uuid";

// Content
import { projects } from "../content/projects";

const Projects = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Projects</Heading>
      {projects.map((group, index) => (
        <Box>
          <ProjectGroup 
            key={uuid()} 
            title={group.type} 
            description={group.categoryDescription}
            projects={group.projects} 
          />
          {index !== projects.length - 1 && <Divider my={20}/>}
        </Box>
      ))}
    </AppNavigation>
  );
};

export default Projects;