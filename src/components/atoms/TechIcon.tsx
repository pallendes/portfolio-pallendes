import {Box, ResponsiveContext} from 'grommet';
import React, {ReactElement, useContext} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled from 'styled-components';
import {setForDevice} from '../../common/utils';

const StyledIcon = styled('i')`
  width: 96px;
  font-size: 4.5em;
  margin: 15px;
  opacity: 0.93;
  border: 1.7px solid rgba(200, 137, 230, 0.637);
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: table;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);
  overflow: hidden;
  transition: all 0.4s ease 0s;
  background-color: black;
  padding: 12px;
  color: ${({theme}) => theme.global.colors['accent-1']};

  :hover {
    transform: scale(1.05);
    overflow: hidden;
    border: 2.2px solid rgba(197, 115, 230, 0.883);
  }
`;

export const TechIcon = ({icon}: {icon: string}): ReactElement => {
  const size = useContext<string>(ResponsiveContext);

  return (
    <Box width={setForDevice<string>(['auto', 'auto', '20%'], size)}>
      <StyledIcon className={icon}></StyledIcon>
    </Box>
  );
};
