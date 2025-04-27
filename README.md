# HumanChain AI Safety

A simple Express + TypeScript + MongoDB API for managing incident reports.

---

## 1. 🛠 Tech Stack

- **Language:** TypeScript
- **Framework:** Node.js with Express
- **Database:** MongoDB
- **ODM:** Mongoose

---

## 2. 🚀 Getting Started

### 2.1 Clone the Repository

```bash
git clone https://github.com/your-username/humanchain-ai-safety.git
cd humanchain-ai-safety


## 2.2 Install Dependencies

```bash
npm install


## 2.3 Set Up Environment Variables
Create a .env file in the root directory and add the following:

```bash
DATABASE_URL=your-mongodb-connection-string
PORT=5000
NODE_ENV=development

# Example MongoDB URL
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/humanchain?retryWrites=true&w=majority"


3. 📦 Build and Run
```bash
tsc -b
node dist/index.js

## 5. 🌐 API Endpoints

**Base URL:**  
`http://localhost:5000/api/v1/humanchain`

| Method | Endpoint           | Description                                  |
|--------|--------------------|----------------------------------------------|
| POST   | /incidents         | Create a new incident                        |
| GET    | /incidents         | Fetch all incidents                          |
| GET    | /incidents/:id     | Fetch a specific incident by ID              |
| DELETE | /incidents/:id     | Delete a specific incident by ID             |


## 6. 🧪 API Usage Examples (Using curl)

### 6.1 Create an Incident

**Input (JSON Data):**

```json
{
  "title": "Network Outage",
  "description": "Major downtime detected",
  "severity": "High"
}

## cURL Command

```bash
curl -X POST http://localhost:5000/api/v1/humanchain/incidents \
-H "Content-Type: application/json" \
-d '{"title": "Network Outage", "description": "Major downtime detected", "severity": "High"}'

## Output (JSON Response)

```json
{
  "message": "Incident created successfully.",
  "incident": {
    "_id": "60b76b72a4bbf9eec8db02d9",
    "title": "Network Outage",
    "description": "Major downtime detected",
    "severity": "High",
    "createdAt": "2025-04-27T12:34:56.789Z",
    "updatedAt": "2025-04-27T12:34:56.789Z"
  }
}

### 6.2 Get All Incidents

## cURL Command

```bash
curl http://localhost:5000/api/v1/humanchain/incidents

## Output (JSON Response)

```json
[
  {
    "_id": "60b76b72a4bbf9eec8db02d9",
    "title": "Network Outage",
    "description": "Major downtime detected",
    "severity": "High",
    "createdAt": "2025-04-27T12:34:56.789Z",
    "updatedAt": "2025-04-27T12:34:56.789Z"
  },
  {
    "_id": "60b76b72a4bbf9eec8db02da0",
    "title": "Database Error",
    "description": "SQL query failed",
    "severity": "Medium",
    "createdAt": "2025-04-27T12:35:10.123Z",
    "updatedAt": "2025-04-27T12:35:10.123Z"
  }
]

### 6.3 Get an Incident by ID

## cURL Command

```bash
curl http://localhost:5000/api/v1/humanchain/incidents/<incident_id>


## Output (JSON Response)
{
  "_id": "60b76b72a4bbf9eec8db02d9",
  "title": "Network Outage",
  "description": "Major downtime detected",
  "severity": "High",
  "createdAt": "2025-04-27T12:34:56.789Z",
  "updatedAt": "2025-04-27T12:34:56.789Z"
}

### 6.4 Delete an Incident

## cURL Command
```bash
curl -X DELETE http://localhost:5000/api/v1/humanchain/incidents/<incident_id>
## Output (JSON Response)
{
  "message": "Incident deleted successfully."
}


## 7. 🧠 Design Decisions & Challenges

### Framework Choice:
- Chose **Express** and **Mongoose** for quick setup and a scalable structure.

### Database:
- **MongoDB** was chosen for flexibility and ease during rapid prototyping, allowing the database schema to be dynamic and reducing overhead in initial stages.

### Connection Handling:
- A simple and robust **Mongoose** connection setup was implemented to ensure stable connections to the database with minimal configuration.

### Error Handling:
- Basic validation has been added for critical fields in API requests (e.g., `title`, `description`, and `severity`).
- Error handling could be extended later with a **global error handler** for production to standardize responses and manage different error types more effectively.




