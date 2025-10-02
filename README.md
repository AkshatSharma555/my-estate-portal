<h1 align="center" style="color:#1F2933;">Architectural and Home Management System</h1>

<p align="center" style="font-size:16px; color:#555;">
Welcome to the official repository for the <strong>Estate Portal</strong> website. This is a complete full-stack MERN application built from scratch for a modern architectural and real estate development company.
</p>

<p style="color:#555;">
The primary goal of this project is to provide a stunning online presence for website, allowing them to showcase their portfolio of projects, generate leads through inquiries, and manage their content seamlessly through a secure admin panel.
</p>

<hr style="border:1px solid #C99A57;"/>

<h2 style="color:#1F2933;">✨ Features</h2>

<h3 style="color:#1F2933;">General & User-Facing:</h3>
<ul style="color:#555;">
  <li><strong>Modern UI/UX:</strong> Clean, professional, fully responsive design with Tailwind CSS.</li>
  <li><strong>Dark/Light Mode:</strong> Animated theme toggle for user preference.</li>
</ul>

<h3 style="color:#1F2933;">Advanced Animations:</h3>
<ul style="color:#555;">
  <li>Smooth page transitions using Framer Motion.</li>
  <li>GSAP-powered text animations for a premium feel.</li>
  <li>Interactive backgrounds that react to mouse movement.</li>
</ul>

<h3 style="color:#1F2933;">Dynamic Project Showcase:</h3>
<ul style="color:#555;">
  <li>Filterable and sortable grid of projects on the Projects Page.</li>
  <li>Interactive 3D "Rolling Gallery" showcasing project images.</li>
  <li>Infinite "scrolling marquee" for featured projects on the HomePage.</li>
  <li>Dedicated project pages with full gallery and detailed info.</li>
</ul>

<h3 style="color:#1F2933;">Functional Contact Form:</h3>
<ul style="color:#555;">
  <li>Contact form submits inquiries directly to backend database.</li>
</ul>

<h3 style="color:#1F2933;">Admin Panel:</h3>
<ul style="color:#555;">
  <li><strong>Secure Authentication:</strong> JWT-based login system.</li>
  <li><strong>Centralized Dashboard:</strong> Single-page dashboard for managing projects and inquiries.</li>
  <li><strong>Full CRUD Functionality:</strong>
    <ul>
      <li>Create projects with multiple image uploads.</li>
      <li>Read and display all projects and inquiries in real-time.</li>
      <li>Delete projects & inquiries directly from dashboard.</li>
    </ul>
  </li>
  <li>Client-side image compression before upload.</li>
  <li>Cloud storage using Cloudinary.</li>
</ul>

<hr style="border:1px solid #C99A57;"/>

<h2 style="color:#1F2933;">🛠️ Tech Stack</h2>

<h3 style="color:#1F2933;">Frontend:</h3>
<ul style="color:#555;">
  <li>React (with Vite)</li>
  <li>Tailwind CSS</li>
  <li>Framer Motion (UI animations and page transitions)</li>
  <li>GSAP (Advanced text animations)</li>
  <li>Swiper.js (Carousels)</li>
  <li>Axios (API communication)</li>
</ul>

<h3 style="color:#1F2933;">Backend:</h3>
<ul style="color:#555;">
  <li>Node.js</li>
  <li>Express.js</li>
</ul>

<h3 style="color:#1F2933;">Database:</h3>
<ul style="color:#555;">
  <li>MongoDB</li>
  <li>Mongoose (ODM)</li>
</ul>

<h3 style="color:#1F2933;">Authentication & Security:</h3>
<ul style="color:#555;">
  <li>JSON Web Tokens (JWT)</li>
  <li>bcryptjs (Password hashing)</li>
  <li>cors</li>
</ul>

<h3 style="color:#1F2933;">File Uploads & Management:</h3>
<ul style="color:#555;">
  <li>Cloudinary (Cloud storage for images)</li>
  <li>Multer (Middleware for handling uploads)</li>
  <li>browser-image-compression (Client-side optimization)</li>
</ul>

<h3 style="color:#1F2933;">Environment:</h3>
<ul style="color:#555;">
  <li>dotenv (Environment variables management)</li>
</ul>

<hr style="border:1px solid #C99A57;"/>

<h2 style="color:#1F2933;">🚀 Getting Started</h2>

Follow these instructions to set up and run the project on your local machine for development and testing purposes.
</p>

### Prerequisites
Before you begin, ensure you have the following software installed on your system:

- **Node.js**: Version 18.x or higher. [Download here](https://nodejs.org/)
- **Git**: Required for cloning the repository. [Download here](https://git-scm.com/)

---

<h2 style="color:#1F2933;">🛠️ Installation & Setup</h2>

### 1. Clone the Repository
First, clone the project repository to your local machine. Open your terminal and run:

```
https://github.com/AkshatSharma555/my-estate-portal.git
```

Next, navigate into the project directory:
```
cd my-estate-portal
```

<h2 style="color:#1F2933;">🖥️ Frontend Setup</h2>

2. Navigate to the Frontend Directory
```
cd frontend
```
3. Install Dependencies
```
npm install
```
4. Create the Environment Variable File (.env)
The frontend needs to know the backend server URL. Create a file named .env in the frontend directory with:

```
VITE_BACKEND_URL=http://localhost:8000
```
5. Start the Frontend Application
```
npm run dev
```
Open the displayed local URL (e.g., http://localhost:5173) in your browser to view the website.

<hr style="border:1px solid #C99A57;"/>

<h2 style="color:#1F2933;">🖥️ Backend Setup</h2>
<p style="color:#555;">
The backend requires a database connection, cloud storage for images, and several environment variables to run correctly.
</p>

6. Navigate to the Backend Directory
Open a new terminal (keep your frontend terminal running) and navigate into the backend directory:

```
cd backend
```

7. Install Dependencies
```
npm install
```
<h2 style="color:#1F2933;">8. Set Up the Database (MongoDB Atlas)</h2>
<p style="color:#555;">This project uses MongoDB Atlas for the database. Follow these steps to create a free database:</p>

<ol style="color:#555;">
  <li>
    <strong>Create an Account:</strong> Go to <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a> and sign up for a free account.
  </li>
  <li>
    <strong>Create a New Project:</strong> After logging in, create a new project (e.g., <code>Project</code>) and proceed.
  </li>
  <li>
    <strong>Build a Database:</strong>
    <ul>
      <li>Click the <strong>Build a Database</strong> button.</li>
      <li>Select the <strong>M0 FREE shared plan</strong>.</li>
      <li>Leave the cloud provider (e.g., AWS) and region as default.</li>
      <li>Click <strong>Create</strong>. Cluster creation will take a few minutes.</li>
    </ul>
  </li>
  <li>
    <strong>Create a Database User:</strong>
    <ul>
      <li>Go to <strong>SECURITY → Database Access → Add New Database User</strong>.</li>
      <li>Enter a username (e.g., <code>user</code>) and password. Save it securely.</li>
      <li>Click <strong>Add User</strong>.</li>
    </ul>
  </li>
  <li>
    <strong>Configure Network Access:</strong>
    <ul>
      <li>Go to <strong>SECURITY → Network Access → Add IP Address</strong>.</li>
      <li>Select <strong>ALLOW ACCESS FROM ANYWHERE</strong> (0.0.0.0/0).</li>
      <li>Click <strong>Confirm</strong> and wait until status changes to <strong>Active</strong>.</li>
    </ul>
  </li>
  <li>
    <strong>Get Your Connection String:</strong>
    <ul>
      <li>Go back to your cluster view and click <strong>Connect → Drivers</strong>.</li>
      <li>Copy the provided connection string, it will look like: <code>mongodb+srv://&lt;username&gt;:&lt;password&gt;@...</code></li>
    </ul>
  </li>
</ol>

<h2 style="color:#1F2933;">9. Set Up Image Storage (Cloudinary)</h2>
<p style="color:#555;">This project uses Cloudinary to store and manage image uploads:</p>

<ol style="color:#555;">
  <li>
    <strong>Create an Account:</strong> Go to <a href="https://cloudinary.com/" target="_blank">Cloudinary</a> and sign up for a free account.
  </li>
  <li>
    <strong>Find Your Credentials:</strong> After logging in, copy your <strong>Cloud Name</strong>, <strong>API Key</strong>, and <strong>API Secret</strong> from the dashboard.
  </li>
</ol>

<h2 style="color:#1F2933;">10. Create the Backend Environment File (.env)</h2>
<p style="color:#555;">In the <code>backend</code> directory, create a new file named <code>.env</code> and copy the following content. Replace all placeholder values (<code>YOUR_...</code>) with the credentials from MongoDB Atlas and Cloudinary:</p>

```
PORT=8000

# MongoDB Atlas connection string
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING

# JWT configuration
ACCESS_TOKEN_SECRET=jmmhomesloginsupersecretkey
ACCESS_TOKEN_EXPIRY=1d

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET

# Frontend URL for CORS
CORS_ORIGIN=http://localhost:5173
```

11. Start the Backend Server
```
npm run dev
```

If everything is configured correctly, the terminal should show:
```
MongoDB Connected!
Server is running at port : 8000
```

With both frontend and backend servers running, the application is now fully functional on your local machine.

<hr style="border:1px solid #C99A57; margin:30px 0;"/>

<h2 style="color:#1F2933;">🌟 Exploring the Application</h2>
<p style="color:#555; font-size:15px;">
Once both frontend and backend servers are running, the application is fully functional.
</p>

<ul style="color:#555; font-size:15px;">
  <li>
    <strong>Main Website:</strong> Navigate to 
    <a href="http://localhost:5173" target="_blank" style="color:#C99A57; text-decoration:none;">http://localhost:5173</a> 
    in your browser to view the client-facing website. Browse all pages, view project details, and test the contact form.
  </li>
  <li>
    <strong>Admin Panel:</strong> Access the admin section by clicking the <strong>Admin</strong> link in the footer or navigate directly to 
    <code>/admin/login</code>. Log in to create new projects with image uploads and manage all existing content.
  </li>
</ul>

<h2 style="color:#1F2933;">🙏 Support & Acknowledgements</h2>
<p style="color:#555; font-size:15px;">
This project represents a complete end-to-end implementation of a modern MERN stack application, incorporating:
</p>

<ul style="color:#555; font-size:15px;">
  <li>Professional project structure</li>
  <li>Advanced frontend animations</li>
  <li>Full backend functionality</li>
</ul>

<p style="color:#555; font-size:15px;">
If you found this project helpful, learned something from the codebase, or appreciate the effort, please consider giving it a <span style="color:#C99A57;">⭐ Star</span> on GitHub. Your support is greatly appreciated and helps showcase this work to a wider community.
</p>

<p style="color:#555; font-size:15px; font-style:italic;">
Thank you for visiting my repository!
</p>


