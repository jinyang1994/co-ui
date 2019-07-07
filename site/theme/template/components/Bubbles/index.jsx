import React, { createRef, useEffect } from 'react';
import lottie from 'lottie-web';
import jaina from './jaina';
import alsace from './alsace';

function Base({ className, data = jaina, speed = 1 }) {
  const containerRef = createRef();

  useEffect(() => {
    const { current: container } = containerRef;
    const animation = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data,
    });

    animation.setSpeed(speed);

    return () => animation.destroy();
  });

  return (
    <div
      className={className}
      ref={containerRef}
    />
  );
}

export function Jaina(props) {
  return <Base data={jaina} {...props} />;
}

export function Alsace(props) {
  return <Base data={alsace} speed={0.5} {...props} />;
}

