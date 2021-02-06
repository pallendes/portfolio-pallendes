import React, {ReactElement, useContext} from 'react';
import {Box, Heading, Image, ResponsiveContext, Text} from 'grommet';
import {TechIcon} from '../components/atoms';
import {setForDevice} from '../common/utils';

export const Skills = (): ReactElement => {
  const size = useContext(ResponsiveContext);

  return (
    <Box fill>
      <Box
        direction="column"
        width={{width: '100%', max: '1140px'}}
        align="center"
        justify="between"
        margin="auto"
        pad="large"
        id="skills"
      >
        <Box justify="center" pad={{bottom: 'medium'}}>
          <Heading color="accent-1" level="2" textAlign="center" style={{zIndex: 1}}>
            Professional <b>Skillset</b>
          </Heading>
        </Box>
        <Box>
          <Text color="white" style={{zIndex: 1}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod perferendis
            aspernatur ullam id fuga perspiciatis reprehenderit, cum aliquid asperiores repellendus
            aliquam neque explicabo eos dolorum fugiat inventore? Maxime, porro?
          </Text>
        </Box>
        <Box
          pad={setForDevice(['none', 'small'], size)}
          direction="row"
          width="100%"
          justify="center"
          wrap
          style={{zIndex: 1}}
        >
          <TechIcon icon="devicon-react-original-wordmark" />
          <TechIcon icon="devicon-javascript-plain" />
          <TechIcon icon="devicon-html5-plain-wordmark" />
          <TechIcon icon="devicon-css3-plain-wordmark" />
          <TechIcon icon="devicon-googlecloud-plain" />
          <TechIcon icon="devicon-java-plain-wordmark" />
          <TechIcon icon="devicon-typescript-plain" />
          <TechIcon icon="devicon-nodejs-plain" />
          <TechIcon icon="devicon-git-plain" />
        </Box>
        <Box direction="row" pad={{top: 'small'}}>
          <Box width="100%" pad="small">
            <Box justify="center" direction="row" pad={{bottom: 'medium'}}>
              <Heading level="3" color="accent-1" style={{zIndex: 1}}>
                Codersrank Position
              </Heading>
            </Box>
            <Image
              style={{zIndex: 1}}
              fit="cover"
              alt="Puntaje codersrank"
              src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=pallendes"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
