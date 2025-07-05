# RESTful Blog API

A RESTful blog API built with Node.js, Express, and MongoDB. It allows user registration, authentication with JWT, and full CRUD operations for blog posts protected by authentication.

## Technologies

- Node.js
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Getting Started

```bash
git clone https://github.com/Emanoelkl/express-restful-blog-api.git
cd express-restful-blog-api
npm install
```

### .env configuration

Create a `.env` file in the root of the project and add:

```env
PORT=5003
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

⚠️ You must provide your own MongoDB connection string and a secret key.

### How to get your MONGO_URI:

- Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
- Create a free cluster and a user/password.
- Go to Database > Connect > Drivers, and copy the connection string (e.g.):
- mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
- Replace <username>, <password>, and <dbname> with your actual values.

### About JWT_SECRET:

Use any random string to secure your token.

### Run server

```bash
node server.js     # Starts the server with nodemon (development)
```

## 📚 API Endpoints

| Method | Route            | Protected | Description                        |
| ------ | ---------------- | --------- | ---------------------------------- |
| POST   | `/auth/register` | ❌        | Register a new user                |
| POST   | `/auth/login`    | ❌        | Login and receive a JWT token      |
| POST   | `/blogposts`     | ✅        | Create a new post                  |
| GET    | `/blogposts`     | ❌        | Get all posts                      |
| GET    | `/blogposts/:id` | ❌        | Get a single post by ID            |
| PUT    | `/blogposts/:id` | ✅        | Update a post (only by the author) |
| DELETE | `/blogposts/:id` | ✅        | Delete a post (only by the author) |

> Protected routes require the following header:  
> `Authorization: Bearer YOUR_JWT_TOKEN`

## Testing with REST Client (VS Code)

The project includes a `blog-api.rest` file for quick testing using the **REST Client** extension in Visual Studio Code.
Just install the extension and click **"Send Request"** on any request block.
