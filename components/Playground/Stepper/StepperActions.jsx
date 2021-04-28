// Components
import { Flex, Box, Button } from '@chakra-ui/react';
import {
  ArrowBackIcon as Back,
  ArrowForwardIcon as Next,
} from '@chakra-ui/icons';

const StepperActions = ({ step, setStep, maxStep }) => {
  // TODO: Lock down next button until fields on current step are complete
  const setBackStep = () => {
    setStep(step - 1);
  };

  const setNextStep = () => {
    setStep(step + 1);
  };

  return (
    <Flex justify='space-between' align='center' mt={10}>
      <Box>
        <Button
          colorScheme='teal'
          leftIcon={<Back />}
          isDisabled={step === 0}
          onClick={setBackStep}
        >
          Go Back
        </Button>
      </Box>
      <Box>
        <Button
          colorScheme='teal'
          rightIcon={<Next />}
          isDisabled={step === maxStep}
          onClick={setNextStep}
        >
          {step === maxStep ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Flex>
  );
};

export default StepperActions;
