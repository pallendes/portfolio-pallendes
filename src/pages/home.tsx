/* eslint-disable react/prop-types */
import React, {ReactElement, useContext} from 'react';

import Typewriter from 'typewriter-effect';
import {Box, BoxProps, Button, ResponsiveContext, Text} from 'grommet';
import {Down} from 'grommet-icons';

import {AppBar} from '../components/organisms';
import {setForDevice} from '../common/utils';

export const Home = (): ReactElement => {
  const size = useContext<string>(ResponsiveContext);

  return (
    <Box height="100vh">
      <AppBar />
      <Box
        width={{width: '100%', max: '1140px'}}
        align="center"
        justify="between"
        margin="auto"
        height="100%"
        id="home"
      >
        <Box
          direction={setForDevice<BoxProps['direction']>(['column', 'column', 'row'], size)}
          width="100%"
          justify="around"
          height={setForDevice<string>(['100%', '100%', '90%'], size)}
          pad={setForDevice<string>(['large', 'large', 'unset'], size)}
        >
          <Box
            justify="center"
            align={setForDevice<BoxProps['align']>(['center', 'center', 'start'], size)}
            width={setForDevice<string>(['100%', '100%', '60%'], size)}
            style={{minHeight: 'auto', zIndex: 1}}
            margin={setForDevice<Record<string, string>>(
              [{bottom: 'medium'}, {bottom: 'medium'}, {bottom: 'unset'}],
              size,
            )}
          >
            <Box
              margin={setForDevice<Record<string, string>>(
                [{bottom: 'medium'}, {bottom: 'medium'}, {bottom: 'small'}],
                size,
              )}
            >
              <Text
                color="accent-3"
                size={setForDevice<string>(['1.8em', '2.8em'], size)}
                weight="bold"
                as="h1"
              >
                Hello world!
              </Text>
            </Box>
            <Box
              margin={setForDevice<Record<string, string>>(
                [{bottom: 'medium'}, {bottom: 'medium'}, {bottom: 'small'}],
                size,
              )}
            >
              <Text
                color="accent-3"
                textAlign="center"
                size={setForDevice<string>(['2.4em', '3.2em'], size)}
                weight="bold"
                as="h1"
                margin="none"
              >
                {size === 'large' ? (
                  <span>I&apos;M PABLO ALLENDES</span>
                ) : (
                  <span>
                    I&apos;M
                    <br /> PABLO ALLENDES
                  </span>
                )}
              </Text>
            </Box>
            <Box>
              <Text
                color="accent-2"
                size={setForDevice<string>(['1.8em', '2.8em'], size)}
                weight="bold"
                textAlign="center"
                as="h2"
                margin="none"
              >
                <Typewriter
                  onInit={() => null}
                  options={{
                    strings: ['Front-end Engineer', 'NodeJS developer', 'React developer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </Text>
            </Box>
          </Box>
          <Box
            width={setForDevice<string>(['100%', '100%', '40%'], size)}
            justify="center"
            align="center"
          >
            <img
              alt=""
              style={{zIndex: 1}}
              src="/home-main.svg"
              width={setForDevice<string>(['240px', '380px', '560px'], size)}
            />
          </Box>
        </Box>
        <Box width="100%" pad={setForDevice<string>(['unset', 'medium'], size)} height="10%">
          <Box align="center">
            <Button icon={<Down />} href="#about" primary size="small" style={{zIndex: 2}} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
