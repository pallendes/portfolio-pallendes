import React, {ReactElement} from 'react';
import Particles from 'react-tsparticles';

import './particle.css';

export const Particle = (): ReactElement => {
  return (
    <Particles
      className="particles"
      params={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.5,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ['image', 'circle'],
            image: [
              {
                src: '/html-5.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/node-js.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/javascript.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/react.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/typescript.svg',
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
