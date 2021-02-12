import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Let's Talk!</Heading>
      <ContactForm />
    </AppNavigation>
  );
};

export default Contact;