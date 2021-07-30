// Components
import { Box } from '@chakra-ui/react';
import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';
import Review from './Pages/Review';

const StepperContent = ({ step }) => (
  <Box>
    {step === 0 && <Step1 />}
    {step === 1 && <Step2 />}
    {step === 2 && <Step3 />}
    {step === 3 && <Review />}
  </Box>
);

export default StepperContent;
