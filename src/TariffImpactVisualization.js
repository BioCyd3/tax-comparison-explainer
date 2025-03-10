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
      { incomeLevel: "$5M", income: 5000000, essentialsPercent: 15, tariff25: 187500, tariff35: 262500, tariff50: 375000, tariff100: 750000, effective25: 3.75, effective35: 5.25, effective50: