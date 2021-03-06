import React, {ReactElement, useContext} from 'react';

import {Anchor, Box, BoxProps, Button, Heading, ResponsiveContext, Text} from 'grommet';
import {Facebook, Instagram, Linkedin} from 'grommet-icons';
import {PhotoImage} from '../components/organisms';
import {setForDevice} from '../common/utils';
import {FormattedMessage, useIntl} from 'react-intl';

export const About = (): ReactElement => {
  const intl = useIntl();
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
            <FormattedMessage id="about.title" />
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
                  <FormattedMessage id="about.subtitle" />
                </Heading>
              </Box>
              <Text color="white" style={{zIndex: 1}}>
                <FormattedMessage id="about.content.1" />
                <br />
                <br />
                <FormattedMessage
                  id="about.content.2"
                  values={{
                    instagram: (
                      <Anchor
                        color="accent-1"
                        target="_blank"
                        href="https://www.instagram.com/p_allendes_fotografia/"
                      >
                        instagram
                      </Anchor>
                    ),
                    spotify: (
                      <Anchor
                        color="accent-1"
                        target="_blank"
                        href="https://open.spotify.com/artist/7ysU9YkhXIqRWccmV96Wlg?si=8mH-BqQTQtKybFtonyqeVA"
                      >
                        spotify
                      </Anchor>
                    ),
                  }}
                />
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
                  label={intl.formatMessage({id: 'about.button.contact'})}
                  href="https://www.linkedin.com/in/paallendes/"
                  target="_blank"
                />
              </Box>
              <Box align="center">
                <Button
                  size="small"
                  primary
                  label={intl.formatMessage({id: 'about.button.download'})}
                  target="_blank"
                  href="https://drive.google.com/file/d/1NKQtbJP0P0uhHLAn1HVqnqEgkvmyOOy7/view?usp=sharing"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
