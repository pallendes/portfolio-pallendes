import React, {ReactElement} from 'react';

import {Box, Main as GrommetMain} from 'grommet';
import {Footer} from '../components/organisms';
import {About} from './about';
import {Experience} from './experience';
import {Home} from './home';
import {Particle} from '../components/atoms';
import {Skills} from './skills';

export const Main = (): ReactElement => {
  return (
    <>
      <Box background="linear-gradient(0deg, rgba(125, 76, 219, 1) 0%, rgba(61, 19, 141, 1) 99%)">
        <Box id="page" height="100%">
          <GrommetMain>
            <Home />
            <About />
            <Skills />
            <Experience />
          </GrommetMain>
          <Footer />
        </Box>
      </Box>
      <Particle />
    </>
  );
};
