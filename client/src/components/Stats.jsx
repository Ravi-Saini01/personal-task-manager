import React from 'react';
import './Stats.css';

function Stats({ tasks }) {
    const activeTasks = tasks.filter(task => !task.completed).length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <div className="stats">
            <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-number">{totalTasks}</div>
                <div className="stat-label">Total Tasks</div>
            </div>

            <div className="stat-card active-stat">
                <div className="stat-icon">⚡</div>
                <div className="stat-number">{activeTasks}</div>
                <div className="stat-label">Active</div>
            </div>

            <div className="stat-card completed-stat">
                <div className="stat-icon">✅</div>
                <div className="stat-number">{completedTasks}</div>
                <div className="stat-label">Completed</div>
            </div>

            <div className="stat-card rate-stat">
                <div className="stat-icon">📈</div>
                <div className="stat-number">{completionRate}%</div>
                <div className="stat-label">Completion Rate</div>
            </div>
        </div>
    );
}

export default Stats;