// Components
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  Wrap,
  Heading,
  Image,
  Link,
  Code,
} from '@chakra-ui/react';
import {
  NotAllowedIcon as Bullet,
  CheckCircleIcon as Check,
  SettingsIcon as Gear,
} from '@chakra-ui/icons';

// Content
import { v4 as uuid } from 'uuid';
import { cardholderGallery } from './cardholder-portal-gallery';
import { hoffmanGallery } from './hoffman-gallery';

// Utilities

const ProjectDetailsContent = ({ project }) => {
  // #region Project Detail Content
  const updatedPortfolio = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        If you ever saw my old portfolio, you might remember how... clunky it felt.
        So, once I realized how easy Chakra UI was to work with, and how nice it looked,
        I knew I couldn't try to advertise my skills as a front-end developer while
        sticking with my original portfolio website that I built while still trying to
        figure out how to use React.js.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        There were a number of things wrong with it. For starters, I was literally
        building the website at the time to learn how to use React.js. For a time,
        I had no idea what I was doing. Whatever code I could steal off of StackOverflow
        to make things functional, whether I understood it or not, I did. The codebase
        probably violates the DRY principle of software development more times than you
        can count, and I didn't know how to use functions like
        {' '}
        <Code>arrays.map()</Code>
        , so there were
        all sorts of wonky things inside.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        So I figured the best thing I could do was just start a new and rebuild my portfolio from
        scratch.
      </Text>

      <Flex justify='space-between' align='center' mb={10} flexWrap='wrap-reverse'>
        <Box width={['100%', null, '65%']}>
          <Heading size='lg' mb={2}>Mistakes I made originally</Heading>
          <List spacing={2} fontSize={['md', null, 'xl']}>
            <ListItem>
              <ListIcon as={Bullet} color='red.500' />
              Since I was in the process of learning React.js, I didn't understand the best
              practices.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color='red.500' />
              I completely misunderstood the concept of building components.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color='red.500' />
              I rushed out development to have something ready for the fall recruiting season.
            </ListItem>
            <ListItem>
              <ListIcon as={Bullet} color='red.500' />
              I wasn't aware of JavaScript's functional programming paradigms.
            </ListItem>
          </List>
        </Box>
        <Box width={['100%', null, '30%']}>
          <Image
            src='../projects/legacy.JPG'
            width='full'
            borderRadius={10}
            my={[10, null, 0]}
          />
        </Box>
      </Flex>

      <Heading size='lg' mb={5}>What did I learn building this?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        For starters: better practices within React.js! I've learned how to build
        more function-specific components, and some better ways to handle written content like this.
        It's not perfect yet, but it's a big step forward from my previous implementation. More
        specifically, how to use a new component library, Chakra UI, which I've since fallen in
        love with. I also got to gain some additional practice using Next.js and some of its core
        functions like server-side rendering, routing, and more.
      </Text>
    </Box>
  );

  const legacyPortfolio = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        The original portfolio I made was the first thing I ever built when I started
        learning React.js. As such, the code is messy, disorganized, and inconsistent.
        At best, it's amateur. That being said, from building that original website, I
        learned a TON.
      </Text>

      <Heading size='lg' mb={5}>Motivation</Heading>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        After all, that was the whole reason I even built it in the first place: to
        learn something new while also showcasing my current skillsets to start
        searching for new work opportunities. Up to this point in my college career, I
        hadn't really "focused" on any aspect of software development yet: I had tried
        my hands at developing VR games, general scripting in Python, and done mobile
        development in Swift. But none of that had really piqued my interest. On top
        of that, I had recently lost a planned internship where I was going to learn
        fundamental web development concepts, and just wanted to spend some time over
        the summer learning
        {' '}
        <i>something.</i>
      </Text>

      <Heading size='lg' mb={5}>How did I get started?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        I was lucky enough at the time of getting started to have friends who were more
        than experienced with React.js. Initially, I received a lot of inspiration and help
        building out my personal website from my friends
        {' '}
        <Link href='https://msich.dev/' color='teal.500'>Matt Sichterman</Link>
        {' '}
        and
        {' '}
        <Link href='https://www.peytontanzillo.com' color='teal.500'>Peyton Tanzillo</Link>
        .
        Not only were they able to answer my questions when I would get stuck, but they
        were able to point me to different online resources to aid in my learning of the framework.
        Probably the resource I used the most in getting started was
        {' '}
        <Link href='https://www.freecodecamp.org/' color='teal.500'>freecodecamp.org</Link>
        . They
        provided me the baseline information I needed to understand how to
        {' '}
        <i>use</i>
        {' '}
        React.js,
        just not how to use it correctly and as intended.
      </Text>

      <Heading size='lg' mb={2}>What did I learn?</Heading>
      <List spacing={2} fontSize={['md', null, 'xl']}>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          What a component library was in React.js and how to use one
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          The basic ideas behind React.js, component building, and state
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Bare basics of web development practices and principles
        </ListItem>
      </List>
    </Box>
  );

  const cardholderPortal = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Our team at Nelnet, the Campus Key team, utilizes Material Design patterns on all of
        our web applications. They're not that fun to synthesize on your own - so when I joined,
        I pitched that we move away from using Bootstrap to style our applications and instead
        implement the Material-UI component framework.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        The implementation of the Material-UI framework solved a plethora problems our team
        faced immediately on Day 1. Gone were the days of having to custom build our components
        to match material design standards, and also
        the time spent searching
        {' '}
        <Link href='https://www.npmjs.com' color='teal.500'>npmjs.com</Link>
        {' '}
        for the more
        complicated components that we didn't want to custom build.
      </Text>

      <Heading size='lg' mb={5}>What else did I do?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        My primary role on the Campus Key team is as a Front-End React.js Developer.
        My talented co-worker
        {' '}
        <Link href='https://www.linkedin.com/in/ericschladweiler' color='teal.500'>Eric Schladweiler</Link>
        {' '}
        designs all of our user interfaces, and then it goes to me for implementation.
        I've continued to learn new things within the Material-UI component library, dove
        deeper into React.js, familiarized myself with a few different APIs, and briefly
        worked with Amazon Web Services in my current role with Nelnet.
      </Text>

      <Heading size='lg' mb={5}>So what's the Cardholder Portal?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        The Cardholder Portal is basically an administrative dashboard for our Campus Key
        application that will allow our Campus Key users to do things like requests funds from
        their "sponsors" (parents, mainly, or those that are helping them pay their way through
        college), pay off debts including meal and flex plan balances, and view
        previous transactions tied to their accounts.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        It's one of the first steps in Campus Key's expansion into university markets
        around the country to create a one-stop shop for all of your university needs.
      </Text>

      <Heading size='lg' mb={5}>Gallery</Heading>
      <Wrap justify='space-between'>
        {
          cardholderGallery.map((photo) => (
            <Image
              key={uuid()}
              src={photo.image}
              width={['100%', null, '48%']}
              borderRadius={5}
              mb={8}
            />
          ))
        }
      </Wrap>
    </Box>
  );

  const hoffmanAnalytics = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Hoffman Analytics was an ambitious project that aimed to consolidate
        the groups' daily workflows in date warehousing, project management,
        report generation, and business intelligence.
        {' '}
        <Link href='https://msich.dev' color='teal.500'>Matt Sichterman</Link>
        {' '}
        and I worked to redevelop the existing senior design solution into something
        both more maintainable and more cohesive.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        Through months of collaboration, Matt and I rebuilt the entire platform from
        the ground up using new technologies such as Material-UI and a variety of
        Amazon Web Services while primarily learning on one another (and StackOverflow!)
        when we faced problems.
      </Text>

      <Heading size='lg' mb={5}>What did I learn?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Working with the Hoffman Strategy Group was an excellent way to break into the
        web development domain of software engineering. It also helped that my partner
        Matt had been sharpening his web development skills previously over the last year,
        and was always able to point me in the right direction of growth as a newbie
        web developer. Thanks to my time with the Hoffman Strategy Group, I learned how to:
      </Text>
      <List spacing={2} fontSize={['md', null, 'xl']} mb={10}>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Develop responsive React.js front-ends from the ground up
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Manage diverse client expectations from non-technical stakeholders
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Continue to practice leading the development of large-scale software systems
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Work with modern web development frameworks and technologies like React.js,
          Material-UI, and Amazon Web Services
        </ListItem>
      </List>

      <Heading size='lg' mb={5}>Gallery</Heading>
      {
        hoffmanGallery.map((photo) => (
          <Box key={uuid()} mb={10}>
            <Image src={photo.image} borderRadius={5} mb={3} />
            <Text fontSize={['sm', 'md', 'xl']} color='gray' align='center'>
              {photo.description}
            </Text>
          </Box>
        ))
      }
    </Box>
  );

  const dtcReportGenerator = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Raven Industries was my first real industry experience, following my sophomore
        year of college. It was a summer of firsts as I gained firsthand experience as
        to how the software development industry operated. I joined Raven's Slingshot
        team.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        While working at Raven, I was primarily responsible for
        developing a report generation system that streamlined internal processes in -
        you guessed it - internal report generation. Prior to this project, individuals
        within the company were often tasked with filtering through a 2,000+ entry
        Excel spreadsheet to find pertinent data for upcoming meetings, formatting it
        into a readable report, and then using these handmade reports in their meetings.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        Needless to say, this wasn't a great system. Prior to my start date, the Slingshot
        team took it upon themselves to transfer all of this data into a variety of MySQL
        tables, allowing me to focus my summer on creating the actual report system that
        communicated with this database.
      </Text>

      <Heading size='lg' mb={2}>
        So what did the system do?
      </Heading>
      <List spacing={2} fontSize={['md', null, 'xl']} mb={10}>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Allowed internal teams at Raven to create 600+ page PDF reports in a matter of minutes
        </ListItem>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Created a consistent method of report generation, styling, and branding
        </ListItem>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Filtering of data based on relationships between components
        </ListItem>
      </List>

      <Heading size='lg' mb={5}>Lessons Learned</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Being that this was my first industry experience, I was a bit clueless when I started.
        I leaned heavily on my mentor in getting started, and working through my project. I had to
        quickly realize that this wasn't like the classroom where you could ask as many questions
        as you wanted, whenever you wanted.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Thus, by far the most important lesson I learned over the summer was, in the words of my
        mentor, "learning how to learn on my own." By establishing some guidelines on when I would
        ask for help, and the steps I would take prior, I was forced to do more searching on
        my own, leading me to (thankfully) become a better problem solver.
      </Text>
    </Box>
  );

  const grouve = (
    <Box>
      <Heading size='lg' mb={5}>What is Grouve?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Grouve is an event planning application that empowers event hosts and planners,
        and allows attendees to have a say in the events they plan. Grouve is currently
        {' '}
        under
        {' '}
        <b>active</b>
        {' '}
        development.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        I'm working on Grouve with
        {' '}
        <Link href='https://msich.dev/' color='teal.500'>Matt Sichterman</Link>
        ,
        {' '}
        <Link href='https://www.peytontanzillo.com/' color='teal.500'>Peyton Tanzillo</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/sam-neupane-88a1aa151/' color='teal.500'>Sam Neupane</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/wyatt-chandler-747a6416b/' color='teal.500'>Wyatt Chandler</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/maggie-harder-4057a3166/' color='teal.500'>Maggie Harder</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/joey-ballentine-6459a9194/' color='teal.500'>Joey Ballentine</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/easton-joachimsen/' color='teal.500'>Easton Joachimsen</Link>
        ,
        {' '}
        and
        {' '}
        <Link href='https://www.linkedin.com/in/ethan-d-butt/' color='teal.500'>Ethan Bütt</Link>
        .
        Check out their profiles!
      </Text>

      <Heading size='lg' mb={5}>Why are we building it?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        The 9 of us have been working on projects together all throughout our time
        in university. We've all shared concepts, ideas, even tears throughout studies,
        and always wondered what could become if we ever had the chance to all work together
        towards something. Well, that something is
        {' '}
        <b>Grouve.</b>
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Along with that, part of the curriculum at the University of Nebraska-Lincoln is that,
        as a software engineering major, you complete two full years of senior design before
        you are eligible for graduation. At the end of our first year of senior design, our
        group of students saw plenty of room for improvement within the curriculum.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Senior design works like this: at the start of the year, industry comes in and pitches
        to you, the student, why you should work on their project for a year. After that, students
        are randomly paired to projects within their preference sheet, and voila, a randomized team
        of about 6-10 students has been assigned to an industry sponsor.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        But we had already completed a year of that, and our 9 members had a new idea to pitch:
        what if, instead of working with an industry sponsor, we got to sponsor our
        {' '}
        <b>own</b>
        {' '}
        project and create a brand new software system from the ground up?
      </Text>

      <Heading size='lg' mb={5}>Process</Heading>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        We got the ball rolling for how SOFTie Startup, as we dubbed it, might work towards the
        end of our junior year, as we were all completing our first iteration of senior design.
        Through months of discussion, presentation, and polish, we were able to convince senior
        design faculty to pilot our SOFTie Startup program for the 2020-2021 academic year, with the
        goal in mind of designing a framework for future software engineering students to come.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        In the beginning, we were lucky enough to be able to partner up with Lincoln's very own
        {' '}
        <Link href='https://dontpaniclabs.com/' color='teal.500'>Don't Panic Labs</Link>
        {' '}
        in
        researching our four ideas for the SOFTie Startup and working to
        learn which one was most viable in our ever-changing world. Once we wrapped out the
        business research phase of our project, we were ready to start wireframing up our ideas,
        working on defining our business, and got started on implementation!
      </Text>

      <Heading size='lg' mb={20}>More to come...</Heading>
    </Box>
  );

  const socialMediaMarketing = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        The Social Media Marketing app, also known as Buckle Advocacy, was a year-long
        project through my university's senior design program which pairs computer
        science and software engineering students to industry-backed projects and sponsors.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        Once paired, the course functions similarly to an internship where students work
        on a project throughout the year and deliver weekly status reports to the project
        stakeholders and follow agile methodologies while communicating effectively.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        While enrolled in senior design, I took on a leadership position within my team and
        acted as the Squad Lead and Product Manager for our team. This tasked me with
        defining our product vision, leading our weekly meetings, creating our presentation
        materials, and effectively capitalizing on my teammates' skillsets in order to run
        a successful project.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        I worked on this project alongside
        {' '}
        <Link href='https://www.linkedin.com/in/kaileimao' color='teal.500'>Kailei Mao</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/arreyaahrom' color='teal.500'>Arreya Ahrom</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/olivia-rine' color='teal.500'> Olivia Rine</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/zhaozhong-qi-64403b118' color='teal.500'>Dennis Qi</Link>
        ,
        {' '}
        and
        {' '}
        <Link href='https://www.linkedin.com/in/jake-ediger-373933129' color='teal.500'>Jake Ediger</Link>
        .
      </Text>

      <Flex justify='space-between' align='center' mb={5} flexWrap='wrap-reverse'>
        <Box width={['100%', null, '60%']}>
          <Heading size='lg' mb={5}>
            What problem did the app solve?
          </Heading>
          <Text fontSize={['md', null, 'xl']} mb={5}>
            Buckle needed a way to provide a unified and appropriate social brand that protected
            the brand's image. Because they have so many stores across the US (449 and counting),
            it proved to be impractical to field and service each stores' one-off requests for
            approving social media content.
          </Text>
          <Text fontSize={['md', null, 'xl']} mb={5}>
            In order to solve this, Buckle wanted a mobile application that allowed their
            marketing department to provide approved social media posts for their teammates
            to use nationwide.
          </Text>
          <Text fontSize={['md', null, 'xl']} mb={5}>
            Our team's solution enlisted a content management system, Drupal, to house the
            marketing department's approved content. From there, individual pieces of
            content were assigned start and end dates for the content to run through, and
            valid posts were pulled down to our iOS application using a REST API and showcased
            to a user in a feed visually similar to Instagram.
          </Text>
          <Text fontSize={['md', null, 'xl']} mb={10}>
            Marketing employees around the country could then share these approved social
            media posts and promotions to a variety of different channels, including Facebook,
            Instagram, Twitter, and LinkedIn with ease.
          </Text>
        </Box>

        <Flex justify='flex-end' width={['100%', null, '40%']}>
          <Image src='../projects/buckle.png' height='90%' />
        </Flex>
      </Flex>

      <Heading size='lg' mb={2}>
        Things I learned
      </Heading>
      <List spacing={2} fontSize={['md', null, 'xl']} mb={10}>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          How to lead a team of 5 developers by assigning roles and development tasks
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Process for facilitating weekly commuication between with a project manager
          and an industry sponsor
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Practices for parsing down software requirements into manageable
          chunks of development work
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          Gained additional experience communicating with non-technical stakeholders
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          How to develop iOS applications and the steps it takes to deploy to a live device
        </ListItem>
        <ListItem>
          <ListIcon as={Check} color='green.500' />
          The Swift programming language, along with Apple's new flagship technology, SwiftUI
        </ListItem>
      </List>
    </Box>
  );

  const vrSpaceExplorer = (
    <Box>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        The University of Nebraska-Lincoln, normally, offers a technical elective
        every spring entitled "Exploring Virtual Reality" that pairs computer science
        and software engineering students with emerging arts students to create
        virtual reality games.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={5}>
        The course follows a sandbox format where they basically give you a quick
        introduction to developing games with C#, Unity, and SteamVR, and then they
        set you loose to break into teams and spend the semester developing your
        very own virtual reality experience. Our team decided to spend the semester
        building out a VR Space Exploration game in which you explore alien worlds
        and play a variety of minigames.
      </Text>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        I worked on this project with
        {' '}
        <Link href='https://www.linkedin.com/in/ethan-d-butt' color='teal.500'>Ethan Bütt</Link>
        ,
        {' '}
        <Link href='https://www.linkedin.com/in/conner-hallett-8737a11a2' color='teal.500'>Conner Hallett</Link>
        ,
        and
        {' '}
        <Link href='https://www.linkedin.com/in/megan-whisenhunt-8b9156175' color='teal.500'>Megan Whisenhunt</Link>
        .
      </Text>

      <Heading size='lg' mb={5}>What did I learn?</Heading>
      <Text fontSize={['md', null, 'xl']} mb={10}>
        Through this course I learned the basics of modern game development,
        specifically with regards to virtual reality. It turns out that developing
        virtual reality games is not nearly as complicated as it seems out to be,
        thanks to existing technologies and frameworks such as Unity and SteamVR.
        I also got to work side-by-side with emerging arts students to understand
        the underlying effort that goes into rendering digital assets, and again
        sharpen my skills working in a collaborative environment.
      </Text>

      <Heading size='lg' mb={2}>Game Features</Heading>
      <List spacing={2} fontSize={['md', null, 'xl']} mb={10}>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Rebuild a high-powered telescope using pieces scattered around an observatory
        </ListItem>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Gaze into the night sky with your repaired telescope and search for alien planets
          to visit and overcome
        </ListItem>
        <ListItem>
          <ListIcon as={Gear} color='teal.500' />
          Explore a vast planet where the sun does not shine and search for remnants of
          stardust to light up your world
        </ListItem>
      </List>

      <Flex justify='center'>
        <Image src='../projects/space-explorer.png' borderRadius={10} />
      </Flex>
    </Box>
  );
  // #endregion

  const renderProjectContent = (title) => {
    switch (title) {
    case 'Updated Portfolio':
      return updatedPortfolio;
    case 'Legacy Portfolio':
      return legacyPortfolio;
    case 'Cardholder Portal':
      return cardholderPortal;
    case 'Hoffman Analytics':
      return hoffmanAnalytics;
    case 'DTC Report Generator':
      return dtcReportGenerator;
    case 'Grouve':
      return grouve;
    case 'Social Media Marketing':
      return socialMediaMarketing;
    case 'Virtual Reality Space Explorer':
      return vrSpaceExplorer;
    default:
      return '';
    }
  };

  return (
    <Box mt={10}>
      {renderProjectContent(project)}
    </Box>
  );
};

export default ProjectDetailsContent;
