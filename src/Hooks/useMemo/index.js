import { useMemo, useState } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([5, 3, 8, 1, 2]);

  /* function sortedItems() {
    console.log("Sorting the items");
    return items.sort((a, b) => a - b);
  } */

  const sortedItems = useMemo(() => {
    console.log("Sorting the items");
    return items.sort((a, b) => a - b);
  }, [items]);
  //   cache the result of the function

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h3>Sorted Items</h3>
      <ul>
        {sortedItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveComponent;
