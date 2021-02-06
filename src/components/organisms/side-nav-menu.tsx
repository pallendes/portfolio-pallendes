import {Anchor, Box, Button, Nav, ResponsiveContext} from 'grommet';
import {Briefcase, Close, DocumentText, Home, Launch, User} from 'grommet-icons';
import React, {ReactElement, useContext, useEffect, useState} from 'react';

interface SideNavMenuProps {
  open: boolean;
  onClose: (isOpend: boolean) => void;
}

export const SideNavMenu = ({open, onClose}: SideNavMenuProps): ReactElement | null => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    setIsHide(!open);
  }, [open]);

  if (size === 'large') {
    return null;
  }

  const handleClose = () => {
    onClose(!isHide);
  };

  return (
    <Box
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 10,
        transition: 'margin 0.3s',
      }}
      height="100vh"
      margin={{right: isHide ? '-100%' : '0'}}
      width="40vh"
      background={{color: 'neutral-2'}}
      elevation="small"
    >
      <Box height="82px" justify="center">
        <Box direction="row" justify="end" pad="small">
          <Button icon={<Close color="accent-1" />} onClick={handleClose} />
        </Box>
      </Box>
      <Box justify="center" pad={{vertical: 'large', horizontal: 'large'}} height="95%">
        <Nav direction="column" justify="end">
          <Box pad={{bottom: 'medium'}}>
            <Anchor
              size="large"
              label="Home"
              href="#home"
              icon={<Home />}
              color="accent-1"
              onClick={handleClose}
            />
          </Box>
          <Box pad={{bottom: 'medium'}}>
            <Anchor
              size="large"
              label="About"
              href="#about"
              icon={<User />}
              color="accent-1"
              onClick={handleClose}
            />
          </Box>
          <Box pad={{bottom: 'medium'}}>
            <Anchor
              size="large"
              label="Skills"
              href="#skills"
              icon={<Launch />}
              color="accent-1"
              onClick={handleClose}
            />
          </Box>
          <Box pad={{bottom: 'medium'}}>
            <Anchor
              size="large"
              label="Experience"
              href="#experience"
              icon={<Briefcase />}
              color="accent-1"
              onClick={handleClose}
            />
          </Box>
          <Box pad={{bottom: 'medium'}}>
            <Anchor
              size="large"
              label="Resume"
              href="#"
              icon={<DocumentText />}
              color="accent-1"
              onClick={handleClose}
            />
          </Box>
        </Nav>
      </Box>
    </Box>
  );
};
