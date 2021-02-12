import React from "react";

// Components
import { Heading } from "@chakra-ui/react";
import AppNavigation from "../components/Navigation/AppNavigation";

// import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <AppNavigation width="full" maxWidth="1280px" mx="auto">
      <Heading size="2xl">Ryan Le</Heading>
      <Heading size="lg" mt="10px">Software Engineer. Front-End Web Developer.</Heading>
    </AppNavigation>
  );
};

export default Home;