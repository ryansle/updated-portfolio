// Utilities
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import seo from '../seo.config';
import theme from '../theme';

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
