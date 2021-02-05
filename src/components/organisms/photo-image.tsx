/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {CSSProperties, ReactElement} from 'react';
import {useSpring, animated} from 'react-spring';

const cardStyles: CSSProperties = {
  height: '100%',
  background: 'grey',
  borderRadius: '5px',
  backgroundImage:
    'url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.5s',
  willChange: 'transform',
};

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const PhotoImage = (): ReactElement => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {mass: 2, tension: 350, friction: 40},
  }));

  return (
    <animated.div
      className="card"
      onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
      onMouseLeave={() => set({xys: [0, 0, 1]})}
      // @ts-ignore
      // eslint-disable-next-line react/prop-types
      style={{...cardStyles, transform: props.xys.interpolate(trans)}}
    />
  );
};
