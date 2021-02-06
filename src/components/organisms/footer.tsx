import React, {ReactElement} from 'react';

import {FacebookOption, Instagram, LinkedinOption} from 'grommet-icons';

import {Anchor, Box, Footer as GrommetFooter, Text} from 'grommet';

const Media = (): ReactElement => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<LinkedinOption color="brand" />}
    />
  </Box>
);

export const Footer = (): ReactElement => (
  <Box style={{zIndex: 10}}>
    <GrommetFooter background="light-4" pad="small">
      <Box
        width={{width: '100%', max: '1140px'}}
        align="center"
        justify="between"
        direction="row"
        margin="auto"
      >
        <Box align="center" direction="row" gap="xsmall" border={{color: 'brand'}} pad="small">
          <Text alignSelf="center" color="brand" size="large" weight="bold">
            Pa.
          </Text>
        </Box>
        <Media />
        <Text textAlign="center" size="xsmall">
          ©Copyright
        </Text>
      </Box>
    </GrommetFooter>
  </Box>
);
