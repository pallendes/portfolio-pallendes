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
            <b>Skills técnicas</b>
          </Heading>
        </Box>
        <Box>
          <Text color="white" style={{zIndex: 1}}>
            A lo largo de mi carrera he dedicado la mayor parte del tiempo a especializarme en
            tecnologías front-end (principalmente react), porque es lo que más disfruto por el
            momento, sin embargo, en la mayoría de los proyectos en los que he estado me ha tocado
            desarrollar micro servicios con tecnologías como spring-boot. También últimamente he
            estado jugando bastante con python y pytorch para el estudio y desarrollo de modelos de
            deep learning. <br />
            <br />
            En general soy bastante flexible para llevarme los conocimientos de un lenguaje a otro,
            al final del día siento que todos tienen cosas en común y se parecen :).
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
                Puntaje CodersRank
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
