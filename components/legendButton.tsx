import React, { useState } from 'react';

const LegendButton = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleButtonClick = (region:any) => {
    // You can perform any action or update the dashboard text here
    console.log(`Selected region: ${region}`);
    setSelectedRegion(region);
  };

  const legendData = {
    Africa: "#73AF4890",
    Americas: "#38A6A590",
    Asia: "#1D699690",
    Europe: "#EDAD0890",
    Oceania: "#94346E90",
  };

  return (
    <div>
      <p>Selected Region: {selectedRegion || 'None'}</p>
      <div>
        {Object.entries(legendData).map(([region, color]) => (
          <button
            key={region}
            className='rounded text-white font-bold'
            style={{ backgroundColor: color, margin: '5px', padding: '10px', cursor: 'pointer' }}
            onClick={() => handleButtonClick(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LegendButton;
