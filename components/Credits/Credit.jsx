// Components
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as Anchor,
  Image,
} from '@chakra-ui/react';
import { LinkIcon as Chain } from '@chakra-ui/icons';

const Credit = ({ person }) => (
  <Box mb={15}>
    <Flex justify='space-between' align='center' wrap='wrap-reverse'>
      <Box width={['100%', null, '60%', '50%']}>
        <Heading size='xl'>{person.name}</Heading>
        <Heading size='md' mb={1}>
          {person.role}
        </Heading>
        <Heading size='sm' mb={1}>
          Works @:
          {' '}
          {person.employment}
        </Heading>
        {
          person.portfolio !== '' && (
            <Box>
              <Text size='xl' color='#3492D0'>
                <Anchor href={`https://${person.portfolio}`}>
                  <Chain />
                  :
                  {' '}
                  {' '}
                  {person.portfolio}
                </Anchor>
              </Text>
            </Box>
          )
        }

        <Text fontSize='xl' mt={5}>{person.description}</Text>
      </Box>
      <Box
        width={['100%', null, '40%', '30%']}
        align='center'
        mb={[5, null, null, 0]}
      >
        <Image
          src={person.image}
          width={200}
          height='auto'
          borderRadius='full'
        />
      </Box>
    </Flex>
  </Box>
);

export default Credit;
