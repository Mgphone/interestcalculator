"use client"
import React, { useEffect, useState } from 'react';

type CalculateProps = {
  amount: number;
  rate: number;
  dailyLabel: string;
  monthlyLabel: string;
  annualLabel: string;
};

const Calculate: React.FC<CalculateProps> = ({ amount, rate, dailyLabel, monthlyLabel, annualLabel }) => {
  const [daily, setDaily] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [annual, setAnnual] = useState(0);

  useEffect(() => {
    const annualValue = (amount * rate) / 100;
    const monthlyValue = annualValue / 12;
    const dailyValue = monthlyValue / 30;

    setAnnual(isNaN(annualValue) ? 0 : annualValue);
    setMonthly(isNaN(monthlyValue) ? 0 : monthlyValue);
    setDaily(isNaN(dailyValue) ? 0 : dailyValue);
  }, [amount, rate]);

  return (
    <>
      <p>{dailyLabel} <span className="ratebold">£{daily.toFixed(2)}</span></p>
      <p>{monthlyLabel} <span className="ratebold">£{monthly.toFixed(2)}</span></p>
      <p>{annualLabel} <span className="ratebold">£{annual.toFixed(2)}</span></p>
    </>
  );
};

export default Calculate;
