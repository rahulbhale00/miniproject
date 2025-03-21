import React from 'react';

const sensors = [
  {
    name: 'Flame Sensor',
    image: '/Flame_Sensor.png', // Adjust path as needed
    info: [
      'Detects the presence of fire or flame.',
      'Sensitive to infrared radiation.',
      'Provides analog signal output.',
      'Used in fire detection and safety systems.',
      'Has a detection angle of about 60 degrees.',
      'Ideal for short range flame detection.'
    ]
  },
  {
    name: 'MQ2 Gas Sensor',
    image: '/MQ2-GasSensor.png', // Adjust path as needed
    info: [
      'Detects LPG, smoke, methane, and other flammable gases.',
      'Offers analog output for gas concentration.',
      'Widely used in air quality monitoring.',
      'Low power consumption and cost-effective.',
      'Calibrated for quick gas leakage detection.',
      'Suitable for home safety and industrial applications.'
    ]
  },
  {
    name: 'Ultrasonic Sensor',
    image: '/ultasonic_sensor.jpg', // Adjust path as needed
    info: [
      'Measures distance using ultrasonic waves.',
      'Non-contact distance measurement method.',
      'Accurate and reliable in various environments.',
      'Commonly used in robotics and obstacle detection.',
      'Operates with a transmitter and receiver module.',
      'Effective range typically from 2cm to several meters.'
    ]
  },
  {
    name: 'Vibrational Sensor',
    image: '/vibrationSensor.png', // Adjust path as needed
    info: [
      'Detects vibrations and movements.',
      'Often based on piezoelectric technology.',
      'Used in security systems and equipment monitoring.',
      'Provides real-time data on mechanical disturbances.',
      'Can detect subtle changes in motion or resonance.',
      'Ideal for fault detection in machinery.'
    ]
  },
  {
    name: 'Temperature Sensor',
    image: '/Temp Sensor.png', // Adjust path as needed
    info: [
      'Measures ambient temperature.',
      'Delivers accurate readings in real time.',
      'Can have analog or digital output.',
      'Utilized in HVAC, industrial, and consumer electronics.',
      'Some models have built-in calibration for precision.',
      'Often used in climate control and weather stations.'
    ]
  }
];

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  flex: '1',
  minWidth: '250px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  // centers heading horizontally
  justifyContent: 'flex-start',
  backgroundColor: '#fff'
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.4rem',
  textAlign: 'center',
  marginBottom: '12px'
};

const contentRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%'
};

const imageStyle = {
    marginLeft: '16px',
    maxWidth: '130px',
    height: '200px'
  };
  
  // This style removes default bullets and adds spacing on the left
  const customListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };
  
  // Each <li> will have a pseudo-bullet (e.g., "►") on the left
  const listItemStyle = {
    position: 'relative',
    paddingLeft: '20px',  // space for the symbol
    marginBottom: '6px'   // spacing between points
  };
  
  const symbolStyle = {
    position: 'absolute',
    left: 0,
    color: '#333'         // choose a color for the symbol
  };

const Card = ({ sensor }) => (
  <div style={cardStyle}>
    {/* Sensor Name */}
    <h3 style={titleStyle}>{sensor.name}</h3>
    
    {/* Row with bullet points on the left and image on the right */}
    <div style={contentRowStyle}>
    <ul style={customListStyle}>
        {sensor.info.map((point, idx) => (
          <li key={idx} style={listItemStyle}>
            {/* Symbol or pointer */}
            <span style={symbolStyle}>►</span>
            {point}
          </li>
        ))}
      </ul>
      {/* Actual sensor image */}
      <img 
        src={sensor.image} 
        alt={sensor.name}
        style={imageStyle}
      />
    </div>
  </div>
);

export default function Page() {
  return (
    <div 
      style={{ 
        minHeight: '100vh',   // Ensures full window height
        width: '100vw',       // Ensures full window width
        boxSizing: 'border-box',
        padding: '20px',
        backgroundColor: '#f5f5f5' // Light background for contrast
      }}
    >
      {/* First row with three cards */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          marginBottom: '20px' 
        }}
      >
        {sensors.slice(0, 3).map((sensor, idx) => (
          <Card key={idx} sensor={sensor} />
        ))}
      </div>

      {/* Second row with two cards */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap'
        }}
      >
        {sensors.slice(3).map((sensor, idx) => (
          <Card key={idx} sensor={sensor} />
        ))}
      </div>
    </div>
  );
}