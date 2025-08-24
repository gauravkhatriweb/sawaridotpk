
import PassengerModel from "../models/passenger.model.js";

export const registerPassenger = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        
        // Validation
        const errors = [];
        
        // Check if all required fields are present
        if (!firstname || !lastname || !email || !password) {
            errors.push({ field: 'all', message: 'All fields are required' });
        }
        
        // Validate firstname
        if (firstname && firstname.length < 3) {
            errors.push({ field: 'firstname', message: 'First name must be at least 3 characters long' });
        }
        
        // Validate lastname
        if (lastname && lastname.length < 3) {
            errors.push({ field: 'lastname', message: 'Last name must be at least 3 characters long' });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            errors.push({ field: 'email', message: 'Invalid email address' });
        }
        
        // Validate password length
        if (password && password.length < 6) {
            errors.push({ field: 'password', message: 'Password must be at least 6 characters long' });
        }
        
        // If there are validation errors, return them
        if (errors.length > 0) {
            return res.status(400).json({ 
                success: false,
                message: 'Validation failed',
                errors: errors 
            });
        }
        
        // Check if passenger already exists
        const existingPassenger = await PassengerModel.findOne({ email });
        if (existingPassenger) {
            return res.status(409).json({
                success: false,
                message: 'Passenger with this email already exists'
            });
        }
        
        // Hash password and create passenger
        const hashedPassword = await PassengerModel.hashPassword(password);
        const newPassenger = new PassengerModel({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });
        await newPassenger.save();
        const token = await newPassenger.generateToken();
        
        res.status(201).json({
            success: true,
            message: "Passenger created successfully",
            passenger: newPassenger,
            token: token
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}

export const getPassengerProfile = async (req, res, next) => {
    try {
        // Passenger is already attached to req by the middleware
        const passenger = req.passenger;
        
        res.status(200).json({
            success: true,
            message: "Passenger profile retrieved successfully",
            passenger: passenger
        });
        
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}

export const logoutPassenger = async (req, res, next) => {
    try {
        // Passenger is already attached to req by the middleware
        const passenger = req.passenger;
        
        // Logout passenger (clear socketId if needed)
        passenger.socketId = null;
        const loggedOutPassenger = await passenger.save();
        
        // Clear the cookie
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        
        res.status(200).json({
            success: true,
            message: "Passenger logged out successfully",
            passenger: loggedOutPassenger
        });
        
    } catch (error) {
        console.error('Logout error:', error);
        
        if (error.message === "Passenger not found") {
            return res.status(404).json({
                success: false,
                message: 'Passenger not found'
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}

export const loginPassenger = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        const errors = [];
        
        // Check if required fields are present
        if (!email || !password) {
            errors.push({ field: 'all', message: 'Email and password are required' });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            errors.push({ field: 'email', message: 'Invalid email address' });
        }
        
        // If there are validation errors, return them
        if (errors.length > 0) {
            return res.status(400).json({ 
                success: false,
                message: 'Validation failed',
                errors: errors 
            });
        }
        
        // Login passenger
        const passenger = await PassengerModel.findOne({ email }).select('+password');
        if (!passenger) {
            throw new Error("Invalid email or password");
        }
        
        const isPasswordValid = await passenger.comparePassword(password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        
        const token = await passenger.generateToken();
        
        // Set cookie options
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        };
        
        // Set token in cookie
        res.cookie("accessToken", token, options);
        
        res.status(200).json({
            success: true,
            message: "Passenger logged in successfully",
            passenger: passenger,
            token: token
        });
        
    } catch (error) {
        console.error('Login error:', error);
        
        if (error.message === "Invalid email or password") {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}
