 🧰 Backend Wizards — Stage 0: Dynamic Profile Endpoint

### 🌟 Overview

This project is built for the **Backend Wizards Stage 0** challenge.
It’s a simple **Node.js/Express REST API** that returns developer profile information along with a **random cat fact** fetched dynamically from an external API.


### ⚙️ Features

✅ Returns static profile information (email, name, stack)
✅ Fetches a dynamic cat fact from [Cat Fact API](https://catfact.ninja/fact)
✅ Generates a real-time UTC timestamp in ISO 8601 format
✅ Includes proper CORS headers
✅ Handles API errors gracefully
✅ Easy to run locally and deploy to any cloud host (e.g., Railway, Render, AWS)

---

### 🧩 API Endpoint

#### **GET** `/me`

**Example Response:**

```json
{
  "status": "success",
  "user": {
    "email": "omorodion.fortune@gmail.com",
    "name": "Omorodion Fortune",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T14:12:15.584Z",
  "fact": "Cats sleep for 70% of their lives."
}

🧩 Setup Instructions
# clone the repo
git clone https://github.com/4tune05/backend-wizard-profile.git

# navigate into the project
cd backend-wizard-profile

# install dependencies
npm install
```

#### 3️⃣ Create a `.env` file in the root directory

```bash
EMAIL=omorodion.fortune@gmail.com
NAME=Omorodion Fortune
STACK=Node.js/Express
PORT=3000
```

#### 4️⃣ Run the server

For development:

```bash
npm run dev
```

Or production:

```bash
npm start
```

Now visit 👉 `http://localhost:3000/me`


### 🧠 Technologies Used

| Tool           | Purpose                        |
| -------------- | ------------------------------ |
| **Node.js**    | JavaScript runtime environment |
| **Express.js** | Web framework for Node.js      |
| **Axios**      | HTTP client to fetch cat facts |
| **Dotenv**     | Manage environment variables   |
| **CORS**       | Enable cross-origin requests   |


### 🧪 Example Output

#### Successful Request

```bash
curl http://localhost:3000/me
```

**Response:**

```json
{
  "status": "success",
  "user": {
    "email": "omorodion.fortune@gmail.com",
    "name": "Omorodion Fortune",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T14:12:15.584Z",
  "fact": "A cat can jump up to six times its length in one leap."
}
```



### 📁 Project Structure

```
hng-backend-profile/
├── src/
│   ├── app.js
│   └── routes/
│       └── profile.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```


### 🌍 Deployment

🔗 Live API URL: https://your-deployed-app-url/me



### 🧑‍💻 Author

**Omorodion Fortune**

* GitHub: [@Fortzy05](https://github.com/Fortzy05)
* Email: [omorodion.fortune@gmail.com](mailto:omorodion.fortune@gmail.com)
* Stack: Node.js / Express


