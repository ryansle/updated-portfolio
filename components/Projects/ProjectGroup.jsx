import React from "react";

// Components
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import ProjectPreview from "../Projects/ProjectPreview";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectGroup = ({ title, projects }) => {
  return (
    <Box mt={10}>
      <Heading size="lg" mb={5}>
        {title}
      </Heading>
      <HStack>
        {projects.map((project) => (
          <ProjectPreview
            key={uuid()}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default ProjectGroup;
