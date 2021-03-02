import React from "react";

// Components
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  Tag, 
  Link,
  useMediaQuery,
} from "@chakra-ui/react";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectPreview = ({
  id,
  title,
  company = "",
  description,
  stack,
}) => {
  const [tabletScreen] = useMediaQuery("(max-width: 1300px)");
  const [phoneScreen] = useMediaQuery("(max-width: 640px)");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding={5}
      mr={5}
      mb={5}
      width={phoneScreen ? "100%" : (tabletScreen ? "45%" : "31%")}
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

      <Link href={`/projects/${id}`}>
        <Button width="full" mt={5}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
};

export default ProjectPreview;
