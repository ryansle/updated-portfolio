import React from "react";

// Components
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as Anchor,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { LinkIcon as Link } from "@chakra-ui/icons";

const Credit = ({ person }) => {
  const [tabletScreen] = useMediaQuery("(max-width: 1400px)");

  return (
    <Box mb={15}>
      <Flex justify="space-between" align="center" wrap="wrap-reverse">
        <Box width={tabletScren ? "100%" : "50%"}>
          <Heading size="xl">{person.name}</Heading>
          <Heading size="md" mb={1}>
            {person.role}
          </Heading>
          <Heading size="sm" mb={1}>
            Works @: {person.employment}
          </Heading>
          {
            person.portfolio !== "" && (
              <Box>
                <Text size="xl" color="#3492D0">
                  <Anchor href={`https://${person.portfolio}`}>
                    <Link />: {person.portfolio}
                  </Anchor>
                </Text>
              </Box>
            )
          }
          
          <Text fontSize="xl" mt={5}>{person.description}</Text>
        </Box>
        <Box 
          width={tabletScreen ? "100%" : "30%"} 
          align="center"
          mb={tabletScreen ? 5 : 0}
        >
          <Image
            src={person.image}
            width={200}
            height="auto"
            borderRadius="full"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Credit;
