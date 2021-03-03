import React from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Wrap,
  Box,
  Heading,
  Text,
  Link,
  Icon,
  Tag,
  useMediaQuery,
} from "@chakra-ui/react";
import { 
  ChevronRightIcon as ChevronRight, 
  LinkIcon as Chain, 
} from "@chakra-ui/icons";
import { AiFillGithub as GitHub } from "react-icons/ai"
import AppNavigation from "../../components/Navigation/AppNavigation";

// Content
import projectDetails from "../../content/projects/project-details.json";
import ProjectDetailsContent from "../../content/projects/ProjectDetailsContent";

// Utilities
import { v4 as uuid } from "uuid";

const ProjectPage = (props) => {
  const [phoneScreen] = useMediaQuery("(max-width: 600px)");

  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Box px={[2, null, 0]}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRight color="gray" />}
          fontSize={["md", null, "xl"]}
          mb={[2, null, 5]}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">{props.details.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex justify="space-between" align="center" wrap="wrap">
          <Box width={["100%", null, "60%"]} mb={[5, null, 0]}>
            <Heading size={phoneScreen ? "lg" : "2xl"} mb={2}>
              {props.details.title}
            </Heading>
            {
              props.details.link !== "" && (
                <Text color="#3492D0" fontSize={["xs", "sm", null, "lg"]}>
                  <Chain />:{" "}
                  <Link href={props.details.link}>
                    {props.details.link}
                  </Link> 
                </Text>
              )
            }
            {
              props.details.github !== "" && (
                <Text color="#3492D0" fontSize={["xs", "sm", null, "lg"]}>
                  <Icon as={GitHub} />:{" "} 
                  <Link>
                    {props.details.github}
                  </Link>
                </Text>
              )
            }
          </Box>
          <Wrap 
            width={["100%", null, "40%"]}
            justify={["flex-start", null, "flex-end"]}
          >
            {
              props.details.stack.map((tech) => (
                <Tag
                  key={uuid()}
                  size={phoneScreen ? "sm" : "lg"}
                  colorScheme="teal"
                  borderRadius="full"
                  margin={1}
                >
                  {tech}
                </Tag>
              ))
            }
          </Wrap>
        </Flex>

        <ProjectDetailsContent project={props.details.title} />
      </Box>
    </AppNavigation>
  );
};

ProjectPage.getInitialProps = ({ query }) => {
  return {
    details: projectDetails[query.id],
  };
};

export default ProjectPage;
