// Components
import { Heading, Divider, Box } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import WorkExperience from '../components/Experience/WorkExperience';

// Content
import { experienceContent } from '../content/experience';

// Utilities
import { v4 as uuid } from 'uuid'; // eslint-disable-line

const Experience = () => (
  <AppNavigation width='full' maxWidth='1280px' mx='auto'>
    <Heading size='2xl'>Work Experience</Heading>
    {experienceContent.map((experience, index) => (
      <Box key={uuid()}>
        <WorkExperience
          company={experience.company}
          role={experience.role}
          dateRange={experience.dateRange}
          description={experience.description}
          subtitle={experience.subtitle}
          bullets={experience.bullets}
          stack={experience.stack}
          imagePath={experience.imagePath}
        />

        {index !== experienceContent.length - 1 ? (
          <Divider height={10} key={uuid()} />
        ) : (
          <Box mb='100px' key={uuid()} />
        )}
      </Box>
    ))}
  </AppNavigation>
);

export default Experience;
