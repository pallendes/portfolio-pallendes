import React, {ReactElement} from 'react';
import {Box, Button, Heading} from 'grommet';
import {ExperienceRow} from '../components/molecules';
import {Particle} from '../components/atoms';

export const Experience = (): ReactElement => {
  return (
    <>
      <Particle />
      <Box
        background="linear-gradient(0deg, rgba(253,111,255,1) 0%, rgba(125,76,219,1) 99%)"
        fill
        pad={{bottom: '160px'}}
      >
        <Box
          direction="column"
          width={{width: '100%', max: '1140px'}}
          align="center"
          justify="between"
          margin="auto"
          pad="large"
          id="experience"
        >
          <Box justify="center" margin={{bottom: 'small'}}>
            <Heading color="accent-1" level="1">
              My <b>Experience</b>
            </Heading>
          </Box>
          <Box margin={{bottom: 'large'}}>
            <Button primary size="large" label="Download CV" />
          </Box>
          <ExperienceRow
            period="2017 - Now"
            company="Globant - Latam Airlines"
            role="Web UI Developer/Full Stack Developer"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil impedit dignissimos,
            quasi fugit odit hic tempore exercitationem perspiciatis nisi quia a officia voluptas
            necessitatibus eveniet reprehenderit quod. Fugiat, voluptatem neque!"
          />
          <ExperienceRow
            period="2017 - Now"
            company="Globant - Latam Airlines"
            role="Web UI Developer/Full Stack Developer"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil impedit dignissimos,
            quasi fugit odit hic tempore exercitationem perspiciatis nisi quia a officia voluptas
            necessitatibus eveniet reprehenderit quod. Fugiat, voluptatem neque!"
          />
          <ExperienceRow
            period="2017 - Now"
            company="Globant - Latam Airlines"
            role="Web UI Developer/Full Stack Developer"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil impedit dignissimos,
            quasi fugit odit hic tempore exercitationem perspiciatis nisi quia a officia voluptas
            necessitatibus eveniet reprehenderit quod. Fugiat, voluptatem neque!"
          />
        </Box>
      </Box>
    </>
  );
};
