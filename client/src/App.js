import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FilterButtons from './components/FilterButtons';
import Stats from './components/Stats';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks on load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      toast.error('Failed to load tasks');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
      });

      if (!response.ok) throw new Error('Failed to add task');
      const newTask = await response.json();
      setTasks([newTask, ...tasks]);
      toast.success('Task added successfully');
    } catch (error) {
      toast.error('Failed to add task');
      console.error(error);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (!response.ok) throw new Error('Failed to update task');
      const updatedTask = await response.json();
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
      toast.success('Task updated successfully');
      setEditingTask(null);
    } catch (error) {
      toast.error('Failed to update task');
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete task');
      setTasks(tasks.filter(task => task.id !== id));
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Failed to delete task');
      console.error(error);
    }
  };

  const toggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="container">
        <header className="header">
          <h1>📝 Personal Task Manager</h1>
          <p>Stay organized and productive</p>
        </header>

        <TaskForm
          onSubmit={addTask}
          editingTask={editingTask}
          onUpdate={updateTask}
          onCancel={() => setEditingTask(null)}
        />

        <Stats tasks={tasks} />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading your tasks...</p>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onEdit={setEditingTask}
            onDelete={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;