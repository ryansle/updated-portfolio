import React from "react";

// Utilities
import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import seo from "../seo.config";
import theme from "../theme";
import { RecoilRoot } from "recoil";

const Portfolio = ({ Component, pageProps }) => (
  <RecoilRoot>
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
  </RecoilRoot>
);

export default Portfolio;
