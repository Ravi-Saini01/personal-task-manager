import React from 'react';
import './FilterButtons.css';

function FilterButtons({ currentFilter, onFilterChange }) {
    const filters = [
        { value: 'all', label: 'All', icon: '📋', count: 'all' },
        { value: 'active', label: 'Active', icon: '⚡', count: 'active' },
        { value: 'completed', label: 'Completed', icon: '✅', count: 'completed' }
    ];

    return (
        <div className="filter-buttons">
            {filters.map(filter => (
                <button
                    key={filter.value}
                    className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter.value)}
                >
                    <span className="filter-icon">{filter.icon}</span>
                    <span className="filter-label">{filter.label}</span>
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;