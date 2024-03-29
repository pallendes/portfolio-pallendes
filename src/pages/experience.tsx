import React, {ReactElement} from 'react';
import {Box, Button, Heading} from 'grommet';
import {ExperienceRow} from '../components/molecules';
import {FormattedMessage, useIntl} from 'react-intl';

export const Experience = (): ReactElement => {
  const intl = useIntl();

  return (
    <Box fill>
      <Box
        direction="column"
        width={{width: '100%', max: '1140px'}}
        align="center"
        justify="between"
        margin="auto"
        pad="large"
        id="experience"
      >
        <Box justify="center" margin={{bottom: 'small'}}>
          <Heading color="accent-1" level="2" style={{zIndex: 1}}>
            <FormattedMessage id="experience.title.1" />{' '}
            <b>
              <FormattedMessage id="experience.title.2" />
            </b>
          </Heading>
        </Box>
        <Box margin={{bottom: 'large'}} style={{zIndex: 1}}>
          <Button
            primary
            size="large"
            label={intl.formatMessage({id: 'experience.content.download'})}
            target="_blank"
            href="https://drive.google.com/file/d/1NKQtbJP0P0uhHLAn1HVqnqEgkvmyOOy7/view?usp=sharing"
          />
        </Box>
        <ExperienceRow
          period={intl.formatMessage({id: 'experience.content.row.0.period'})}
          company={intl.formatMessage({id: 'experience.content.row.0.company'})}
          role={intl.formatMessage({id: 'experience.content.row.0.role'})}
          description={intl.formatMessage({id: 'experience.content.row.0.description'})}
          location={intl.formatMessage({id: 'experience.content.row.0.location'})}
        />
        <ExperienceRow
          period={intl.formatMessage({id: 'experience.content.row.1.period'})}
          company={intl.formatMessage({id: 'experience.content.row.1.company'})}
          role={intl.formatMessage({id: 'experience.content.row.1.role'})}
          description={intl.formatMessage({id: 'experience.content.row.1.description'})}
          location={intl.formatMessage({id: 'experience.content.row.1.location'})}
        />
        <ExperienceRow
          period={intl.formatMessage({id: 'experience.content.row.2.period'})}
          company={intl.formatMessage({id: 'experience.content.row.2.company'})}
          role={intl.formatMessage({id: 'experience.content.row.2.role'})}
          description={intl.formatMessage({id: 'experience.content.row.2.description'})}
          location={intl.formatMessage({id: 'experience.content.row.2.location'})}
        />
        <ExperienceRow
          period={intl.formatMessage({id: 'experience.content.row.3.period'})}
          company={intl.formatMessage({id: 'experience.content.row.3.company'})}
          role={intl.formatMessage({id: 'experience.content.row.3.role'})}
          description={intl.formatMessage({id: 'experience.content.row.3.description'})}
          location={intl.formatMessage({id: 'experience.content.row.3.location'})}
        />
      </Box>
    </Box>
  );
};
