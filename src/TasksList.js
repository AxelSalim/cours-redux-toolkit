 import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks)
  return (
    <>
      {/* {props.tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))} */}
    </>
  );
};

export default TasksList;
