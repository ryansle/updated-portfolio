import React, { useState } from "react";

// Components
import {
  Box,
  HStack,
  Text,
  Spacer,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import SocialMedia from "./SocialMedia";
import { AiOutlineClear as Clear } from "react-icons/ai";
import { BiMailSend as Send } from "react-icons/bi";

// Utilities
import { validateEmail } from "../../utils/validate-data";
import emailjs from "emailjs-com";
import { templateId, userId } from "../../secrets";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);

  const toast = useToast();

  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateSubject = (e) => setSubject(e.target.value);
  const updateMessage = (e) => setMessage(e.target.value);

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const validateEmailOnBlur = (e) => {
    const email = e.target.value;

    if (email === "") {
      setValidEmail(true);
    } else {
      if (validateEmail(email)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    }
  };

  const sendEmail = () => {
    setLoadingSend(true);
    setTimeout(() => {
      const params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send("gmail", templateId, params, userId);
      setLoadingSend(false);
      toast({
        title: "Email Sent!",
        description: "Expect an email back from me at ryanle@live.com soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      clearForm();
    }, 1300);
  };

  return (
    <Box mt={10}>
      <HStack justify="space-between" mb={20}>
        <Box width="46%">
          <FormControl id="contact" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Whom am I speaking to?"
              onChange={updateName}
              value={name}
              mb={5}
            />
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="Where should I reply to?"
              onChange={updateEmail}
              onBlur={validateEmailOnBlur}
              isInvalid={!validEmail}
              errorBorderColor="crimson"
              value={email}
              mb={validEmail ? 5 : 0}
            />
            {!validEmail && (
              <FormHelperText mb={5}>Error: Invalid email.</FormHelperText>
            )}
            <FormLabel>Subject</FormLabel>
            <Input
              placeholder="What's the deal?"
              onChange={updateSubject}
              value={subject}
              mb={5}
            />
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Talk about it!"
              size="lg"
              onChange={updateMessage}
              value={message}
              mb={5}
            />
          </FormControl>

          <HStack justify="space-between">
            <Button colorScheme="teal" onClick={clearForm} leftIcon={<Clear />}>
              Clear Form
            </Button>
            <Button
              colorScheme="teal"
              rightIcon={<Send />}
              onClick={sendEmail}
              isLoading={loadingSend}
              loadingText="Sending..."
            >
              Send
            </Button>
          </HStack>
        </Box>
        <Spacer />
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
      <SocialMedia />
    </Box>
  );
};

export default ContactForm;
