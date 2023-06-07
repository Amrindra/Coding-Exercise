import { useState } from "react";

const ExpandListItem = ({ items }) => {
  const [showExpandList, setShowExpandList] = useState(false);

  console.log(items);

  return (
    <>
      <div className="activity">
        <h3>{items.activity}</h3>
        <button onClick={() => setShowExpandList(!showExpandList)}>
          {showExpandList ? "Colapse" : "Expand"}
        </button>
      </div>
      {showExpandList && (
        <ul>
          {/* Render everything in the items object except activity */}
          {Object.keys(items)
            .filter((key) => key !== "activity")
            .map((item) => (
              <li key={item}> {`${item}: ${items[item]}`}</li>
            ))}
        </ul>
      )}
    </>
  );
};

export default ExpandListItem;
