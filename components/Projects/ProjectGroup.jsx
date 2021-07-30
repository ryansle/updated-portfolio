// Components
import {
  Box, Heading, Wrap, Text,
} from '@chakra-ui/react';
import ProjectPreview from './ProjectPreview';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

const ProjectGroup = ({ title, description, projects }) => (
  <Box mt={10}>
    <Heading size='lg' mb={3}>
      {title}
    </Heading>
    <Text fontSize='lg' mb={10}>
      {description}
    </Text>
    <Wrap align='flex-start' spacing={2}>
      {projects.map((project) => (
        <ProjectPreview
          key={uuid()}
          id={project.id}
          title={project.title}
          company={project.company}
          description={project.description}
          stack={project.stack}
          pageContents={project.modal}
        />
      ))}
    </Wrap>
  </Box>
);

export default ProjectGroup;
