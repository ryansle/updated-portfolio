import React from "react";

// Components
import { Heading, HStack, Box, Text, } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";
import ContactForm from "../components/Contact/ContactForm";
import SocialMedia from "../components/SocialMedia";

// Content
import { socials } from "../content/social-media";

// Utilities
import { v4 as uuid } from "uuid";

const Contact = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Let's Talk!</Heading>
      <HStack justify="space-between" mb={20}>
        <ContactForm />
        <Box width="46%">
          <Text fontSize="xl" mb={5}>
            Liking what you see on my website? Need a dedicated new team member
            to collaborate with, or have a million dollar idea to discuss? Shoot
            me a message and let's get in touch about it!
          </Text>
          <Text fontSize="xl" mb={5}>
            I'm always available for interesting new work, whether you're in the
            build phases of your current project or just need a hand getting
            started.
          </Text>
        </Box>
      </HStack>

      <Heading size="lg" mb={5}>Connect with me on Social Media</Heading>
      <HStack spacing={6}>
        {socials.map((account) => <SocialMedia key={uuid()} channel={account} />)}
      </HStack>
    </AppNavigation>
  );
};

export default Contact;