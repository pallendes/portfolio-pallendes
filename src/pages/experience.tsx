import React, {ReactElement} from 'react';
import {Box, Button, Heading} from 'grommet';
import {ExperienceRow} from '../components/molecules';

export const Experience = (): ReactElement => {
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
            Experiencia <b>laboral</b>
          </Heading>
        </Box>
        <Box margin={{bottom: 'large'}} style={{zIndex: 1}}>
          <Button primary size="large" label="Download CV" />
        </Box>
        <ExperienceRow
          period="2017 - Now"
          company="Globant - Latam Airlines"
          role="Web UI Developer/Full Stack Developer"
          description="Desarrollo de software para el cliente Latam Airlines. Durante 
            este periodo destaca el trabajo en proyectos como Latam travel, en donde tuve 
            la oportunidad de participar en el desarrollo de aplicaciones web para la venta
            de paquetes turísticos utilizando principalmente tecnologías como React 
            y Spring. Actualmente participo en el desarrollo de la aplicación web 
            para la billetera electrónica Latam Wallet, utilizando 
            tecnologías como React, Spring y servicios cloud de google."
        />
        <ExperienceRow
          period="2015 - 2017"
          company="Globant - Latam Airlines"
          role="Web UI Developer/Full Stack Developer"
          description="Desarrollo de proyectos para el sector bancario, entre los que 
            destaca BBVA Bloter, Software web que centraliza el control de todas las operaciones 
            de intercambio monetario, interconectando tanto sistemas internos como externos 
            a nivel nacional. El sistema fue desarrollado desde cero en tiempo record, 
            luego de 5 años de estancamiento. El software fue construido sobre tecnologías 
            como Spring 4 (Servicios Rest), Web Services SOAP (JAX-WS), Colas WebSphere MQ, 
            Websphere AS, AngularJS, IBM DB2, entre otros."
        />
      </Box>
    </Box>
  );
};
