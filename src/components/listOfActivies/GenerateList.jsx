import { useEffect, useState } from "react";
import axios from "axios";
import ExpandListItem from "./ExpandListItem";

const GenerateList = () => {
  const [activity, setActivity] = useState([]);

  // console.log(activity);

  const handleGenerate = () => {
    try {
      axios
        .get("https://www.boredapi.com/api/activity")
        .then((res) => setActivity([...activity, res.data]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div>
      <button onClick={handleGenerate}>Generate Activity</button>

      <ul>
        {activity.map((item) => (
          <li key={item.key}>
            <ExpandListItem items={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenerateList;
