// Components
import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
  Tag,
  Text,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { MdSettings as Gear } from 'react-icons/md';

// Utilities
import { v4 as uuid } from 'uuid';

const WorkExperience = ({
  company,
  role,
  dateRange,
  description,
  subtitle,
  bullets,
  stack,
  imagePath,
}) => (
  <Box width='full' mt={10}>
    <Heading size='xl'>{company}</Heading>
    <Text fontSize='xl' color='gray.500'>
      {role}
    </Text>
    <Text fontSize='lg' color='gray.500' mb={5}>
      {dateRange}
    </Text>

    <Flex justify='space-between' align='center' flexWrap='wrap-reverse'>
      <Box width={['100%', null, '55%']}>
        <Text fontSize='md' mb={6}>
          {description}
        </Text>

        <Heading size='md' mb={2}>
          {subtitle}
        </Heading>
        <List spacing={3} mb={5}>
          {bullets?.map((bullet) => (
            <ListItem key={uuid()}>
              <ListIcon as={Gear} color='teal.500' />
              {bullet}
            </ListItem>
          ))}
        </List>

        <HStack justify='space-between' alignItems='flex-end'>
          <Box width='100%'>
            {stack?.map((tech) => (
              <Tag
                key={uuid()}
                size='lg'
                colorScheme='teal'
                borderRadius='full'
                margin={1}
              >
                {tech}
              </Tag>
            ))}
          </Box>
        </HStack>
      </Box>
      <Box width={['100%', null, '40%']} align='center'>
        <Image
          src={imagePath}
          width={['70%', null, '100%']}
          mt={[4, null, 0]}
          mb={[6, null, 0]}
        />
      </Box>
    </Flex>
  </Box>
);

export default WorkExperience;
