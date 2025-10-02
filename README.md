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



