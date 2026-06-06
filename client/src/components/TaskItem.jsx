import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
    const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date();
    const dueDateObj = task.dueDate ? new Date(task.dueDate) : null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday = dueDateObj && dueDateObj.toDateString() === today.toDateString();

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
            <div className="task-checkbox">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id, task.completed)}
                    id={`task-${task.id}`}
                />
                <label htmlFor={`task-${task.id}`}></label>
            </div>

            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && <p className="task-description">{task.description}</p>}
                <div className="task-meta">
                    {task.dueDate && (
                        <span className={`task-due-date ${isOverdue ? 'overdue-label' : ''} ${isToday ? 'today-label' : ''}`}>
                            📅 {isToday ? 'Today' : new Date(task.dueDate).toLocaleDateString()}
                            {isOverdue && ' ⚠️ Overdue'}
                        </span>
                    )}
                    <span className="task-created">
                        🕒 Created: {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>

            <div className="task-actions">
                <button className="btn-edit" onClick={() => onEdit(task)} title="Edit task">
                    ✏️ Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(task.id)} title="Delete task">
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;