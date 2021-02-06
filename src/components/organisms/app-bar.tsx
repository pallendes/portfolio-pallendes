import React, {ReactElement, useContext, useEffect, useState} from 'react';

import {Anchor, Nav, Header, Text, Box, ResponsiveContext, Button} from 'grommet';
import {Home, User, DocumentText, Launch, Briefcase, Menu} from 'grommet-icons';
import {CSSProperties} from 'styled-components';

import {SideNavMenu} from './side-nav-menu';

export const AppBar = (): ReactElement => {
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
        height="82px"
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
                <Anchor label="Home" href="#home" icon={<Home />} color="accent-1" />
              </Box>
              <Box>
                <Anchor label="About" href="#about" icon={<User />} color="accent-1" />
              </Box>
              <Box>
                <Anchor label="Skills" href="#skills" icon={<Launch />} color="accent-1" />
              </Box>
              <Box>
                <Anchor
                  label="Experience"
                  href="#experience"
                  icon={<Briefcase />}
                  color="accent-1"
                />
              </Box>
              <Box>
                <Button
                  label="Download CV"
                  primary
                  icon={<DocumentText />}
                  color="accent-1"
                  size="medium"
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
