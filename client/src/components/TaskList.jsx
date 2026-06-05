import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onEdit, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-state-content">
                    <div className="empty-icon">📭</div>
                    <h3>No tasks found</h3>
                    <p>Create your first task to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;