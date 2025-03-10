// ./src/TariffImpactVisualization.js
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
  LineChart,
  Line,
} from 'recharts';

const TariffImpactVisualization = () => {
    const [showTariff25, setShowTariff25] = useState(true);
    const [showTariff35, setShowTariff35] = useState(true);
    const [showTariff50, setShowTariff50] = useState(true);
    const [showTariff100, setShowTariff100] = useState(true);
    const [showEssentials, setShowEssentials] = useState(true);

  const data = [
      { incomeLevel: "$20k", income: 20000, essentialsPercent: 60, tariff25: 3000, tariff35: 4200, tariff50: 6000, tariff100: 12000, effective25: 15, effective35: 21, effective50: 30, effective100: 60, },
      { incomeLevel: "$40k", income: 40000, essentialsPercent: 50, tariff25: 5000, tariff35: 7000, tariff50: 10000, tariff100: 20000, effective25: 12.5, effective35: 17.5, effective50: 25, effective100: 50, },
      { incomeLevel: "$80k", income: 80000, essentialsPercent: 40, tariff25: 8000, tariff35: 11200, tariff50: 16000, tariff100: 32000, effective25: 10, effective35: 14, effective50: 20, effective100: 40, },
      { incomeLevel: "$200k", income: 200000, essentialsPercent: 30, tariff25: 15000, tariff35: 21000, tariff50: 30000, tariff100: 60000, effective25: 7.5, effective35: 10.5, effective50: 15, effective100: 30, },
      { incomeLevel: "$1M", income: 1000000, essentialsPercent: 20, tariff25: 50000, tariff35: 70000, tariff50: 100000, tariff100: 200000, effective25: 5, effective35: 7, effective50: 10, effective100: 20, },
      { incomeLevel: "$5M", income: 5000000, essentialsPercent: 15, tariff25: 187500, tariff35: 262500, tariff50: 375000, tariff100: 750000, effective25: 3.75, effective35: 5.25, effective50: 7.5, effective100: 15, },
      { incomeLevel: "$50M", income: 50000000, essentialsPercent: 10, tariff25: 1250000, tariff35: 1750000, tariff50: 2500000, tariff100: 5000000, effective25: 2.5, effective35: 3.5, effective50: 5, effective100: 10, },
      { incomeLevel: "$1B", income: 1000000000, essentialsPercent: 5,  tariff25: 12500000, tariff35: 17500000, tariff50: 25000000, tariff100: 50000000, effective25: 1.25, effective35: 1.75, effective50: 2.5, effective100: 5, },
  ];

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip bg-white dark:bg-gray-700 p-2 rounded shadow border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
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
        <thead>
          <tr>
            <th className="text-gray-800 dark:text-gray-200">Income Level</th>
            <th className="text-gray-800 dark:text-gray-200">% Spent on Essentials</th>
            <th className="text-gray-800 dark:text-gray-200">25% Tariff Effective Rate</th>
            <th className="text-gray-800 dark:text-gray-200">35% Tariff Effective Rate</th>
            <th className="text-gray-800 dark:text-gray-200">50% Tariff Effective Rate</th>
            <th className="text-gray-800 dark:text-gray-200">100% Tariff Effective Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.incomeLevel}>
              <td className="text-gray-800 dark:text-gray-200">{item.incomeLevel}</td>
              <td className="text-gray-800 dark:text-gray-200">{item.essentialsPercent}%</td>
              <td className="text-gray-800 dark:text-gray-200">{item.effective25}%</td>
              <td className="text-gray-800 dark:text-gray-200">{item.effective35}%</td>
              <td className="text-gray-800 dark:text-gray-200">{item.effective50}%</td>
              <td className="text-gray-800 dark:text-gray-200">{item.effective100}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


  return (
    <div className="section-container bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg p-6 my-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        Tariff Impact Across Income Levels
      </h1>

      <div className="mb-4">
         <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Effective Tariff Rate (Interactive Chart)</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <label className="cursor-pointer label">
            <span className="label-text text-gray-800 dark:text-gray-200">25% Tariff</span>
            <input type="checkbox" checked={showTariff25} onChange={() => setShowTariff25(!showTariff25)} className="toggle toggle-primary" />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text text-gray-800 dark:text-gray-200">35% Tariff</span>
            <input type="checkbox" checked={showTariff35} onChange={() => setShowTariff35(!showTariff35)} className="toggle toggle-primary" />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text text-gray-800 dark:text-gray-200">50% Tariff</span>
            <input type="checkbox" checked={showTariff50} onChange={() => setShowTariff50(!showTariff50)} className="toggle toggle-primary" />
          </label>
          <label className="cursor-pointer label">
            <span className="label-text text-gray-800 dark:text-gray-200">100% Tariff</span>
            <input type="checkbox" checked={showTariff100} onChange={() => setShowTariff100(!showTariff100)} className="toggle toggle-primary" />
          </label>
           <label className="cursor-pointer label">
            <span className="label-text text-gray-800 dark:text-gray-200">% on Essentials</span>
            <input type="checkbox" checked={showEssentials} onChange={() => setShowEssentials(!showEssentials)} className="toggle toggle-primary" />
          </label>
        </div>
        <div className="chart-container h-96">
          <ResponsiveContainer width="100%" height="100%">
             <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" className="dark:stroke-gray-700"/>
              <XAxis
                dataKey="incomeLevel"
                angle={-45}
                textAnchor="end"
                height={70}
                label={{ value: "Income Level", position: "insideBottom", offset: -40 }}
                tick={{ fill: '#666', className: 'dark:fill-gray-200' }}
              />
              <YAxis label={{ value: "Effective Tax Rate (%)", angle: -90, position: "insideLeft" }}
              tick={{ fill: '#666', className: 'dark:fill-gray-200' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#666' }} className="dark:text-gray-200"/>
              {showTariff25 && <Bar name="25% Tariff" dataKey="effective25" fill="#8884d8" />}
              {showTariff35 && <Bar name="35% Tariff" dataKey="effective35" fill="#82ca9d" />}
              {showTariff50 && <Bar name="50% Tariff" dataKey="effective50" fill="#00C49F" />}
              {showTariff100 && <Bar name="100% Tariff" dataKey="effective100" fill="#FF8042" />}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

       <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Effective Tariff Rates (Static Table)</h2>
        {renderTable()}
      </div>

        <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Regressivity of Tariffs (Interactive Chart)
        </h2>
         <div className="chart-container h-96">
          <ResponsiveContainer width="100%" height="100%">
           <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3"  stroke="#ccc" className="dark:stroke-gray-700"/>
              <XAxis
                dataKey="incomeLevel"
                angle={-45}
                textAnchor="end"
                height={70}
                label={{ value: "Income Level", position: "insideBottom", offset: -40 }}
                tick={{ fill: '#666', className: 'dark:fill-gray-200' }}/>
              <YAxis label={{ value: "Effective Tax Rate (%)", angle: -90, position: "insideLeft" }}
              tick={{ fill: '#666', className: 'dark:fill-gray-200' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#666' }} className="dark:text-gray-200"/>
              {showTariff25 && <Line type="monotone" dataKey="effective25" name="25% Tariff" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />}
              {showTariff35 && <Line type="monotone" dataKey="effective35" name="35% Tariff" stroke="#82ca9d" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />}
              {showTariff50 && <Line type="monotone" dataKey="effective50" name="50% Tariff" stroke="#00C49F" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />}
              {showTariff100 && <Line type="monotone" dataKey="effective100" name="100% Tariff" stroke="#FF8042" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
        <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Percentage of Income Spent on Essentials (Interactive Chart)
        </h2>
        <div className="chart-container h-96">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                <CartesianGrid strokeDasharray="3 3"  stroke="#ccc" className="dark:stroke-gray-700"/>
                <XAxis
                    dataKey="incomeLevel"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    label={{ value: "Income Level", position: "insideBottom", offset: -40 }}
                    tick={{ fill: '#666', className: 'dark:fill-gray-200' }}
                />
                <YAxis label={{ value: "Percentage of Income (%)", angle: -90, position: "insideLeft" }}
                tick={{ fill: '#666', className: 'dark:fill-gray-200' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#666' }} className="dark:text-gray-200"/>
                {showEssentials && <Bar name="% Spent on Essentials" dataKey="essentialsPercent" fill="#ff7300" />}
                </BarChart>
            </ResponsiveContainer>
         </div>
      </div>

      <div className="mb-4 explanation-container border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Simple Explanation</h3>
        <p className="text-gray-800 dark:text-gray-200">
          This chart shows how tariffs (taxes on imported goods) would affect people at different income levels.  The bars represent the percentage of a person's income that would go towards paying these tariffs. Notice how the percentage is much higher for lower-income individuals compared to very wealthy individuals. This is because lower-income people spend a larger portion of their income on everyday necessities, many of which are imported goods.
        </p>
      </div>

      <div className="explanation-container border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Complex Explanation</h3>
        <p className="text-gray-800 dark:text-gray-200">
        This visualization demonstrates the regressive nature of tariffs as a primary revenue source.  The effective tariff rate, calculated as (Tariff Rate) * (% of Income Spent on Imported Goods), shows a clear inverse relationship with income. Lower-income households allocate a significantly larger proportion of their income to essential consumption, much of which is subject to import tariffs. Consequently, a flat tariff rate translates to a higher effective tax burden on those with lower incomes.  The line chart highlights this disparity, showing a decreasing effective tax rate as income increases.  Higher tariffs exacerbate this effect.  The "Percentage of Income Spent on Essentials" chart shows the underlying driver of this regressivity – the decreasing proportion of income spent on necessities as income rises.  This analysis underscores the potential for tariffs to increase income inequality.
        </p>
      </div>
    </div>
  );
};

export default TariffImpactVisualization;