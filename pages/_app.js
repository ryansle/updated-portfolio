import React from "react";

// Utilities
import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import seo from "../seo.config";
import theme from "../theme";
import "../styles/globals.css";

const Portfolio = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Global
      styles={css`
        #__next {
          height: 100%;
        }
      `}
    />
    <DefaultSeo {...seo} />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default Portfolio;
