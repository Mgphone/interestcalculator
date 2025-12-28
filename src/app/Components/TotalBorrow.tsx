"use client";
import React from "react";

type BorrowItem = {
  id: number;
  amount: number | string;
  rate: number | string;
};

type TotalBorrowProps = {
  items: BorrowItem[];
};

const TotalBorrow: React.FC<TotalBorrowProps> = ({ items }) => {
  let totalDaily = 0;
  let totalMonthly = 0;
  let totalAnnual = 0;

  items.forEach((item) => {
    const amount = parseFloat(item.amount as string) || 0;
    const rate = parseFloat(item.rate as string) || 0;
    const annual = (amount * rate) / 100;
    const monthly = annual / 12;
    const daily = monthly / 30;
    totalAnnual += isNaN(annual) ? 0 : annual;
    totalMonthly += isNaN(monthly) ? 0 : monthly;
    totalDaily += isNaN(daily) ? 0 : daily;
  });
  //add since today date
  let today = new Date();
  const todayValue = today.getDate() * totalDaily;
  return (
    <div className="total-section">
      <h3>Total Borrowings</h3>
      <p>
        Total Daily Payment:{" "}
        <span className="ratebold">£{totalDaily.toFixed(2)}</span>
      </p>
      <p>
        Interested Earned this Month:{" "}
        <span className="ratebold">£{todayValue.toFixed(2)}</span>
      </p>
      <p>
        Total Monthly Payment:{" "}
        <span className="ratebold">£{totalMonthly.toFixed(2)}</span>
      </p>
      <p>
        Total Annual Payment:{" "}
        <span className="ratebold">£{totalAnnual.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default TotalBorrow;
