"use client";
import { useState } from "react";
import Borrow from "./Components/Borrow";
import Save from "./Components/Save";
import TotalSave from "./Components/TotalSave";
import TotalBorrow from "./Components/TotalBorrow";

// Define types for items
type SaveItem = { id: number; amount: number | string; rate: number | string };
type BorrowItem = {
  id: number;
  amount: number | string;
  rate: number | string;
};

export default function Home() {
  const [saveItems, setSaveItems] = useState<SaveItem[]>([
    { id: 1, amount: "", rate: "" },
  ]);
  const [borrowItems, setBorrowItems] = useState<BorrowItem[]>([
    { id: 1, amount: "", rate: "" },
  ]);

  const handleAddSave = () => {
    setSaveItems([...saveItems, { id: Date.now(), amount: "", rate: "" }]);
  };

  const handleAddBorrow = () => {
    setBorrowItems([...borrowItems, { id: Date.now(), amount: "", rate: "" }]);
  };

  const handleSaveChange = (
    id: number,
    newAmount: number | string,
    newRate: number | string
  ) => {
    const newItems = saveItems.map((item) =>
      item.id === id ? { ...item, amount: newAmount, rate: newRate } : item
    );
    setSaveItems(newItems);
  };

  const handleBorrowChange = (
    id: number,
    newAmount: number | string,
    newRate: number | string
  ) => {
    const newItems = borrowItems.map((item) =>
      item.id === id ? { ...item, amount: newAmount, rate: newRate } : item
    );
    setBorrowItems(newItems);
  };

  const handleRemoveSave = (id: number) => {
    if (saveItems.length > 1) {
      setSaveItems(saveItems.filter((item) => item.id !== id));
    }
  };

  const handleRemoveBorrow = (id: number) => {
    if (borrowItems.length > 1) {
      setBorrowItems(borrowItems.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <h1>Interest Calculator</h1>
      <main>
        <div className="save-container">
          {saveItems.map((item) => (
            <Save
              key={item.id}
              id={item.id}
              amount={item.amount}
              rate={item.rate}
              onChange={handleSaveChange}
              onRemove={handleRemoveSave}
            />
          ))}
          <button onClick={handleAddSave}>Add another saving</button>
          <TotalSave items={saveItems} />
        </div>
        <div className="borrow-container">
          {borrowItems.map((item) => (
            <Borrow
              key={item.id}
              id={item.id}
              amount={item.amount}
              rate={item.rate}
              onChange={handleBorrowChange}
              onRemove={handleRemoveBorrow}
            />
          ))}
          <button onClick={handleAddBorrow}>Add another borrow</button>
          <TotalBorrow items={borrowItems} />
        </div>
      </main>
    </>
  );
}
