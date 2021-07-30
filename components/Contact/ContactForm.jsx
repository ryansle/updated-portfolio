import { useState } from 'react';

// Components
import {
  Box,
  HStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import { AiOutlineClear as Clear } from 'react-icons/ai';
import { BiMailSend as Send } from 'react-icons/bi';

// Utilities
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/validate-data';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);

  const toast = useToast();
  const { colorMode } = useColorMode();

  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateSubject = (e) => setSubject(e.target.value);
  const updateMessage = (e) => setMessage(e.target.value);

  const clearForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const validateEmailOnBlur = (e) => {
    const targetEmail = e.target.value;

    if (targetEmail === '') {
      setValidEmail(true);
    } else if (validateEmail(targetEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const sendEmail = () => {
    setLoadingSend(true);
    setTimeout(() => {
      const params = {
        name,
        email,
        subject,
        message,
      };

      const templateId = 'template_kc7wVwGF';
      const userId = 'user_VSAtF1KGalm3o5auz1ofo';
      emailjs.send('gmail', templateId, params, userId);
      setLoadingSend(false);
      toast({
        title: 'Email Sent!',
        description: 'Expect an email back from me at ryanle@live.com soon!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      clearForm();
    }, 1300);
  };

  return (
    <Box mt={10}>
      <Box>
        <FormControl id='contact' isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder='Whom am I speaking to?'
            onChange={updateName}
            value={name}
            mb={5}
            backgroundColor={colorMode === 'light' ? 'white' : ''}
          />
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder='Where should I reply to?'
            onChange={updateEmail}
            onBlur={validateEmailOnBlur}
            isInvalid={!validEmail}
            errorBorderColor='crimson'
            value={email}
            mb={validEmail ? 5 : 0}
            backgroundColor={colorMode === 'light' ? 'white' : ''}

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
            backgroundColor={colorMode === 'light' ? 'white' : ''}

          />
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder='Talk about it!'
            size='lg'
            onChange={updateMessage}
            value={message}
            mb={5}
            backgroundColor={colorMode === 'light' ? 'white' : ''}

          />
        </FormControl>

        <HStack justify='space-between'>
          <Button colorScheme='teal' onClick={clearForm} leftIcon={<Clear />}>
            Clear Form
          </Button>
          <Button
            colorScheme='teal'
            isDisabled={
              name === ''
              || email === ''
              || subject === ''
              || message === ''
              || !validEmail
            }
            rightIcon={<Send />}
            onClick={sendEmail}
            isLoading={loadingSend}
            loadingText='Sending...'
          >
            Send
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactForm;
