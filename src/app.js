// ./src/App.js
import React from 'react';
import ProgressiveTariffComparison from './ProgressiveTariffComparison';
import TariffImpactVisualization from './TariffImpactVisualization';

function App() {
  return (
    <div className="App p-4">
      <header className="sticky-header">
        <div className="header-title">Tax System Comparison: Progressive vs. Tariff</div>
        <nav className="nav-links">
          <a href="#progressive-vs-tariff">Progressive vs. Tariff</a>
          <a href="#tariff-impact">Tariff Impact</a>
        </nav>
      </header>
      <main>
        <article id="progressive-vs-tariff">
            <ProgressiveTariffComparison />
        </article>
        <article id="tariff-impact">
            <TariffImpactVisualization />
        </article>
      </main>
      <footer className='footer'>
        <div>© {new Date().getFullYear()} Tax System Comparison</div>
        <div>
          <a href="https://www.taxpolicycenter.org/" target="_blank" rel="noopener noreferrer">Tax Policy Center</a> |
          <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer">Congressional Budget Office</a>
          {/* Add more resources as needed */}
        </div>
      </footer>
    </div>
  );
}

export default App;