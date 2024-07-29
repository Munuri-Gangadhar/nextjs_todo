// components/TaskList.js
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onMarkAsDone, onEdit }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onMarkAsDone={onMarkAsDone}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
