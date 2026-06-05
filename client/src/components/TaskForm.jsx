import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ onSubmit, editingTask, onUpdate, onCancel }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description || '',
                dueDate: editingTask.dueDate ? editingTask.dueDate.split('T')[0] : ''
            });
        } else {
            setFormData({
                title: '',
                description: '',
                dueDate: ''
            });
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            alert('Please enter a task title');
            return;
        }

        if (editingTask) {
            onUpdate(editingTask.id, formData);
        } else {
            onSubmit(formData);
        }

        setFormData({ title: '', description: '', dueDate: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="task-form-container">
            <h2>{editingTask ? '✏️ Edit Task' : '➕ Add New Task'}</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="What needs to be done?"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <textarea
                        name="description"
                        placeholder="Add a description (optional)"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        className="form-textarea"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="form-date"
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn-primary">
                        {editingTask ? 'Update Task' : 'Add Task'}
                    </button>
                    {editingTask && (
                        <button type="button" className="btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default TaskForm;