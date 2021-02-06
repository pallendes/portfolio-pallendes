import React, {ReactElement, useContext} from 'react';
import {Box, BoxProps, ResponsiveContext, Text} from 'grommet';
import {setForDevice} from '../../common/utils';

interface ExperienceRowProps {
  period: string;
  company: string;
  role: string;
  description: string;
}

export const ExperienceRow = ({
  period,
  company,
  role,
  description,
}: ExperienceRowProps): ReactElement => {
  const size = useContext<string>(ResponsiveContext);

  return (
    <Box
      direction={setForDevice<BoxProps['direction']>(['column', 'row'], size)}
      border={{color: 'accent-1', side: 'bottom'}}
      pad={{bottom: 'medium'}}
      margin={setForDevice<Record<string, string>>(
        [{bottom: 'large'}, {bottom: 'medium'}, {}],
        size,
      )}
      style={{zIndex: 1}}
    >
      <Box
        width={setForDevice<string>(['100%', '30%'], size)}
        pad={{right: 'small'}}
        margin={setForDevice<Record<string, string>>([{bottom: 'medium'}, {}], size)}
      >
        <Box>
          <Text color="white">{period}</Text>
        </Box>
        <Box>
          <Text size="large" weight="bold" color="accent-1">
            {company}
          </Text>
        </Box>
      </Box>
      <Box
        width={setForDevice<string>(['100%', '30%'], size)}
        pad={{right: 'small'}}
        margin={setForDevice<Record<string, string>>([{bottom: 'medium'}, {}], size)}
      >
        <Text size="large" weight="bold" color="white">
          {role}
        </Text>
      </Box>
      <Box
        width={setForDevice<string>(['100%', '40%'], size)}
        margin={setForDevice<Record<string, string>>([{bottom: 'medium'}, {}], size)}
      >
        <Text color="white">{description}</Text>
      </Box>
    </Box>
  );
};
