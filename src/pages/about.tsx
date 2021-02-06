import React, {ReactElement, useContext} from 'react';

import {Anchor, Box, BoxProps, Button, Heading, ResponsiveContext, Text} from 'grommet';
import {Facebook, Github, Instagram, Linkedin} from 'grommet-icons';
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
            Sobre mí
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
                Cuento con más de 6 años de experiencia en los cuáles he trabajado tanto en el
                front-end como en el back-end del desarrollo de aplicaciones, utilizando tecnologías
                tales como React, React-Native, Node y Spring. Mi experiencia de trabajo va desde
                del desarrollo de aplicaciones para el sector financiero hasta para el sector de
                aerolíneas, en la cual me desempeño actualmente.
                <br />
                <br />
                Eso por el lado profesional, por el lado personal, tengo dos hobbies que me
                apasionan bastante: la fotografía y la música, si quieres conocer un poco de lo que
                hago en fotografía te invito a seguirme en este{' '}
                <Anchor
                  color="accent-1"
                  target="_blank"
                  href="https://www.instagram.com/p_allendes_fotografia/"
                >
                  instagram
                </Anchor>{' '}
                y si quieres saber un poco más de lo que hago en la música puedes buscar la banda a
                la que pertenezco en{' '}
                <Anchor
                  color="accent-1"
                  target="_blank"
                  href="https://open.spotify.com/artist/7ysU9YkhXIqRWccmV96Wlg?si=8mH-BqQTQtKybFtonyqeVA"
                >
                  spotify
                </Anchor>{' '}
                :).
              </Text>
            </Box>
            <Box
              pad={{vertical: 'medium'}}
              direction="row"
              justify={setForDevice<BoxProps['justify']>(['center', 'center', 'start'], size)}
              style={{zIndex: 1}}
            >
              <Anchor
                icon={<Instagram color="accent-1" />}
                href="https://www.instagram.com/p_allendes/"
                target="_blank"
              />
              <Anchor
                icon={<Facebook color="accent-1" />}
                href="https://www.facebook.com/paallendes/"
                target="_blank"
              />
              <Anchor
                icon={<Linkedin color="accent-1" />}
                href="https://www.linkedin.com/in/paallendes/"
                target="_blank"
              />
            </Box>
            <Box
              pad={{vertical: 'medium'}}
              direction="row"
              style={{zIndex: 1}}
              justify={setForDevice<BoxProps['justify']>(['center', 'center', 'start'], size)}
            >
              <Box align="center" pad={{right: 'small'}}>
                <Button
                  primary
                  size="small"
                  label="Contáctame"
                  href="https://www.linkedin.com/in/paallendes/"
                  target="_blank"
                />
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
