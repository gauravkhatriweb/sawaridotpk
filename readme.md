# 🚗 Sawari.pk - Passenger Management System

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

**A comprehensive passenger management system built with modern web technologies** 🚀

*Empowering seamless passenger experiences with robust authentication and profile management*

[![GitHub stars](https://img.shields.io/github/stars/gauravkhatriweb/sawaridotpk?style=social)](https://github.com/gauravkhatriweb/sawaridotpk)
[![GitHub forks](https://img.shields.io/github/forks/gauravkhatriweb/sawaridotpk?style=social)](https://github.com/gauravkhatriweb/sawaridotpk)
[![GitHub issues](https://img.shields.io/github/issues/gauravkhatriweb/sawaridotpk)](https://github.com/gauravkhatriweb/sawaridotpk/issues)
[![GitHub license](https://img.shields.io/github/license/gauravkhatriweb/sawaridotpk)](https://github.com/gauravkhatriweb/sawaridotpk/blob/main/LICENSE)

</div>

---

## 🎯 What's Special About Sawari.pk?

✨ **Modern Authentication** - JWT-based secure authentication  
🔒 **Password Security** - bcrypt hashing with salt rounds  
🍪 **Smart Cookies** - HTTP-only cookies for XSS protection  
📱 **Real-time Ready** - Socket ID support for live features  
⚡ **Lightning Fast** - Optimized Express.js backend  
🛡️ **Production Ready** - Comprehensive error handling & validation  

---

## 👨‍💻 Meet the Developer

<div align="center">

**Developed with ❤️ by**

### [Gaurav Khatri](https://gauravkhatriweb.bio)

[![Website](https://img.shields.io/badge/Website-gauravkhatriweb.bio-blue?style=for-the-badge)](https://gauravkhatriweb.bio)
[![Email](https://img.shields.io/badge/Email-gauravkhatriweb%40gmail.com-red?style=for-the-badge)](mailto:gauravkhatriweb@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-%40gauravkhatriweb-black?style=for-the-badge&logo=github)](https://github.com/gauravkhatriweb)

*Full-stack developer passionate about creating amazing user experiences* 🚀

</div>

---

## 📋 Table of Contents

<div align="center">

| [🛠️ Tech Stack](#️-tech-stack) | [📦 Dependencies](#-backend-dependencies) | [🚀 Getting Started](#-getting-started) |
|---|---|---|
| [📚 API Reference](#-backend-api-reference) | [🗄️ Database](#️-database-schema) | [🔧 Project Structure](#-project-structure) |
| [🛡️ Security](#️-security-features) | [🚀 Deployment](#-deployment) | [🤝 Contributing](#-contributing) |
| [📄 License](#-license) | [📞 Support](#-support) | |

</div>

---

## 🛠️ Tech Stack

<div align="center">

| **Backend** | **Database** | **Authentication** | **Security** |
|-------------|--------------|-------------------|--------------|
| ![Node.js](https://img.shields.io/badge/Node.js-✓-green) | ![MongoDB](https://img.shields.io/badge/MongoDB-✓-green) | ![JWT](https://img.shields.io/badge/JWT-✓-green) | ![bcrypt](https://img.shields.io/badge/bcrypt-✓-green) |
| ![Express.js](https://img.shields.io/badge/Express.js-✓-green) | ![Mongoose](https://img.shields.io/badge/Mongoose-✓-green) | ![Cookies](https://img.shields.io/badge/Cookies-✓-green) | ![CORS](https://img.shields.io/badge/CORS-✓-green) |

</div>

---

## 📦 Backend Dependencies

<div align="center">

| Package | Version | Status | Description |
|---------|---------|--------|-------------|
| `bcrypt` | `^6.0.0` | ![Latest](https://img.shields.io/badge/Latest-green) | 🔐 Password hashing library |
| `cookie-parser` | `^1.4.7` | ![Latest](https://img.shields.io/badge/Latest-green) | 🍪 Parse Cookie header |
| `cors` | `^2.8.5` | ![Latest](https://img.shields.io/badge/Latest-green) | 🌐 Cross-Origin Resource Sharing |
| `dotenv` | `^17.2.1` | ![Latest](https://img.shields.io/badge/Latest-green) | 🔧 Environment variables |
| `express` | `^5.1.0` | ![Latest](https://img.shields.io/badge/Latest-green) | ⚡ Web framework |
| `express-validator` | `^7.2.1` | ![Latest](https://img.shields.io/badge/Latest-green) | ✅ Input validation |
| `jsonwebtoken` | `^9.0.2` | ![Latest](https://img.shields.io/badge/Latest-green) | 🔑 JWT implementation |
| `mongoose` | `^8.18.0` | ![Latest](https://img.shields.io/badge/Latest-green) | 🗄️ MongoDB ODM |
| `nodemon` | `^3.1.10` | ![Latest](https://img.shields.io/badge/Latest-green) | 🔄 Auto-restart dev server |

</div>

---

## 🚀 Getting Started

### 📋 Prerequisites

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Local%20or%20Cloud-blue?style=for-the-badge&logo=mongodb)
![npm](https://img.shields.io/badge/npm-or%20yarn-orange?style=for-the-badge&logo=npm)

</div>

### 🛠️ Installation

<div align="center">

#### **Step 1: Clone the Repository** 📥

```bash
git clone https://github.com/gauravkhatriweb/sawaridotpk.git
cd sawaridotpk
```

#### **Step 2: Install Dependencies** 📦

```bash
cd backend
npm install
```

#### **Step 3: Environment Setup** ⚙️

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/sawari_pk
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

#### **Step 4: Start the Server** 🚀

```bash
npm start
```

**🎉 Server will be running on `http://localhost:3000`**

</div>

---

## 📚 Backend API Reference

### 🔐 Authentication Endpoints

<div align="center">

| Method | URL | Description | Auth Required | Status |
|--------|-----|-------------|---------------|--------|
| `POST` | `/api/passengers/register` | Register a new passenger | ❌ No | ✅ Ready |
| `POST` | `/api/passengers/login` | Passenger login | ❌ No | ✅ Ready |
| `GET` | `/api/passengers/profile` | Get passenger profile | ✅ Yes | ✅ Ready |
| `POST` | `/api/passengers/logout` | Passenger logout | ✅ Yes | ✅ Ready |

</div>

---

### 1️⃣ Register a New Passenger

<div align="center">

**`POST` `/api/passengers/register`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-No-red?style=for-the-badge)

</div>

#### 📝 Request Body

| Parameter | Type | Required | Description | Validation |
|-----------|------|----------|-------------|------------|
| `firstname` | String | ✅ Yes | Passenger's first name | Min 3 characters |
| `lastname` | String | ✅ Yes | Passenger's last name | Min 3 characters |
| `email` | String | ✅ Yes | Passenger's email address | Valid email format |
| `password` | String | ✅ Yes | Passenger's password | Min 6 characters |

#### 📤 Example Request

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### ✅ Success Response

```
Code: 201 Created
```

```json
{
  "success": true,
  "message": "Passenger created successfully",
  "passenger": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### ❌ Error Responses

<div align="center">

| Status | Error Type | Response |
|--------|------------|----------|
| `400` | Validation failed | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `409` | Email already exists | ![Conflict](https://img.shields.io/badge/409-Conflict-orange) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** Upon successful registration, a JWT token is generated and returned in the response.

---

### 2️⃣ Passenger Login

<div align="center">

**`POST` `/api/passengers/login`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-No-red?style=for-the-badge)

</div>

#### 📝 Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | String | ✅ Yes | Passenger's email address |
| `password` | String | ✅ Yes | Passenger's password |

#### 📤 Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### ✅ Success Response

```
Code: 200 OK
```

```json
{
  "success": true,
  "message": "Passenger logged in successfully",
  "passenger": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### ❌ Error Responses

<div align="center">

| Status | Error Type | Response |
|--------|------------|----------|
| `400` | Missing fields | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `401` | Invalid credentials | ![Unauthorized](https://img.shields.io/badge/401-Unauthorized-orange) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** Upon successful login, a JWT token is set in an HTTP-only cookie and returned in the response.

---

### 3️⃣ Get Passenger Profile

<div align="center">

**`GET` `/api/passengers/profile`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-Yes-green?style=for-the-badge)

</div>

#### 🔑 Headers

```
Authorization: Bearer <jwt-token>
```

#### ✅ Success Response

```
Code: 200 OK
```

```json
{
  "success": true,
  "message": "Passenger profile retrieved successfully",
  "passenger": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### ❌ Error Responses

<div align="center">

| Status | Error Type | Response |
|--------|------------|----------|
| `401` | No token | ![Unauthorized](https://img.shields.io/badge/401-Unauthorized-orange) |
| `401` | Invalid token | ![Unauthorized](https://img.shields.io/badge/401-Unauthorized-orange) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** This endpoint returns the authenticated passenger's profile data excluding sensitive information like password.

---

### 4️⃣ Passenger Logout

<div align="center">

**`POST` `/api/passengers/logout`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-Yes-green?style=for-the-badge)

</div>

#### 🔑 Headers

```
Authorization: Bearer <jwt-token>
```

#### ✅ Success Response

```
Code: 200 OK
```

```json
{
  "success": true,
  "message": "Passenger logged out successfully",
  "passenger": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketId": null,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### ❌ Error Responses

<div align="center">

| Status | Error Type | Response |
|--------|------------|----------|
| `401` | No token | ![Unauthorized](https://img.shields.io/badge/401-Unauthorized-orange) |
| `404` | Passenger not found | ![Not Found](https://img.shields.io/badge/404-Not%20Found-red) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** This endpoint clears the authentication cookie and clears the passenger's socketId for real-time features.

---

## 🗄️ Database Schema

### 📊 Passenger Model

```javascript
{
  firstname: {
    type: String,
    required: true,
    minlength: 3
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: email format
  },
  password: {
    type: String,
    required: true,
    select: false  // 🔒 Hidden from queries by default
  },
  socketId: {
    type: String  // 📡 For real-time features
  }
}
```

---

## 🔧 Project Structure

<div align="center">

```
📁 backend/
├── 📁 config/
│   └── 🔗 connectDB.js          # Database connection
├── 📁 controllers/
│   └── 🎮 passenger.controller.js # Route controllers
├── 📁 middleware/
│   └── 🛡️ auth.middleware.js    # JWT authentication
├── 📁 models/
│   └── 📊 passenger.model.js    # Passenger schema
├── 📁 routes/
│   └── 🛣️ passenger.route.js    # API routes
├── 📁 services/
│   └── ⚙️ passenger.service.js  # Business logic
├── 🚀 app.js                    # Express app setup
└── 📦 package.json
```

</div>

---

## 🛡️ Security Features

<div align="center">

| Feature | Description | Status |
|---------|-------------|--------|
| 🔐 **Password Hashing** | bcrypt with salt rounds | ✅ Implemented |
| 🔑 **JWT Authentication** | Secure token-based auth | ✅ Implemented |
| 🍪 **HTTP-only Cookies** | XSS protection | ✅ Implemented |
| 🌐 **CORS Configuration** | Cross-origin security | ✅ Implemented |
| ✅ **Input Validation** | Comprehensive field validation | ✅ Implemented |
| 🛡️ **Error Handling** | Secure error responses | ✅ Implemented |

</div>

---

## 🚀 Deployment

### 🌍 Environment Variables for Production

```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sawari_pk
JWT_SECRET=your-super-secure-production-secret
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

### 📋 Deployment Steps

<div align="center">

| Step | Action | Status |
|------|--------|--------|
| 1️⃣ | Set up MongoDB Atlas or production database | ⏳ Ready |
| 2️⃣ | Configure environment variables | ⏳ Ready |
| 3️⃣ | Deploy to your preferred platform | ⏳ Ready |
| 4️⃣ | Set up SSL certificates | ⏳ Ready |
| 5️⃣ | Configure domain and DNS | ⏳ Ready |

**Platforms:** ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

</div>

---

## 🤝 Contributing

<div align="center">

**We welcome contributions to improve Sawari.pk!** 🎉

![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)

</div>

### 🐛 Reporting Bugs

1. 🔍 Check if the bug has already been reported in the [Issues](https://github.com/gauravkhatriweb/sawaridotpk/issues) section
2. 📝 Create a new issue with a clear title and description
3. 📋 Include steps to reproduce the bug
4. 📸 Add screenshots or error logs if applicable

### 💡 Suggesting Features

1. 🔍 Check if the feature has already been suggested
2. 🏷️ Create a new issue with the "enhancement" label
3. 📝 Describe the feature and its benefits
4. 📋 Provide use cases and examples

### 🔧 Code Contributions

<div align="center">

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/amazing-feature

# 3. Make your changes and add tests if applicable
# 4. Commit your changes
git commit -m 'Add amazing feature'

# 5. Push to the branch
git push origin feature/amazing-feature

# 6. Open a Pull Request
```

</div>

### 📝 Code Style Guidelines

- 🎨 Follow the existing code style and formatting
- 💭 Add comments for complex logic
- 📝 Write meaningful commit messages
- 🛡️ Include error handling
- 🧪 Test your changes thoroughly

### 🧪 Testing

- ✅ Test your changes locally before submitting
- ✅ Ensure all existing tests pass
- ✅ Add new tests for new features
- ✅ Test edge cases and error scenarios

### 📋 Pull Request Process

1. 📝 Update the README.md if needed
2. 📚 Update documentation for new features
3. ✅ Ensure the build passes
4. 👥 Request review from maintainers
5. 🔄 Address any feedback or requested changes

### 🎯 Contribution Areas

<div align="center">

| Area | Description | Priority |
|------|-------------|----------|
| 🔧 **Backend API** | New endpoints, improvements, optimizations | 🔥 High |
| 🗄️ **Database** | Schema improvements, queries optimization | 🔥 High |
| 🛡️ **Security** | Security enhancements, vulnerability fixes | 🔥 High |
| 📚 **Documentation** | API docs, code comments, guides | 🔶 Medium |
| 🧪 **Testing** | Unit tests, integration tests | 🔶 Medium |
| ⚡ **Performance** | Performance improvements, caching | 🔶 Medium |

</div>

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License**.

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

See the [LICENSE](LICENSE) file for details.

</div>

---

## 📞 Support

<div align="center">

**For support, questions, or collaboration:**

[![Website](https://img.shields.io/badge/Website-gauravkhatriweb.bio-blue?style=for-the-badge)](https://gauravkhatriweb.bio)
[![Email](https://img.shields.io/badge/Email-gauravkhatriweb%40gmail.com-red?style=for-the-badge)](mailto:gauravkhatriweb@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-%40gauravkhatriweb-black?style=for-the-badge&logo=github)](https://github.com/gauravkhatriweb)
[![Repository](https://img.shields.io/badge/Repository-sawaridotpk-green?style=for-the-badge)](https://github.com/gauravkhatriweb/sawaridotpk.git)

</div>

---

<div align="center">

**Made with ❤️ by [Gaurav Khatri](https://gauravkhatriweb.bio)**

![GitHub stars](https://img.shields.io/github/stars/gauravkhatriweb/sawaridotpk?style=social)
![GitHub forks](https://img.shields.io/github/forks/gauravkhatriweb/sawaridotpk?style=social)

**⭐ Star this repository if you found it helpful!**

</div>
