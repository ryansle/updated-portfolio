import { useState } from 'react';

// Components
import {
  Heading,
  Text,
  Divider,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Stepper from '../components/Playground/Stepper/Stepper';
import StepperContent from '../components/Playground/Stepper/StepperContent';
import DialogDisplay from '../components/Playground/DialogDisplay';

const About = () => {
  const [step, setStep] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Review'];

  return (
    <AppNavigation width='full' maxWidth='1280px' mx='auto'>
      <Heading size='2xl' mb={10}>Playground</Heading>
      <Text fontSize='xl' mb={10}>
        This area of my portfolio just showcases a variety of different advanced components I've
        built over time for extended use throughout other projects. It's basically just a place for
        me to store reusable pieces of code as I see fit.
      </Text>
      <Divider />

      <Heading size='xl' my={10}>
        Stepper
      </Heading>
      <Text fontSize='xl' mb={10}>
        A component to lead a user through a series of steps before reaching a review page.
      </Text>
      <Box p='2em'>
        <Stepper
          steps={steps}
          step={step}
          setStep={setStep}
          selected={step}
        >
          <StepperContent step={step} />
        </Stepper>
      </Box>
      <Divider />

      <Heading size='xl' my={10}>
        DialogDisplay
      </Heading>
      <Text fontSize='xl' mb={10}>
        A component to open up a modal display and allow a user to perform some sort of action
        that does not warrant its own page route.
      </Text>
      <Button colorScheme='teal' onClick={onOpen} mb={10}>
        Open DialogDisplay
      </Button>
      <Divider />

      <DialogDisplay
        isOpen={isOpen}
        onClose={onClose}
        title='Dialog Example'
        size='2xl'
        buttonText='Clickable Action Button'
        buttonAction={onClose}
      >
        <Text fontSize='xl'>
          Put forms in here!
        </Text>
      </DialogDisplay>
    </AppNavigation>
  );
};

export default About;
