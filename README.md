# Render Services Monitoring API


### Overview
This is a Node.js Express backend application that serves as a bridge to the official Render API. The project was built as part of my Full-Stack development journey to demonstrate server-side integration with third-party cloud services.


### Key Functionality
* **Secure API Communication**: Uses a protected API Key to authenticate with Render.

* **Service Discovery**: Fetches and displays a real-time list of all deployed services in my account.

* **RESTful Endpoint**: Exposes a clean GET request for service data.


### Technology Stack
* **Runtime**: Node.js

* **Framework**: Express.js

* **HTTP Client**: Axios

* **Hosting**: Render (Web Service)


### API Usage
* **Endpoint**: /services

* **Method**: GET

* **Description**: Returns a JSON array of all services in the Render account.
