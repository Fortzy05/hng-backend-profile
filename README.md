🧰 Backend Wizards — Stage 0: Dynamic Profile Endpoint
Description

A simple Node.js/Express REST API that returns user profile details and a dynamic cat fact fetched from an external API.

🚀 Endpoint

GET /me
Returns:

{
  "status": "success",
  "user": {
    "email": "omorodion.fortune@gmail.com",
    "name": "Omorodion Fortune",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T14:12:15.584Z",
  "fact": "Cats have whiskers on the backs of their front legs."
}

🧩 Setup Instructions
# clone the repo
git clone https://github.com/4tune05/backend-wizard-profile.git

# navigate into the project
cd backend-wizard-profile

# install dependencies
npm install

# create .env file
EMAIL=youremail@example.com
NAME=Your Name
STACK=Node.js/Express
PORT=3000

# start the server
npm run dev

🧠 Technologies

Node.js

Express.js

Axios

Dotenv

CORS

🌍 Deployment

Hosted on Railway.app
 (link will go here)

👨‍💻 Author

Omorodion Fortune
