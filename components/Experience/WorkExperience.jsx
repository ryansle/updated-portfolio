import React from "react";

// Components
import {
  Box,
  Button,
  Image,
  List,
  ListItem,
  ListIcon,
  Tag,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { MdSettings as Gear } from "react-icons/md";

// Utilities
import { v4 as uuid } from "uuid";

const WorkExperience = ({
  company,
  role,
  dateRange,
  description,
  subtitle,
  bullets,
  tech,
  imagePath,
}) => {
  return (
    <Box width="full" mt={10}>
      <Heading size="xl">{company}</Heading>
      <Text fontSize="xl" color="gray.500">
        {role}
      </Text>
      <Text fontSize="lg" color="gray.500" mb={5}>
        {dateRange}
      </Text>

      <HStack justify="space-between" align="center">
        <Box width="55%">
          <Text fontSize="md" mb={6}>
            {description}
          </Text>

          <Heading size="md" mb={2}>
            {subtitle}
          </Heading>
          <List spacing={3} mb={5}>
            {bullets.map((bullet) => (
              <ListItem key={uuid()}>
                <ListIcon as={Gear} color="teal.500" />
                {bullet}
              </ListItem>
            ))}
          </List>

          <HStack justify="space-between" alignItems="flex-end">
            <Box width="80%">
              {tech.map((service) => (
                <Tag
                  key={uuid()}
                  size="lg"
                  colorScheme="teal"
                  borderRadius="full"
                  margin={1}
                >
                  {service}
                </Tag>
              ))}
            </Box>
            <Box width="20%">
              <Button colorScheme="teal">Learn More</Button>
            </Box>
          </HStack>
        </Box>
        <Box width="40%">
          <Image src={imagePath} width="100%" />
        </Box>
        ``
      </HStack>
    </Box>
  );
};

export default WorkExperience;
