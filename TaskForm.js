// components/TaskForm.js
import { useState } from 'react';

export default function TaskForm({ onAdd, task = {}, onUpdate }) {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      onUpdate(task.id, { title, description });
    } else {
      onAdd({ title, description });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">{task.id ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}
