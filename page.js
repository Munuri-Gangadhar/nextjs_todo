// pages/index.js
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import axios from 'axios';

export default function Home({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/data/tasks.json');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false, updatedAt: new Date().toISOString() };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask, updatedAt: new Date().toISOString() } : task)));
    setEditingTask(null);
  };

  const markAsDone = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() } : task)));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <TaskForm onAdd={addTask} task={editingTask} onUpdate={updateTask} />
      <TaskList tasks={filteredTasks} onMarkAsDone={markAsDone} onEdit={handleEdit} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch initial data for server-side rendering
  const response = await axios.get('http://localhost:3000/data/tasks.json');
  return {
    props: {
      initialTasks: response.data
    }
  };
}
