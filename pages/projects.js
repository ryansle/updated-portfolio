import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
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
      {projects.map((group) => (
        <ProjectGroup 
          key={uuid()} 
          title={group.type} 
          projects={group.projects} 
        />
      ))}
    </AppNavigation>
  );
};

export default Projects;