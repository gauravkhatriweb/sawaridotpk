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
| `POST` | `/api/captain/register` | Register a new captain | ❌ No | ✅ Ready |
| `POST` | `/api/captain/login` | Captain login | ❌ No | ✅ Ready |
| `GET` | `/api/captain/profile` | Get captain profile | ✅ Yes | ✅ Ready |
| `POST` | `/api/captain/logout` | Captain logout | ✅ Yes | ✅ Ready |

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

### 5️⃣ Register a New Captain

<div align="center">

**`POST` `/api/captain/register`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-No-red?style=for-the-badge)

</div>

#### 📝 Request Body

| Parameter | Type | Required | Description | Validation |
|-----------|------|----------|-------------|------------|
| `firstname` | String | ✅ Yes | Captain's first name | Min 3 characters |
| `lastname` | String | ✅ Yes | Captain's last name | Min 3 characters |
| `email` | String | ✅ Yes | Captain's email address | Valid email format |
| `password` | String | ✅ Yes | Captain's password | Min 6 characters |
| `vehicle` | Object | ✅ Yes | Vehicle information | See vehicle schema below |
| `location` | Object | ✅ Yes | Captain's location | See location schema below |

#### 🚗 Vehicle Object Schema

| Parameter | Type | Required | Description | Validation |
|-----------|------|----------|-------------|------------|
| `type` | String | ✅ Yes | Vehicle type | 'car', 'bike', or 'rickshaw' |
| `make` | String | ✅ Yes | Vehicle manufacturer | Non-empty string |
| `model` | String | ✅ Yes | Vehicle model | Non-empty string |
| `year` | Number | ❌ No | Manufacturing year | Between 1990 and current year |
| `color` | String | ❌ No | Vehicle color | Any string |
| `numberPlate` | String | ✅ Yes | License plate number | Format: LEB-1234 |
| `capacity` | Number | ✅ Yes | Passenger capacity | Minimum 1 |

#### 📍 Location Object Schema

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `latitude` | Number | ✅ Yes | Latitude coordinate |
| `longitude` | Number | ✅ Yes | Longitude coordinate |

#### 📤 Example Request

```json
{
  "firstname": "Ahmed",
  "lastname": "Khan",
  "email": "ahmed.khan@example.com",
  "password": "password123",
  "vehicle": {
    "type": "car",
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "color": "White",
    "numberPlate": "LEB-1234",
    "capacity": 4
  },
  "location": {
    "latitude": 33.7490,
    "longitude": -84.3880
  }
}
```

#### ✅ Success Response

```
Code: 201 Created
```

```json
{
  "message": "Captain registered successfully",
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "Ahmed",
    "lastname": "Khan",
    "email": "ahmed.khan@example.com",
    "status": "active",
    "vehicle": {
      "type": "car",
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "color": "White",
      "numberPlate": "LEB-1234",
      "capacity": 4
    },
    "location": {
      "latitude": 33.7490,
      "longitude": -84.3880
    },
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
| `400` | Vehicle type invalid | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `400` | Number plate format invalid | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `400` | Number plate already exists | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `409` | Email already exists | ![Conflict](https://img.shields.io/badge/409-Conflict-orange) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** Upon successful registration, a JWT token is generated and returned in the response. The vehicle number plate must be unique across all captains.

---

### 6️⃣ Captain Login

<div align="center">

**`POST` `/api/captain/login`**

![Auth Required](https://img.shields.io/badge/Auth%20Required-No-red?style=for-the-badge)

</div>

#### 📝 Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | String | ✅ Yes | Captain's email address |
| `password` | String | ✅ Yes | Captain's password |

#### 📤 Example Request

```json
{
  "email": "ahmed.khan@example.com",
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
  "message": "Captain logged in successfully",
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "Ahmed",
    "lastname": "Khan",
    "email": "ahmed.khan@example.com",
    "status": "active",
    "vehicle": {
      "type": "car",
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "color": "White",
      "numberPlate": "LEB-1234",
      "capacity": 4
    },
    "location": {
      "latitude": 33.7490,
      "longitude": -84.3880
    },
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
| `400` | Invalid email format | ![Bad Request](https://img.shields.io/badge/400-Bad%20Request-red) |
| `401` | Invalid credentials | ![Unauthorized](https://img.shields.io/badge/401-Unauthorized-orange) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** Upon successful login, a JWT token is set in an HTTP-only cookie and returned in the response.

---

### 7️⃣ Get Captain Profile

<div align="center">

**`GET` `/api/captain/profile`**

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
  "message": "Captain profile retrieved successfully",
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "Ahmed",
    "lastname": "Khan",
    "email": "ahmed.khan@example.com",
    "status": "active",
    "vehicle": {
      "type": "car",
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "color": "White",
      "numberPlate": "LEB-1234",
      "capacity": 4
    },
    "location": {
      "latitude": 33.7490,
      "longitude": -84.3880
    },
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

**💡 Note:** This endpoint returns the authenticated captain's profile data excluding sensitive information like password.

---

### 8️⃣ Captain Logout

<div align="center">

**`POST` `/api/captain/logout`**

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
  "message": "Captain logged out successfully",
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstname": "Ahmed",
    "lastname": "Khan",
    "email": "ahmed.khan@example.com",
    "status": "active",
    "vehicle": {
      "type": "car",
      "make": "Toyota",
      "model": "Corolla",
      "year": 2020,
      "color": "White",
      "numberPlate": "LEB-1234",
      "capacity": 4
    },
    "location": {
      "latitude": 33.7490,
      "longitude": -84.3880
    },
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
| `404` | Captain not found | ![Not Found](https://img.shields.io/badge/404-Not%20Found-red) |
| `500` | Internal server error | ![Server Error](https://img.shields.io/badge/500-Server%20Error-red) |

</div>

**💡 Note:** This endpoint clears the authentication cookie and clears the captain's socketId for real-time features.

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

### 🚗 Captain Model

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
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  vehicle: {
    type: {
      type: String,
      enum: ['car', 'bike', 'rickshaw'],
      required: true
    },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, min: 1990, max: current year },
    color: { type: String },
    numberPlate: { 
      type: String, 
      required: true, 
      unique: true, 
      uppercase: true,
      match: /^[A-Z]{2,3}-\d{1,4}$/  // Format: LEB-1234
    },
    capacity: { type: Number, required: true, min: 1 }
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  }
}
```

---

## 🔧 Project Structure

<div align="center">

### 📁 Backend Architecture

```
sawaridotpk-v2/
├── 📁 backend/
│   ├── 📁 config/
│   │   └── 🔗 connectDB.js              # MongoDB connection
│   ├── 📁 controllers/
│   │   ├── 🎮 passenger.controller.js   # Passenger API logic
│   │   └── 🎮 captain.controller.js     # Captain API logic
│   ├── 📁 middleware/
│   │   └── 🛡️ auth.middleware.js        # JWT authentication
│   ├── 📁 models/
│   │   ├── 📊 passenger.model.js        # Passenger schema
│   │   └── 📊 captain.model.js          # Captain schema
│   ├── 📁 routes/
│   │   ├── 🛣️ passenger.route.js        # Passenger endpoints
│   │   └── 🛣️ captain.route.js          # Captain endpoints
│   ├── 🚀 app.js                        # Express server
│   ├── 📦 package.json                  # Dependencies
│   └── 📦 package-lock.json             # Lock file
├── 📄 readme.md                         # Documentation
└── 📄 .gitignore                        # Git ignore
```

</div>

### 🏗️ Architecture Overview

<div align="center">

| **Layer** | **Directory** | **Purpose** | **Files** |
|-----------|---------------|-------------|-----------|
| **🛣️ Routes** | `routes/` | API endpoint definitions | `passenger.route.js`, `captain.route.js` |
| **🎮 Controllers** | `controllers/` | Business logic & request handling | `passenger.controller.js`, `captain.controller.js` |
| **📊 Models** | `models/` | Database schemas & validation | `passenger.model.js`, `captain.model.js` |
| **🛡️ Middleware** | `middleware/` | Authentication & validation | `auth.middleware.js` |
| **⚙️ Config** | `config/` | Database & environment setup | `connectDB.js` |

</div>

### 📋 File Status

<div align="center">

| **File** | **Type** | **Status** | **Description** |
|----------|----------|------------|-----------------|
| `app.js` | Server | ✅ Ready | Express app configuration |
| `connectDB.js` | Database | ✅ Ready | MongoDB connection setup |
| `auth.middleware.js` | Security | ✅ Ready | JWT authentication |
| `passenger.controller.js` | API | ✅ Ready | Passenger CRUD operations |
| `captain.controller.js` | API | ✅ Ready | Captain CRUD operations |
| `passenger.model.js` | Schema | ✅ Ready | Passenger data model |
| `captain.model.js` | Schema | ✅ Ready | Captain data model |
| `passenger.route.js` | Routes | ✅ Ready | Passenger API endpoints |
| `captain.route.js` | Routes | ✅ Ready | Captain API endpoints |

</div>

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

#### 🚀 Quick Start Guide

```bash
# 1️⃣ Fork the repository
git clone https://github.com/your-username/sawaridotpk.git
cd sawaridotpk

# 2️⃣ Create a feature branch
git checkout -b feature/amazing-feature

# 3️⃣ Install dependencies
cd backend
npm install

# 4️⃣ Make your changes and test
# ... your code changes ...

# 5️⃣ Commit your changes
git add .
git commit -m '✨ Add amazing feature'

# 6️⃣ Push to your fork
git push origin feature/amazing-feature

# 7️⃣ Open a Pull Request
# Go to GitHub and create a new Pull Request
```

</div>

#### 📝 Development Workflow

<div align="center">

| **Step** | **Action** | **Description** |
|----------|------------|-----------------|
| **1️⃣ Fork** | Clone repository | Create your own copy of the project |
| **2️⃣ Branch** | Create feature branch | Work on isolated feature/issue |
| **3️⃣ Code** | Implement changes | Write clean, documented code |
| **4️⃣ Test** | Verify functionality | Ensure everything works correctly |
| **5️⃣ Commit** | Save changes | Use descriptive commit messages |
| **6️⃣ Push** | Upload to GitHub | Share your changes |
| **7️⃣ PR** | Create Pull Request | Submit for review |

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
