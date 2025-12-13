"use client"
import React from 'react';

type SaveItem = {
  id: number;
  amount: number | string;
  rate: number | string;
};

type TotalSaveProps = {
  items: SaveItem[];
};

const TotalSave: React.FC<TotalSaveProps> = ({ items }) => {
  let totalDaily = 0;
  let totalMonthly = 0;
  let totalAnnual = 0;

  items.forEach(item => {
    const amount = parseFloat(item.amount as string) || 0;
    const rate = parseFloat(item.rate as string) || 0;
    const annual = (amount * rate) / 100;
    const monthly = annual / 12;
    const daily = monthly / 30;
    totalAnnual += isNaN(annual) ? 0 : annual;
    totalMonthly += isNaN(monthly) ? 0 : monthly;
    totalDaily += isNaN(daily) ? 0 : daily;
  });

  return (
    <div className="total-section">
      <h3>Total Savings</h3>
      <p>Total Daily Interest: <span className="ratebold">£{totalDaily.toFixed(2)}</span></p>
      <p>Total Monthly Interest: <span className="ratebold">£{totalMonthly.toFixed(2)}</span></p>
      <p>Total Annual Interest: <span className="ratebold">£{totalAnnual.toFixed(2)}</span></p>
    </div>
  );
};

export default TotalSave;
