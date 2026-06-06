const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const dataFile = path.join(dataDir, 'tasks.json');

// Initialize or fix tasks.json
const initDataFile = () => {
    try {
        if (!fs.existsSync(dataFile)) {
            // File doesn't exist, create it
            fs.writeFileSync(dataFile, JSON.stringify([]));
            console.log('✅ Created new tasks.json file');
        } else {
            // File exists, check if it's valid JSON
            const content = fs.readFileSync(dataFile, 'utf8');
            if (!content || content.trim() === '') {
                // Empty file, write valid JSON
                fs.writeFileSync(dataFile, JSON.stringify([]));
                console.log('✅ Fixed empty tasks.json file');
            } else {
                // Try to parse it
                JSON.parse(content);
                console.log('✅ tasks.json file is valid');
            }
        }
    } catch (error) {
        console.error('Error initializing data file:', error);
        // If error, recreate the file
        fs.writeFileSync(dataFile, JSON.stringify([]));
        console.log('✅ Recreated tasks.json file');
    }
};

// Initialize the data file
initDataFile();

// Helper functions with error handling
const readTasks = () => {
    try {
        const data = fs.readFileSync(dataFile, 'utf8');
        if (!data || data.trim() === '') {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tasks:', error);
        return [];
    }
};

const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error writing tasks:', error);
    }
};

// GET all tasks
app.get('/api/tasks', (req, res) => {
    try {
        const tasks = readTasks();
        const sortedTasks = tasks.sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        res.json(sortedTasks);
    } catch (error) {
        console.error('GET error:', error);
        res.status(500).json({ error: error.message });
    }
});

// POST create task
app.post('/api/tasks', (req, res) => {
    try {
        console.log('Received task data:', req.body);

        const { title, description, dueDate } = req.body;

        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Title is required' });
        }

        const tasks = readTasks();
        const newTask = {
            id: uuidv4(),
            title: title.trim(),
            description: description || '',
            dueDate: dueDate || null,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        console.log('Creating task:', newTask);

        tasks.push(newTask);
        writeTasks(tasks);

        res.status(201).json(newTask);
    } catch (error) {
        console.error('POST error:', error);
        res.status(500).json({ error: error.message });
    }
});

// PUT update task
app.put('/api/tasks/:id', (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const tasks = readTasks();
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            ...updates,
            updatedAt: new Date().toISOString()
        };

        writeTasks(tasks);
        res.json(tasks[taskIndex]);
    } catch (error) {
        console.error('PUT error:', error);
        res.status(500).json({ error: error.message });
    }
});

// DELETE task
app.delete('/api/tasks/:id', (req, res) => {
    try {
        const { id } = req.params;
        const tasks = readTasks();
        const filteredTasks = tasks.filter(t => t.id !== id);

        if (filteredTasks.length === tasks.length) {
            return res.status(404).json({ error: 'Task not found' });
        }

        writeTasks(filteredTasks);
        res.status(204).send();
    } catch (error) {
        console.error('DELETE error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`✅ API endpoint: http://localhost:${PORT}/api/tasks`);
    console.log(`✅ Data file: ${dataFile}`);
});