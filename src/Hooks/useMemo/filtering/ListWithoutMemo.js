import { useMemo, useState } from "react";

function ListWithoutMemo() {
  const [searchItem, setSearchItem] = useState("");
  const [counter, setCounter] = useState(0);

  const items = Array.from({ length: 100 }, (_, index) => `item ${index + 1}`);

  /*   const filteredItems = items.filter((item) => {
    console.log("Filtering items...");
    return item.toLowerCase().includes(searchItem.toLowerCase());
  }); */

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
  }, [searchItem]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setCounter(counter + 1)}>
        Re-Render{counter}
      </button>
    </div>
  );
}

export default ListWithoutMemo;
