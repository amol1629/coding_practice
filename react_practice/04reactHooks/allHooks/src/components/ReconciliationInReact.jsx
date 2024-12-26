import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
    </div>
  );
};

export default ItemList;
