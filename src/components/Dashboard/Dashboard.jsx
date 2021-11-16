import Progress from "./Progress/Progress";
import Dropdown from "./Dropdown/Dropdown";
import RunTask from "./RunTask/RunTask";

const Dashboard = () => {
  return (
    <>
      <div>
          <Progress />
          <Dropdown />
          <RunTask />
      </div>
    </>
  );
};

export default Dashboard;
