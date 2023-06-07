import { useState } from "react";

const RobotList = () => {
  const [robotList, setRobotList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "https://robohash.org";
    setRobotList([...robotList, `${url}/${search}`]);
    setSearch("");
  };

  const handleRemove = (removeRobot) => {
    const newRobot = robotList.filter((robot) => robot !== removeRobot);
    setRobotList(newRobot);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="robot-form">
          <input
            type="text"
            placeholder="Search robot"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        {robotList?.map((robot, index) => (
          <img
            key={index}
            src={robot}
            alt=""
            onClick={() => handleRemove(robot)}
          />
        ))}
      </div>
    </>
  );
};
export default RobotList;
