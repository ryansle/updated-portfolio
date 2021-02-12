import React from "react";

// Components
import { Box, Heading, Text, Button, Tag } from "@chakra-ui/react";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectPreview = ({ title, description, stack }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding={5}
      margin={3}
      width="400px"
    >
      <Heading size="md" mb={5}>
        {title}
      </Heading>
      <Text size="lg" mb={5}>
        {description}
      </Text>

      {stack.map((tech) => (
        <Tag
          key={uuid()}
          size="md"
          colorScheme="teal"
          borderRadius="full"
          margin={1}
        >
          {tech}
        </Tag>
      ))}

      <Button width="full" mt={5}>
        Learn More
      </Button>
    </Box>
  );
};

export default ProjectPreview;
