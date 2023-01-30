import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { useInterval } from './useInterval';

const colors = [
  'rgba(237, 80, 195, 1)',
  'rgba(225, 158, 91, 1)',
  'rgba(218, 93, 114, 1)',
  'rgba(153, 113, 254, 1)',
  'rgba(234, 243, 104, 1)',
  'rgba(159, 241, 147, 1)',
];

const changeColorsToGradient = (...colors: string[]) => `radial-gradient(
  at 0% 93%,
  ${colors[0]} 0px,
  transparent 50%
),
radial-gradient(at 10% 38%, ${colors[1]} 0px, transparent 50%),
radial-gradient(at 85% 57%, ${colors[2]} 0px, transparent 50%),
radial-gradient(at 50% 11%, ${colors[3]} 0px, transparent 50%),
radial-gradient(at 48% 83%, ${colors[4]} 0px, transparent 50%),
radial-gradient(at 94% 97%, ${colors[5]} 0px, transparent 50%)`;

interface Props {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export default function GradientBox({
  width = '24px',
  height = '24px',
  borderRadius = '50%',
}: Props) {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
    shuffleColors();
  }, 1000);

  const [{ background }, api] = useSpring(() => ({
    background: changeColorsToGradient(...colors),
    loop: true,
    reset: true,
  }));

  const shuffleColors = () => {
    let colors = [
      'rgba(237, 80, 195, 1)',
      'rgba(225, 158, 91, 1)',
      'rgba(218, 93, 114, 1)',
      'rgba(153, 113, 254, 1)',
      'rgba(234, 243, 104, 1)',
      'rgba(159, 241, 147, 1)',
    ];
    let newArr = [];
    let copy = colors.slice(0);
    do {
      let index = Math.floor(Math.random() * copy.length);
      let item = copy[index];
      newArr.push(item);
      copy.splice(index, 1);
    } while (copy.length >= 1);

    api.start({
      background: changeColorsToGradient(...newArr),
    });
  };

  return (
    <animated.div
      id='wrapper'
      className='wrapper'
      style={{
        width: width,
        height: height,
        background: background,
        borderRadius: borderRadius,
      }}
    ></animated.div>
  );
}
