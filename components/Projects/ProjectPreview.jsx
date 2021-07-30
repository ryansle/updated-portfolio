// Components
import {
  Box,
  Heading,
  Text,
  Button,
  Tag,
  Link,
  useColorMode,
} from '@chakra-ui/react';

// Utilities
import { v4 as uuid } from 'uuid';

const ProjectPreview = ({
  id,
  title,
  company = '',
  description,
  stack,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      padding={5}
      mr={[0, null, null, 5]}
      mb={5}
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.800'}
      width={['100%', null, '45%', '31%']}
    >
      <Heading size='md' mb={company === '' ? 5 : 2}>
        {title}
      </Heading>
      {company !== '' && (
        <Heading size='sm' mb={5}>
          {company}
        </Heading>
      )}
      <Text size='lg' mb={5}>
        {description}
      </Text>

      {stack.map((tech) => (
        <Tag
          key={uuid()}
          size='md'
          colorScheme='teal'
          borderRadius='full'
          margin={1}
        >
          {tech}
        </Tag>
      ))}

      <Link href={`/projects/${id}`}>
        <Button width='full' mt={5}>
          Learn More
        </Button>
      </Link>
    </Box>
  );
};

export default ProjectPreview;
