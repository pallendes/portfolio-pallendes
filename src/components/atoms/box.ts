import {HTMLAttributes} from 'react';
import styled from 'styled-components';
import {layout, LayoutProps, space, SpaceProps} from 'styled-system';

type BoxProps = HTMLAttributes<HTMLDivElement>;

export const Box = styled.div<BoxProps & LayoutProps & SpaceProps>`
  ${layout}
  ${space}
`;
