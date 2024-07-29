// components/TaskItem.js
import { useState } from 'react';

export default function TaskItem({ task, onMarkAsDone, onEdit }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h3 onClick={() => setExpanded(!expanded)}>{task.title}</h3>
      {expanded && (
        <div>
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.updatedAt).toLocaleString()}</small>
          <button onClick={() => onMarkAsDone(task.id)}>
            {task.completed ? 'Mark as Not Done' : 'Mark as Done'}
          </button>
          <button onClick={() => onEdit(task)}>Edit</button>
        </div>
      )}
    </div>
  );
}
