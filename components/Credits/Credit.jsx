import React from "react";

// Components
import {
  Box,
  Wrap,
  Heading,
  Text,
  Link as Anchor,
  Image,
} from "@chakra-ui/react";
import { LinkIcon as Link } from "@chakra-ui/icons";

const Credit = ({ person }) => {
  return (
    <Box mb={15}>
      <Wrap justify="space-between" align="center">
        <Box width="50%">
          <Heading size="xl">{person.name}</Heading>
          <Heading size="md" mb={1}>
            {person.role}
          </Heading>
          <Heading size="sm" mb={1}>
            Works @: {person.employment}
          </Heading>
          <Text size="xl" color="#3492D0" mb={5}>
            <Anchor href={`https://${person.portfolio}`}>
              <Link />: {person.portfolio}
            </Anchor>
          </Text>
          <Text fontSize="xl">{person.description}</Text>
        </Box>
        <Box width="30%">
          <Image
            src={person.image}
            width={200}
            height="auto"
            borderRadius="full"
          />
        </Box>
      </Wrap>
    </Box>
  );
};

export default Credit;
