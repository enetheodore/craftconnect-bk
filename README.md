# React + Vite Backend

This template provides a minimal setup to support your React + Vite frontend with a robust backend.

📋 Table of Contents  
1. 🤖 Introduction  
2. ⚙️ Tech Stack  
3. 🚀 Getting Started  

---

🤖 Introduction

This platform connects unique artisan creations with discerning customers, addressing the need for a tailored e-commerce experience that showcases artisanal goods. Key benefits include:

- **Expanded Reach**: Helping artisans connect with a wider audience.
- **Curated Selection**: Providing customers with a carefully chosen array of products.
- **Robust Management Tools**: Equipping artisans with the tools they need to succeed.

The platform's goals are to drive sales, foster community, and ensure secure transactions. Designed to be scalable, secure, and user-friendly, this project represents the backend of the platform.

---

⚙️ Tech Stack  

- **Node.js**: A JavaScript runtime for building scalable network applications.
- **Express**: A web application framework for Node.js, designed for building APIs.
- **MongoDB**: A NoSQL database for storing data in a flexible, JSON-like format.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt**: A library for hashing passwords to enhance security.
- **CORS**: A package for enabling Cross-Origin Resource Sharing in your API.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **Nodemon**: A utility that monitors for changes in your source code and automatically restarts your server.

---

🚀 Getting Started

To get started with this project, follow these steps:

- **Create a `.env` file**: In the root of your project directory, include the following environment variable:
  **plaintext**
  MONGODB_URI=mongodb://your_host:27017/craft-connect
  JWT_SECRET=your_generated_jwt_secret
  **Install the dependencies: Run the following command in your terminal**:
    npm install
  **Start the development server**: Run the following command in your terminal:
    npm start
