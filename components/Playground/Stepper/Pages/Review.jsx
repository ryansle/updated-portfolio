// Components
import {
  Box, Heading, Center, Text,
} from '@chakra-ui/react';

// Utilities
import { useRecoilValue } from 'recoil';
import { fields as fieldsState } from '../../../../utils/atoms';

const Review = () => {
  const fields = useRecoilValue(fieldsState);

  return (
    <Box>
      <Heading mb={5}>Review</Heading>
      <Center alignItems='flex-start'>
        <Box mr={5}>
          <Text fontSize='xl' fontWeight='bold'>Email Address:</Text>
          <Text fontSize='xl' fontWeight='bold'>Name:</Text>
          <Text fontSize='xl' fontWeight='bold'>Phone Number:</Text>
          <Text fontSize='xl' fontWeight='bold'>Favorite Color:</Text>
          <Text fontSize='xl' fontWeight='bold'>Why?:</Text>
          <Text fontSize='xl' fontWeight='bold'>Pin:</Text>
        </Box>
        <Box ml={5}>
          <Text fontSize='xl'>{fields.email}</Text>
          <Text fontSize='xl'>{fields.name}</Text>
          <Text fontSize='xl'>{fields.phoneNumber}</Text>
          <Text fontSize='xl'>{fields.favoriteColor}</Text>
          <Text fontSize='xl'>{fields.whyFavorite}</Text>
          <Text fontSize='xl'>{fields.pin}</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Review;
