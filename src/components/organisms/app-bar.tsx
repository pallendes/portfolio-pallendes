import React, {ReactElement, useContext, useEffect, useState} from 'react';

import {Anchor, Nav, Header, Text, Box, ResponsiveContext, Button} from 'grommet';
import {Home, User, DocumentText, Launch, Briefcase, Menu} from 'grommet-icons';
import {CSSProperties} from 'styled-components';

import {SideNavMenu} from './side-nav-menu';
import {useIntl} from 'react-intl';

export const AppBar = (): ReactElement => {
  const intl = useIntl();

  const size = useContext<string>(ResponsiveContext);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openedSideMenu, setOpenedSideMenu] = useState<boolean>(false);

  const scrollHandler = (): void => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  });

  const styleProps: CSSProperties = scrolled
    ? {
        position: 'fixed',
        width: '100%',
        top: -100,
        transition: 'all 0.5s ease-out 0s',
        transform: 'translateY(100px)',
        zIndex: 10,
      }
    : {};

  return (
    <>
      <Header
        background={scrolled ? 'brand' : 'transparent'}
        pad={size === 'large' ? 'small' : 'medium'}
        elevation={scrolled ? 'small' : 'none'}
        style={styleProps}
        height="auto"
      >
        <Box
          width={{width: '100%', max: '1140px'}}
          align="center"
          justify="between"
          direction="row"
          margin="auto"
          style={{zIndex: 1}}
        >
          <Box border={{color: 'accent-1'}} pad="xsmall">
            <Text color="accent-1" size="xxlarge" weight="bold">
              Pa.
            </Text>
          </Box>
          {size === 'large' ? (
            <Nav direction="row" justify="end" align="baseline">
              <Box>
                <Anchor
                  label={intl.formatMessage({id: 'nav.home'})}
                  href="#home"
                  icon={<Home />}
                  color="accent-1"
                />
              </Box>
              <Box>
                <Anchor
                  label={intl.formatMessage({id: 'nav.about'})}
                  href="#about"
                  icon={<User />}
                  color="accent-1"
                />
              </Box>
              <Box>
                <Anchor
                  label={intl.formatMessage({id: 'nav.skills'})}
                  href="#skills"
                  icon={<Launch />}
                  color="accent-1"
                />
              </Box>
              <Box>
                <Anchor
                  label={intl.formatMessage({id: 'nav.experience'})}
                  href="#experience"
                  icon={<Briefcase />}
                  color="accent-1"
                />
              </Box>
              <Box>
                <Button
                  label={intl.formatMessage({id: 'nav.button.download'})}
                  primary
                  icon={<DocumentText />}
                  color="accent-1"
                  size="medium"
                  target="_blank"
                  href="https://drive.google.com/file/d/1t1QQ67DeRCf56ax3oH8dQdhVOAAGvHhP/view?usp=sharing"
                />
              </Box>
            </Nav>
          ) : (
            <Box>
              <Button
                icon={<Menu color="accent-1" />}
                onClick={() => setOpenedSideMenu(!openedSideMenu)}
              />
            </Box>
          )}
        </Box>
      </Header>
      <SideNavMenu open={openedSideMenu} onClose={() => setOpenedSideMenu(!openedSideMenu)} />
    </>
  );
};
