// Components
import { Box, Center, Flex } from '@chakra-ui/react';
import Step from './Step';
import StepperProgress from './StepperProgress';
import StepperActions from './StepperActions';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

// TODO: Lock down stepper navigation to previously visited, current, and immediate next step
const Stepper = ({
  steps = [], step, setStep, selected, children,
}) => (
  <Box>
    <Center mb={10}>
      <Flex align='center'>
        {steps.map((label, index) => (
          <Flex key={uuid()} align='center'>
            <Step
              label={label}
              index={index}
              setStep={setStep}
              selected={selected}
            />
            <StepperProgress
              index={index === steps.length - 1 ? '' : index}
              selected={selected}
            />
          </Flex>
        ))}
      </Flex>
    </Center>

    {children}

    <StepperActions
      step={step}
      setStep={setStep}
      maxStep={steps.length - 1}
    />
  </Box>
);
export default Stepper;
