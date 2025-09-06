# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js frontend and Node.js/Express backend. This project showcases professional experience, skills, projects, and includes an interactive comment system.

## Live Demo

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
- **URL**: https://www.danielatx.me/

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (v22.19.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) - Package manager for JavaScript
- **MongoDB** - For database functionality (optional if you don't need comments)

### Verify Installation
```bash
node --version
```

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd new-website
```

### 2. Frontend Setup (React.js)

Navigate to the client-side directory and install dependencies:

```bash
cd client-side
npm install
```

**Available Scripts:**
- `npm start` - Runs the app in development mode (opens on http://localhost:3000)
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

**Start the Frontend:**
```bash
npm start
```

The React development server will start and automatically open your browser to `http://localhost:3000`.

### 3. Backend Setup (Node.js/Express)

Navigate to the server-side directory and install dependencies:

```bash
cd server-side
npm install
```

**Start the Backend:**
```bash
npm start
```

The Express server will start on `http://localhost:8000` (or the port specified in your environment variables).

### 4. Environment Configuration

Create a `.env` file in the `server-side` directory:

```bash
MONGO_URI=should_you_choose_to_setup_a_database_here
PORT=8000
```

## 🏗️ Project Structure

This project follows a clear separation between frontend and backend:

```
new-website/
├── client-side/          # React.js Frontend
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   ├── build/            # Production build
│   └── package.json      # Frontend dependencies
├── server-side/          # Node.js Backend
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
└── README.md
```

### Client-Side Structure (`./client-side/`)

#### `/public/` Directory
Contains static assets that are served directly:

- **`index.html`** - Main HTML template
- **`manifest.json`** - PWA configuration
- **`robots.txt`** - SEO configuration
- **`favicon.ico`** - Website icon
- **`images/`** - All image assets
  - `gallery/` - Photo gallery images (photo1.png - photo27.png)
  - `portfolio/` - Project showcase images organized by category:
    - `airline/` - Aviation-related projects
    - `asl/` - American Sign Language projects
    - `first-website/` - Early web development work
    - `medical/` - Healthcare technology projects
    - `naval/` - Naval engineering projects
    - `nlp/` - Natural Language Processing projects
    - `online24/` - Online gaming projects
    - `speech/` - Speech recognition projects
  - `myProfile.jpg` - Profile picture
- **`social/`** - Social media assets (resume PDF)
- **`portfolio_shared_data.json`** - Shared portfolio data
- **`res_primaryLanguage.json`** - Language configuration

#### `/src/` Directory
Contains the React application source code:

- **`App.js`** - Main application component
- **`App.scss`** - Global styles
- **`index.js`** - Application entry point
- **`index.scss`** - Base styles
- **`serviceWorker.js`** - PWA service worker

#### `/src/components/` Directory
React components organized by functionality:

- **`Header.js`** - Navigation and header section
- **`About.js`** - About me section
- **`Experience.js`** - Professional experience timeline
- **`Skills.js`** - Technical skills showcase
- **`Projects.js`** - Portfolio projects display
- **`ProjectDetailsModal.js`** - Project detail popup
- **`PhotoGallery.jsx`** - Image gallery component
- **`Comments.js`** - Interactive comment system
- **`SocialMedia.js`** - Social media links
- **`Footer.js`** - Footer section

#### `/src/scss/` Directory
Styling and theming:

- **`themes/`** - Theme configurations
  - `theme-dark.scss` - Dark mode styles
  - `theme-light.scss` - Light mode styles
- **`dark-slider.scss`** - Dark theme slider styles
- **`light-slider.scss`** - Light theme slider styles

### Server-Side Structure (`./server-side/`)

#### Main Files:
- **`server.js`** - Express server with MongoDB integration
- **`package.json`** - Backend dependencies and scripts

#### Key Features:
- **RESTful API** - Handles comment CRUD operations
- **MongoDB Integration** - Stores comments and user data
- **CORS Support** - Enables cross-origin requests
- **Environment Variables** - Secure configuration management

## Database Configuration

### MongoDB Setup

This project uses MongoDB to store comments and user interactions. To set up the database:

1. **Create a MongoDB Atlas account** (free tier available)
2. **Create a new cluster**
3. **Get your connection string**
4. **Update the `.env` file** with your MongoDB URI

### Database Schema

The application uses the following collections:

- **`comments`** - Stores user comments with:
  - `username` - Commenter's name
  - `text` - Comment content
  - `time` - Timestamp

## 🔧 Configuration

### Frontend Configuration

Update API endpoints in `./client-side/src/components/Comments.js`:

```javascript
const API_BASE_URL = 'http://localhost:8000/api'; // For dev
// const API_BASE_URL = 'https://your-backend-deployment-url.com/api'; // For prod
```

### Backend Configuration

The server automatically:
- Creates the `comments` collection if it doesn't exist
- Handles CORS for cross-origin requests
- Provides RESTful endpoints for comment management

## Deployment

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy automatically on push to main branch

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables (MONGO_URI, PORT)

## Features

- **Responsive Design** - Works on all device sizes
- **Dark/Light Theme** - Toggle between themes
- **Interactive Portfolio** - Project showcases with modals
- **Photo Gallery** - Image carousel with navigation
- **Comment System** - User interaction with backend storage
- **PWA Support** - Progressive Web App capabilities
- **SEO Optimized** - Meta tags and structured data

## Technologies Used

### Frontend
- **React.js** (v16.13.1) - UI framework
- **Bootstrap** (v4.5.2) - CSS framework
- **SCSS** - CSS preprocessor
- **jQuery** (v3.5.1) - DOM manipulation
- **Axios** (v1.6.2) - HTTP client
- **React Awesome Slider** - Image carousel
- **React Vertical Timeline** - Experience timeline

### Backend
- **Node.js** (v22.19.0) - Runtime environment
- **Express.js** (v4.18.2) - Web framework
- **MongoDB** (v6.19.0) - Database
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **dotenv** (v17.2.1) - Environment variable management

## Development Notes

- The frontend uses class components (React 16.x style)
- Backend uses ES6 modules (`"type": "module"` in package.json)
- All images are optimized and organized by project category
- The comment system is optional - you can remove it if you don't need backend functionality
