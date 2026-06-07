
<h1 align="center">📝 Personal Task Manager</h1>

<p align="center">
  <strong>Exercise 1: Personal Task Manager - Full Stack Assessment Project</strong>
</p>


<h2>📖 Project Title & Brief Description</h2>

<p>
  <strong>Personal Task Manager</strong> - A full-stack task management application built with React and Node.js. 
  This is <strong>Exercise 1: Personal Task Manager</strong> from the Studio Graphene Full Stack Developer assessment. 
  The app allows users to create, view, update, delete, and filter tasks with features like due dates, 
  task completion tracking, and visual indicators for overdue tasks. Tasks persist across server restarts 
  using JSON file storage.
</p>

<hr>

<h2>🌐 Live Demo Link</h2>

<table>
  <tr>
    <th>Component</th>
    <th>URL</th>
  </tr>
  <tr>
    <td><strong>Frontend (Vercel)</strong></td>
    <td><a href="https://personal-task-manager-orpin.vercel.app">https://personal-task-manager-orpin.vercel.app</a></td>
  </tr>
  <tr>
    
  </tr>
</table>

<div style="background-color: #fff3cd; padding: 1rem; border-left: 4px solid #ffc107; margin: 1rem 0; border-radius: 4px;">
  <strong>⚠️ Note:</strong> The backend uses Render's free tier, which sleeps after 15 minutes of inactivity. 
  The first request may take <strong>30-50 seconds</strong> to wake up. This is normal for free hosting.
</div>

<hr>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>React 18</strong> - UI library with functional components and Hooks for state management</li>
  <li><strong>Axios</strong> - HTTP client for API requests to the backend</li>
  <li><strong>React Hot Toast</strong> - Toast notifications for user feedback (success/error messages)</li>
  <li><strong>CSS3</strong> - Custom styling with responsive design, animations, and gradient backgrounds</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js</strong> - JavaScript runtime for the server</li>
  <li><strong>Express.js</strong> - Web framework for building REST API endpoints</li>
  <li><strong>UUID</strong> - For generating unique task identifiers</li>
  <li><strong>File System (fs)</strong> - JSON file storage for data persistence across server restarts</li>
</ul>

<h3>Development & Deployment</h3>
<ul>
  <li><strong>Nodemon</strong> - Development tool for auto-restarting the server on changes</li>
  <li><strong>Vercel</strong> - Frontend hosting platform</li>
  <li><strong>Render</strong> - Backend hosting platform (free tier)</li>
</ul>

<h3>Why These Choices?</h3>
<ul>
  <li><strong>React + Node.js</strong> aligns with the assessment's tech stack requirements</li>
  <li><strong>JSON file storage</strong> provides persistence without needing a database (bonus requirement)</li>
  <li><strong>Functional components with Hooks</strong> follows modern React best practices</li>
  <li><strong>CSS3 with animations</strong> delivers a polished UI without overcomplicating</li>
</ul>

<hr>

<h2>💻 How to Run Locally</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v14 or higher) - <a href="https://nodejs.org">Download here</a></li>
</ul>

<h3>Installation Steps</h3>

<ol>
  <li>
    <strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/Ravi-Saini01/personal-task-manager.git
cd personal-task-manager</code></pre>
  </li>

  <li>
    <strong>Install backend dependencies</strong>
    <pre><code>cd server
npm install</code></pre>
  </li>

  <li>
    <strong>Install frontend dependencies</strong>
    <pre><code>cd ../client
npm install</code></pre>
  </li>

  <li>
    <strong>Start the backend server</strong>
    <pre><code>cd ../server
npm run dev</code></pre>
    <p>You should see: <code>Server running on port 5000</code></p>
  </li>

  <li>
    <strong>Start the frontend application (in a new terminal)</strong>
    <pre><code>cd client
npm start</code></pre>
  </li>

  <li>
    <strong>Open your browser</strong> and navigate to <code>http://localhost:3000</code>
  </li>
</ol>

<p>The backend will run on <code>http://localhost:5000</code> and the frontend on <code>http://localhost:3000</code></p>

<hr>

<h2>📡 API Documentation</h2>

<h3>Base URL</h3>
<ul>
  <li>Local: <code>http://localhost:5000/api</code></li>
  <li>Production: <code>https://personal-task-manager-o4ph.onrender.com/api/tasks</code></li>
</ul>

<h3>Endpoints</h3>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
      <th>Request Body</th>
      <th>Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/tasks</code></td>
      <td>Get all tasks</td>
      <td>-</td>
      <td>Array of task objects</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/tasks/:id</code></td>
      <td>Get single task</td>
      <td>-</td>
      <td>Single task object</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/tasks</code></td>
      <td>Create new task</td>
      <td><code>{ title, description, dueDate }</code></td>
      <td>Created task object</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/tasks/:id</code></td>
      <td>Update task</td>
      <td><code>{ title, description, dueDate, completed }</code></td>
      <td>Updated task object</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/tasks/:id</code></td>
      <td>Delete task</td>
      <td>-</td>
      <td>204 No Content</td>
    </tr>
  </tbody>
</table>

<h3>Task Object Structure</h3>

<pre><code>{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Complete project",
  "description": "Finish the task manager assessment",
  "dueDate": "2024-12-31T00:00:00.000Z",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}</code></pre>

<h3>Example API Call</h3>

<p><strong>Create a task:</strong></p>

<pre><code>curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries","description":"Milk and eggs","dueDate":"2024-12-25"}'</code></pre>

<hr>

<h2>📁 Project Structure</h2>

<div class="tree">
<pre>
personal-task-manager/
│
├── client/                     # React frontend
│   ├── public/
│   │   └── index.html         # Main HTML file
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── TaskForm.jsx   # Add/Edit task form
│   │   │   ├── TaskForm.css
│   │   │   ├── TaskList.jsx   # Task listing component
│   │   │   ├── TaskList.css
│   │   │   ├── TaskItem.jsx   # Individual task card
│   │   │   ├── TaskItem.css
│   │   │   ├── FilterButtons.jsx # Status filter buttons
│   │   │   ├── FilterButtons.css
│   │   │   ├── Stats.jsx      # Task statistics display
│   │   │   └── Stats.css
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Global styles
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Base styles
│   ├── package.json           # Frontend dependencies
│   
│
├── server/                     # Node.js backend
│   ├── data/
│   │   └── tasks.json         # Persistent JSON storage
│   ├── models/
│   │   └── Task.js            # Task model (CRUD operations)
│   ├── routes/
│   │   └── tasks.js           # REST API routes
│   ├── server.js              # Express server setup
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation (this file)
</pre>
</div>

<hr>

<h2>✅ Features Implemented</h2>

<h3>Must Have (✅ All Complete)</h3>
<ul>
  <li>Add tasks with title (required), optional description, and due date</li>
  <li>View all tasks sorted by creation date (newest first)</li>
  <li>Mark tasks as complete/incomplete with toggle</li>
  <li>Edit task title, description, or due date</li>
  <li>Delete tasks with confirmation prompt</li>
  <li>Filter tasks by status (All, Active, Completed)</li>
</ul>

<h3>Should Have (✅ All Complete)</h3>
<ul>
  <li>Show count of active vs completed tasks</li>
  <li>Visually distinguish overdue tasks (red highlight and warning icon)</li>
  <li>Empty state UI when no tasks exist</li>
  <li>Responsive design for mobile devices</li>
</ul>

<h3>Nice to Have (Bonus - ✅ Complete)</h3>
<ul>
  <li>Persist tasks across server restarts (JSON file storage)</li>
  <li>Visual overdue indicators with "Today" label</li>
  <li>Completion rate percentage in stats</li>
  <li>Toast notifications for user actions</li>
  <li>Loading states with spinner animation</li>
</ul>

<hr>

<h2>🚀 Next Steps</h2>

<h3>What I Chose Not to Do (Due to Time Constraints)</h3>

<ol>
  <li><strong>Drag-and-drop reordering</strong> - Would require react-beautiful-dnd library and backend sorting logic</li>
  <li><strong>Search by title</strong> - Implement with debounced input and frontend filtering</li>
  <li><strong>Unit & Integration tests</strong> - Would add Jest for backend and React Testing Library for frontend</li>
  <li><strong>User authentication</strong> - Multi-user support with JWT and bcrypt</li>
  <li><strong>Database migration</strong> - Move from JSON to PostgreSQL or MongoDB for production</li>
</ol>

<h3>What I Would Build Next</h3>

<p>With more time, I would implement:</p>

<ol>
  <li><strong>Search Functionality</strong> - Real-time search with debouncing and highlighted matching text</li>
  <li><strong>Drag-and-Drop Reordering</strong> - Task prioritization with persistent order storage</li>
  <li><strong>Due Date Reminders</strong> - Email notifications for upcoming/overdue tasks</li>
  <li><strong>Task Categories/Tags</strong> - Color-coded tags and filtering by category</li>
  <li><strong>Dark Mode</strong> - Theme switching with CSS variables and localStorage persistence</li>
  <li><strong>Export/Import</strong> - Backup tasks as JSON/CSV and restore functionality</li>
  <li><strong>Keyboard Shortcuts</strong> - Power user shortcuts (Ctrl+N for new task, etc.)</li>
  <li><strong>Progress Dashboard</strong> - Charts showing task completion trends over time</li>
  <li><strong>PWA Support</strong> - Offline functionality and installable app</li>
  <li><strong>Rate Limiting</strong> - API protection with express-rate-limit</li>
</ol>

<hr>

<h2>📦 Deployment</h2>

<h3>Backend (Render)</h3>
<ul>
  <li>Auto-deploys from GitHub on push to main branch</li>
  <li>Free tier with 750 hours/month</li>
  <li>Sleeps after 15 minutes of inactivity</li>
</ul>

<h3>Frontend (Vercel)</h3>
<ul>
  <li>Auto-deploys from GitHub on push to main branch</li>
  <li>Free tier with 100GB bandwidth/month</li>
  <li>Automatic SSL certificate</li>
</ul>

<hr>

<h2>📝 Assessment Notes</h2>

<p>
  This project was completed for the <strong>Studio Graphene Full Stack Developer Assessment</strong>.
  Time spent: ~8-10 hours. All core requirements have been met, and bonus features have been implemented.
</p>

<hr>

<p align="center">
  Built with ❤️ for the Studio Graphene Assessment
</p>