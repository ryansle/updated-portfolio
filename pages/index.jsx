import React from 'react';

// Components
import { 
  Heading, 
  Box, 
  Image, 
  Text, 
  Wrap,
  SlideFade
} from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import NavCard from '../components/Home/NavCard';
import Head from 'next/head';

// Utilities
import { nav } from '../content/navigation-cards';
import { v4 as uuid } from 'uuid';

const Home = () => {
  return (
    <AppNavigation width='full' maxWidth='1280px' mx='auto'>
      <Head>
        <title>Ryan Le's Personal Portfolio</title>
        <meta
          name='description'
          content='Looking to fill a role on your software development team? Look no further - learn why you consider hiring me, Ryan Le.'
        />
        <meta property='og:image' content='./preview.jpeg' />
      </Head>

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
      >
        <Box position='relative'>
          <Image src='./banner.png' borderRadius={20} mb={10} boxShadow='lg' />
          <Heading size='2xl'>Ryan Le</Heading>
          <Heading size='lg' mt='10px'>Software Engineer. Front-End Web Developer.</Heading>
        </Box>
      </SlideFade>
      <Box mt={10}>
        <Text fontSize='xl'>
          I rebuilt this online portfolio using the Chakra UI component library and React.js after spending
          nearly a year in industry sharpening my front-end development skills. I've learned a lot over 
          the last year, and I wanted my new portfolio to reflect that. Check out the links below to learn more about 
          what makes me a great addition to your development team.
        </Text>

        <Wrap pt={10} justify='center' mb={20}>
          {nav.map((card) => (
            <NavCard 
              key={uuid()}
              image={card.image} 
              icon={card.icon} 
              title={card.title}  
              description={card.description}
              link={card.link}
              linkText={card.linkText}
            />
          ))}
        </Wrap>
      </Box>
    </AppNavigation>
  );
};

export default Home;