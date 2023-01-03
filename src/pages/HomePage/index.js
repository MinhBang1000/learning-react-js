import Control from "../../components/Control";
import TaskList from "../../components/TaskList";
import Card from "../../components/Card";

const HomePage = () => {
  return (
    <>
      <Card>
        <Control />
      </Card>
      <Card>
        <TaskList />
      </Card>
    </>
  );
};

export default HomePage;
