import Task from "./Task";

function Tasks({ tasks, setTasks, onDelete, toggleRemainder }) {
  return (
    <>
      {/* empty fragments  */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          day={task.day}
          id={task.id}
          onDelete={onDelete}
          toggleRemainder={toggleRemainder}
          reminder={task.reminder}
        />
      ))}
    </>
  );
}

export default Tasks;
