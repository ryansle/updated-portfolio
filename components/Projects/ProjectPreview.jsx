import React from "react";

// Components
import { Box, Heading, Text, Button, Tag } from "@chakra-ui/react";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectPreview = ({ title, company = "", description, stack }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding={5}
      mr={5}
      mb={5}
      width="31%"
    >
      <Heading size="md" mb={company === "" ? 5 : 2}>
        {title}
      </Heading>
      {company !== "" && (
        <Heading size="sm" mb={5}>
          {company}
        </Heading>
      )}
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
