"use client"
import Calculate from "./Calculate";
import React from 'react';

type SaveProps = {
  id: number;
  amount: number | string;
  rate: number | string;
  onChange: (id: number, amount: number | string, rate: number | string) => void;
  onRemove: (id: number) => void;
};

const Save: React.FC<SaveProps> = ({ id, amount, rate, onChange, onRemove }) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.value, rate);
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, amount, event.target.value);
  };

  return (
    <div className="leftform">
        <form id={`saveForm-${id}`}>
          <fieldset>
            <legend>
              <span>I want to save</span>
              <button type="button" onClick={() => onRemove(id)} className="remove-button">Remove</button>
            </legend>
            <p>How much do you want to save</p>
            
            <div className="field-group">
            <span className="pound-sign">£</span>
            <input type="number" id={`saveAmount-${id}`} value={amount} onChange={handleAmountChange}></input>
            </div>
            
            <p>The saving rate is</p>
            
            <div className="field-percentage">
              <input type="number" id={`savePercentage-${id}`} value={rate} onChange={handleRateChange}></input>
              <span className="percentage">%</span>
            </div>
            <Calculate 
              amount={parseFloat(amount as string) || 0} 
              rate={parseFloat(rate as string) || 0} 
              dailyLabel="Your Daily Payment is" 
              monthlyLabel="Your Monthly Payment is"
              annualLabel="Your Annual Payment"
            />
          </fieldset>
        </form>
       </div>
  );
};

export default Save;