const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dataPath = path.join(__dirname, '../data/tasks.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, '../data'))) {
    fs.mkdirSync(path.join(__dirname, '../data'), { recursive: true });
}

// Initialize tasks.json if it doesn't exist
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
}

class Task {
    static getAll() {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    }

    static saveAll(tasks) {
        fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
    }

    static create(taskData) {
        const tasks = this.getAll();
        const newTask = {
            id: uuidv4(),
            title: taskData.title,
            description: taskData.description || '',
            dueDate: taskData.dueDate || null,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        tasks.push(newTask);
        this.saveAll(tasks);
        return newTask;
    }

    static update(id, updates) {
        const tasks = this.getAll();
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) return null;

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            ...updates,
            updatedAt: new Date().toISOString()
        };

        this.saveAll(tasks);
        return tasks[taskIndex];
    }

    static delete(id) {
        const tasks = this.getAll();
        const filteredTasks = tasks.filter(t => t.id !== id);

        if (filteredTasks.length === tasks.length) return false;

        this.saveAll(filteredTasks);
        return true;
    }

    static findById(id) {
        const tasks = this.getAll();
        return tasks.find(t => t.id === id);
    }
}

module.exports = Task;