import React from "react";

// Components
import { Heading, Divider, Box } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";
import WorkExperience from "../components/Experience/WorkExperience";

// Content
import { experienceContent } from "../content/experience";

const Experience = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Work Experience</Heading>
      {
        experienceContent.map((experience, index) => (
          <>
            <WorkExperience
              company={experience.company}
              role={experience.role}
              dateRange={experience.dateRange}
              description={experience.description}
              bullets={experience.bullets}
              tech={experience.tech}
              imagePath={experience.imagePath}
            />
            
            {index !== experienceContent.length - 1 ? (
              <Divider height={10}/>
            ) : (
              <Box mb="100px"/>
            )}
          </>
        ))
      }
    </AppNavigation>
  );
};

export default Experience;