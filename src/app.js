// ./src/app.js
import React from 'react';
import ProgressiveTariffComparison from './ProgressiveTariffComparison';
import TariffImpactVisualization from './TariffImpactVisualization';

function App() {
  return (
    <div className="App p-4">
      <ProgressiveTariffComparison />
      <TariffImpactVisualization />
    </div>
  );
}

export default App;