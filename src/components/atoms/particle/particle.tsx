import React, {ReactElement} from 'react';
import Particles from 'react-particles-js';

import './particle.css';

export const Particle = (): ReactElement => (
  <Particles
    params={{
      particles: {
        number: {
          value: 50,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
  />
);
