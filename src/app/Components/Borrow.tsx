"use client"
import Calculate from "./Calculate";
import React from 'react';

type BorrowProps = {
  id: number;
  amount: number | string;
  rate: number | string;
  onChange: (id: number, amount: number | string, rate: number | string) => void;
  onRemove: (id: number) => void;
};

const Borrow: React.FC<BorrowProps> = ({ id, amount, rate, onChange, onRemove }) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.value, rate);
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, amount, event.target.value);
  };

  return (
       <div className="rightform">
       <fieldset>
            <legend>
              <span>I want to borrow</span>
              <button type="button" onClick={() => onRemove(id)} className="remove-button">Remove</button>
            </legend>
            <p>How much do you want to borrow</p>
            
            <div className="field-group">
            <span className="pound-sign">£</span>
            <input type="number" id={`borrowAmount-${id}`} value={amount} onChange={handleAmountChange}></input>
            </div>
            
            <p>The saving rate is</p>
            <div className="field-percentage">
              <input type="number" id={`borrowPercentage-${id}`} value={rate} onChange={handleRateChange}></input>
              <span className="percentage">%</span>
            </div>
            <Calculate 
              amount={parseFloat(amount as string) || 0} 
              rate={parseFloat(rate as string) || 0} 
              dailyLabel="Your Daily Earning" 
              monthlyLabel="Your Monthly earnings"
              annualLabel="Your annual earnings"
            />
          </fieldset>

       </div>
  );
};

export default Borrow;