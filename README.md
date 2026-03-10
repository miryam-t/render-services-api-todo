🌐 Render Services Monitoring API
📋 Overview
This is a Node.js Express backend application that serves as a bridge to the official Render API.
The project was built as part of my Full-Stack development journey to demonstrate server-side integration with third-party cloud services.

🚀 Key Functionality
Secure API Communication: Uses a protected API Key to authenticate with Render.

Service Discovery: Fetches and displays a real-time list of all deployed services in my account.

RESTful Endpoint: Exposes a clean GET request for service data.

🛠 Technology Stack
Runtime: Node.js

Framework: Express.js

HTTP Client: Axios (for fetching Render API data)

Hosting: Render (Web Service)

📡 API Usage
Get All Services
Endpoint: /services

Method: GET

Description: Returns a JSON array containing details about all active applications (Static Sites and Web Services) currently hosted on my Render account.

⚙️ Local Setup
Clone this repository.

Run npm install to install dependencies.

Create an environment variable named RENDER_API_KEY with your Render API Key.

Start the server using node index.js.

Visit http://localhost:3000/services.
