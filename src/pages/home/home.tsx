/* eslint-disable react/prop-types */
import React, {ReactElement, useContext} from 'react';

import Typewriter from 'typewriter-effect';
import {Box, BoxProps, Button, ResponsiveContext, Text} from 'grommet';
import {Down} from 'grommet-icons';

import {AppBar, Footer} from '../../components/organisms';
import {Particle} from '../../components/atoms';
import {About} from '../about';
import {Skills} from '../skills';
import {Experience} from '../experience';
import {setForDevice} from '../../common/utils';

export const Home = (): ReactElement => {
  const size = useContext<string>(ResponsiveContext);

  return (
    <Box>
      <Box>
        <Box
          background="linear-gradient(0deg, rgba(125,76,219,1) 0%, rgba(61,19,141,1) 99%)"
          height="100vh"
        >
          <AppBar />
          <Particle />
          <Box
            width={{width: '100%', max: '1140px'}}
            align="center"
            justify="between"
            margin="auto"
            height="100%"
            id="home"
          >
            <Box
              direction={size === 'large' ? 'row' : 'column'}
              width="100%"
              height={size === 'large' ? '90%' : 'auto'}
              pad={setForDevice<string>(['large', 'unset'], size)}
            >
              <Box
                justify="center"
                align={setForDevice<BoxProps['align']>(['center', 'start'], size)}
                width={setForDevice<string>(['100%', '60%'], size)}
                margin={setForDevice<Record<string, string>>(
                  [{bottom: 'xlarge'}, {bottom: 'unset'}],
                  size,
                )}
              >
                <Box pad={{bottom: 'small'}}>
                  <Text
                    color="accent-3"
                    size={setForDevice<string>(['1.8em', '2.8em'], size)}
                    weight="bold"
                    margin={setForDevice<Record<string, string>>(
                      [{bottom: 'medium'}, {bottom: 'small'}],
                      size,
                    )}
                  >
                    Hello world!
                  </Text>
                </Box>
                <Text
                  color="accent-3"
                  size={setForDevice<string>(['2.4em', '3.2em'], size)}
                  weight="bold"
                >
                  I&apos;M PABLO ALLENDES
                </Text>
                <Box pad={{top: 'medium'}}>
                  <Text
                    color="accent-2"
                    size={setForDevice<string>(['1.8em', '2.8em'], size)}
                    weight="bold"
                  >
                    <Typewriter
                      onInit={() => null}
                      options={{
                        strings: [
                          'Front-end Engineer',
                          'NodeJS developer',
                          'React developer',
                          'Deep Learning enthusiast',
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </Text>
                </Box>
              </Box>
              <Box
                height="100%"
                width={setForDevice<string>(['100%', '40%'], size)}
                justify="center"
              >
                <Box
                  background="url(/home-main.svg)"
                  height="560px"
                  width="560px"
                  alignSelf="center"
                ></Box>
              </Box>
            </Box>
            <Box width="100%" pad="medium" height="10%">
              <Box align="center">
                <Button icon={<Down />} primary size="small" style={{zIndex: 2}} />
              </Box>
            </Box>
          </Box>
        </Box>
        <About />
        <Skills />
        <Experience />
      </Box>
      <Footer />
    </Box>
  );
};
