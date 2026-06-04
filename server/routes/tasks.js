const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', (req, res) => {
    try {
        const tasks = Task.getAll();
        // Sort by creation date (newest first)
        const sortedTasks = tasks.sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        res.json(sortedTasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET single task
router.get('/:id', (req, res) => {
    try {
        const task = Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST create new task
router.post('/', (req, res) => {
    try {
        const { title, description, dueDate } = req.body;

        // Validation
        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Title is required' });
        }

        const newTask = Task.create({
            title: title.trim(),
            description: description ? description.trim() : '',
            dueDate: dueDate || null
        });

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT update task
router.put('/:id', (req, res) => {
    try {
        const { title, description, dueDate, completed } = req.body;
        const updates = {};

        if (title !== undefined) updates.title = title.trim();
        if (description !== undefined) updates.description = description.trim();
        if (dueDate !== undefined) updates.dueDate = dueDate;
        if (completed !== undefined) updates.completed = completed;

        const updatedTask = Task.update(req.params.id, updates);

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE task
router.delete('/:id', (req, res) => {
    try {
        const deleted = Task.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;