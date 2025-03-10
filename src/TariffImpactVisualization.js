import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ProgressiveTariffComparison = () => {
  const [showProgressive, setShowProgressive] = useState(true);
  const [showTariff25, setShowTariff25] = useState(true);
  const [showTariff35, setShowTariff35] = useState(true);
  const [showTariff50, setShowTariff50] = useState(true);
  const [showTariff100, setShowTariff100] = useState(true);

    // Sample progressive tax rates (simplified for illustration)
    const progressiveTaxData = [
      { incomeLevel: "$20k", income: 20000, incomeCat: "Low Income", progressiveTaxRate: 5,  tariff25: 3000, tariff35: 4200, tariff50: 6000, tariff100: 12000, effective25: 15, effective35: 21, effective50: 30, effective100: 60, },
      { incomeLevel: "$40k", income: 40000, incomeCat: "Lower-Middle", progressiveTaxRate: 8,  tariff25: 5000, tariff35: 7000, tariff50: 10000, tariff100: 20000, effective25: 12.5, effective35: 17.5, effective50: 25, effective100: 50, },
      { incomeLevel: "$80k", income: 80000, incomeCat: "Middle Income", progressiveTaxRate: 12, tariff25: 8000, tariff35: 11200, tariff50: 16000, tariff100: 32000, effective25: 10, effective35: 14, effective50: 20, effective100: 40, },
      { incomeLevel: "$200k", income: 200000, incomeCat: "Upper Income", progressiveTaxRate: 20, tariff25: 15000, tariff35: 21000, tariff50: 30000, tariff100: 60000, effective25: 7.5, effective35: 10.5, effective50: 15, effective100: 30, },
      { incomeLevel: "$1M", income: 1000000, incomeCat: "High Income", progressiveTaxRate: 30,  tariff25: 50000, tariff35: 70000, tariff50: 100000, tariff100: 200000, effective25: 5, effective35: 7, effective50: 10, effective100: 20, },
      { incomeLevel: "$5M", income: 5000000, incomeCat: "Very High Income", progressiveTaxRate: 35, tariff25: 187500, tariff35: 262500, tariff50: 375000, tariff100: 750000, effective25: 3.75, effective35: 5.25, effective50: 7.5, effective100: 15, },
      { incomeLevel: "$50M", income: 50000000, incomeCat: "Ultra High Income", progressiveTaxRate: 37, tariff25: 1250000, tariff35: 1750000, tariff50: 2500000, tariff100: 5000000, effective25: 2.5, effective35: 3.5, effective50: 5, effective100: 10, },
      { incomeLevel: "$1B", income: 1000000000, incomeCat: "Billionaire Level", progressiveTaxRate: 37, tariff25: 12500000, tariff35: 17500000, tariff50: 25000000, tariff100: 50000000, effective25: 1.25, effective35: 1.75, effective50: 2.5, effective100: 5, },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-base-100 p-2 rounded shadow border border-base-content">
          <p className="label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };
    const renderTable = () => (
    <div className="table-container">
      <table className="table table-compact w-full">
        <thead>:
          <tr>
            <th>Income Level</th>
            <th>Progressive Tax Rate</th>
            <th>25% Tariff Effective Rate</th>
            <th>35% Tariff Effective Rate</th>
            <th>50% Tariff Effective Rate</th>
            <th>100% Tariff Effective Rate</th>
          </tr>
        </thead>
        <tbody>
          {progressiveTaxData.map((data) => (
            <tr key={data.incomeLevel}>
              <td>{data.incomeLevel}</td>
              <td>{data.progressiveTaxRate}%</td>
              <td>{data.effective25}%</td>
              <td>{data.effective35}%</td>
              <td>{data.effective50}%</td>
              <td>{data.effective100}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );

  return (
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4 text-center">Progressive Tax vs. Tariff-Based System</h1>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Tax Rate Comparison (Interactive Chart)</h2>
        <div className="flex flex-wrap gap-2 mb-4">
            <label className="cursor-pointer label">
              <span className="label-text">Progressive</span>
              <input type="checkbox" checked={showProgressive} onChange={() => setShowProgressive(!showProgressive)} className="toggle toggle-primary" />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text">25% Tariff</span>
              <input type="checkbox" checked={showTariff25} onChange={() => setShowTariff25(!showTariff25)} className="toggle toggle-primary" />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text">35% Tariff</span>
              <input type="checkbox" checked={showTariff35} onChange={() => setShowTariff35(!showTariff35)} className="toggle toggle-primary" />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text">50% Tariff</span>
              <input type="checkbox" checked={showTariff50} onChange={() => setShowTariff50(!showTariff50)} className="toggle toggle-primary" />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text">100% Tariff</span>
              <input type="checkbox" checked={showTariff100} onChange={() => setShowTariff100(!showTariff100)} className="toggle toggle-primary" />
            </label>
          </div>
        <div className="chart-container h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={progressiveTaxData}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="incomeLevel"
                angle={-45}
                textAnchor="end"
                height={70}
                label={{
                  value: "Income Level",
                  position: "insideBottom",
                  offset: -40,
                }}
              />
              <YAxis
                label={{
                  value: "Tax Rate (%)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
                <Tooltip content={<CustomTooltip />} />
              <Legend />
              {showProgressive && <Bar name="Progressive Tax Rate" dataKey="progressiveTaxRate" fill="#8884d8" />}
              {showTariff25 && <Bar name="25% Tariff Effective Rate" dataKey="effective25" fill="#82ca9d" />}
              {showTariff35 && <Bar name="35% Tariff Effective Rate" dataKey="effective35" fill="#ffc658" />}
              {showTariff50 && <Bar name="50% Tariff Effective Rate" dataKey="effective50" fill="#00C49F" />}
              {showTariff100 && <Bar name="100% Tariff Effective Rate" dataKey="effective100" fill="#FF8042" />}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

       <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Tax Rate Comparison (Static Table)</h2>
          {renderTable()}
        </div>

        <div className="mb-4 explanation-container">
        <h3 className="text-xl font-semibold mb-2">Simple Explanation</h3>
        <p>
          A <strong>progressive tax</strong> system, like the current US income tax, charges higher tax rates to those with higher incomes.  This means the more you earn, the larger the *percentage* of your income you pay in taxes.  A <strong>tariff-based system</strong>, on the other hand, applies a flat tax rate on imported goods. Because everyone buys goods, and lower-income individuals spend a larger portion of their income on essential goods (which are often imported), a tariff system effectively taxes lower-income people at a higher rate than higher-income people. This is called a "regressive" tax.  The chart and table above show how much different income levels would pay under each system.
        </p>
      </div>

      <div className="explanation-container">
        <h3 className="text-xl font-semibold mb-2">Complex Explanation</h3>
        <p>
          The core difference between progressive income taxation and a tariff-based revenue system lies in their incidence and economic effects. Progressive taxation, characterized by marginal tax brackets, aims to achieve vertical equity – the idea that those with a greater ability to pay should contribute a larger proportion of their income.  This is based on the principle of diminishing marginal utility of income; an additional dollar is worth less to a billionaire than to someone earning minimum wage.  Tariffs, conversely, are indirect taxes levied on imported goods, and their burden is distributed based on consumption patterns, not income levels.
        </p>
        <p>
          The effective tax rate under a tariff system is calculated by multiplying the tariff rate by the percentage of income spent on imported goods. This creates a regressive effect, disproportionately impacting lower-income households, as a larger share of their income is spent on consumption, particularly essential goods, which are often imported.  Higher tariffs (e.g. 50% or 100%) exacerbate this regressivity. Furthermore, tariffs can lead to trade distortions, reduced economic efficiency, and potential retaliatory measures from other countries, impacting international trade relations. The data visualized above clearly demonstrates the significantly higher effective tax rates for lower and middle-income earners under a tariff system compared to a progressive income tax, highlighting the shift in tax burden.
        </p>
      </div>

    </div>
  );
};

export default ProgressiveTariffComparison;