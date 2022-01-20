import Task from "./Task"

const Tasks = ({tasks, onDelete , onToggle}) => {
  return (
        <>
          {tasks.map((task, index) => (
            <Task key={index}
              taskList={task}
              onDelete={onDelete}
              onToggle={ onToggle}/>
         ))}
        </>
    )
}

export default Tasks
