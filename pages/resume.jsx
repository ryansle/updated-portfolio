import React from "react";

// Components
import { Heading, Box, Text, Center } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";

const Resume = () => {

  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Condensed Portfolio</Heading>
      <Box mt={10}>
        <Text fontSize="xl" mb={10}>
          Sometimes there's not enough time to read through all of the details.
          In that case, here's a condensed version of my portfolio that is scannable
          through your company's applicant tracking system.
        </Text>

        <Box borderRadius="full" mb={20}>
          <Center>
            <iframe 
              src="./resume.pdf" 
              width="90%"
              height="800px"
              title="My Resume"
              allowFullScreen="" 
              frameBorder="0"
            />
          </Center>
        </Box>
      </Box>
    </AppNavigation>
  );
};

export default Resume;