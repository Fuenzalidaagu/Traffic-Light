import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [showPurple, setShowPurple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(color);
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);

  return (
    <div>
      		<div className="traffic-light">
        		<div className={`luz luz-red ${color === 'red' ? 'selected' : ''}`} onClick={() => setColor('red')} />
        		<div className={`luz luz-yellow ${color === 'yellow' ? 'selected' : ''}`} onClick={() => setColor('yellow')} />
        		<div className={`luz luz-green ${color === 'green' ? 'selected' : ''}`} onClick={() => setColor('green')} />
				{showPurple && <div className={`luz luz-purple ${color === 'purple' ? 'selected' : ''}`} onClick={() => setColor('purple')} />}
      		</div>
			<div className="traffic-light-poste">
			</div>
			<button onClick={() => setShowPurple(!showPurple)}>Mostrat Púrpura</button>
	</div>
  );
};

export default TrafficLight;