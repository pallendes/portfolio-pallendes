import React, {ReactElement, useContext} from 'react';

import {Box, BoxProps, Button, Heading, ResponsiveContext, Text} from 'grommet';
import {Github, Instagram, Linkedin} from 'grommet-icons';
import {PhotoImage} from '../components/organisms';
import {setForDevice} from '../common/utils';

export const About = (): ReactElement => {
  const size = useContext<string>(ResponsiveContext);

  return (
    <Box fill id="about">
      <Box
        direction="column"
        width={{width: '100%', max: '1140px'}}
        align="center"
        justify="between"
        margin="auto"
        pad={{vertical: 'xlarge'}}
      >
        <Box justify="center" pad={{bottom: 'medium'}} style={{zIndex: 1}}>
          <Heading color="accent-1" level="2">
            About me
          </Heading>
        </Box>
        <Box
          direction={setForDevice<BoxProps['direction']>(['column', 'row'], size)}
          pad={{horizontal: 'medium'}}
        >
          <Box
            height="360px"
            width={setForDevice<string>(['100%', '50%'], size)}
            pad={setForDevice<Record<string, string>>([{bottom: 'large'}, {right: 'large'}], size)}
          >
            <PhotoImage />
          </Box>
          <Box width={setForDevice<string>(['100%', '50%'], size)} pad={{left: 'medium'}}>
            <Box pad={{bottom: 'medium'}}>
              <Box
                align={setForDevice<BoxProps['align']>(['center', 'start'], size)}
                style={{zIndex: 1}}
              >
                <Heading
                  level="3"
                  margin={{bottom: 'medium', top: 'none'}}
                  color="accent-1"
                  textAlign="center"
                >
                  Hola, Soy Pablo Allendes
                </Heading>
              </Box>
              <Text color="white" style={{zIndex: 1}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro molestias, enim
                similique molestiae repellat vero ab in aut corrupti nihil, omnis voluptates aliquam
                magnam. Saepe nobis dolore nesciunt sed!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro molestias, enim
                similique molestiae repellat vero ab in aut corrupti nihil, omnis voluptates aliquam
                magnam. Saepe nobis dolore nesciunt sed!
              </Text>
            </Box>
            <Box pad={{vertical: 'medium'}} direction="row" justify="center" style={{zIndex: 1}}>
              <Box pad={{right: 'small'}}>
                <Instagram color="accent-1" />
              </Box>
              <Box pad={{right: 'small'}}>
                <Github color="accent-1" />
              </Box>
              <Box>
                <Linkedin color="accent-1" />
              </Box>
            </Box>
            <Box
              pad={{vertical: 'medium'}}
              direction="row"
              style={{zIndex: 1}}
              justify={setForDevice<BoxProps['justify']>(['center', 'start'], size)}
            >
              <Box align="center" pad={{right: 'small'}}>
                <Button primary size="small" label="Contáctame" />
              </Box>
              <Box align="center">
                <Button size="small" primary label="Descargar CV" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
