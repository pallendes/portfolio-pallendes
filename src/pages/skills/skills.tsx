import React, {ReactElement} from 'react';
import {Box, Heading, Image} from 'grommet';
import {Particle, TechIcon} from '../../components/atoms';

export const Skills = (): ReactElement => {
  return (
    <>
      <Particle />
      <Box background="linear-gradient(0deg, rgba(125,76,219,1) 0%, rgba(253,111,255,1) 99%)" fill>
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
            <Heading color="accent-1" level="1">
              Professional <b>Skillset</b>
            </Heading>
          </Box>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod perferendis
            aspernatur ullam id fuga perspiciatis reprehenderit, cum aliquid asperiores repellendus
            aliquam neque explicabo eos dolorum fugiat inventore? Maxime, porro?
          </Box>
          <Box pad="small" direction="row" width="100%" justify="center" wrap>
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
                <Heading level="3" color="accent-1">
                  Codersrank Position
                </Heading>
              </Box>
              <Image
                fit="cover"
                src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=pallendes"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
