Hello, welcome to my personal portfolio project

This portfolio consists of both a frontend page and simple backend server. If you don't want to set up a backend server, you can simply remove the comment section from the client-side.

This website is currently deployed on vercel and the backend deployed on render.

Setting Up:
Navigate to ./client-side and run npm install before npm start. Your frontend should now be running on your local computer

Navigate to ./server-side and run npm install before npm start to start the backend on your local computer

Database:
This project utilizes a MongoDB as the database to store all the comments and users. Please replace the URI in the server with your own database if you want to add this feature. Do not use the included credentials for any purposes, even while running the server on your local computer. 

The frontend inside ./client-side/src/components/comments.js requires changing the links inside the axios calls to your own deployed server

