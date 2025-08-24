import Captain from "../models/captain.model.js";




export const registerCaptain = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
            vehicle,
            location} = req.body;

        // Check if captain already exists
        const existingCaptain = await Captain.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain with this email already exists" });
        }
         // Vehicle validation
         if (!vehicle || typeof vehicle !== 'object') {
            return res.status(400).json({ message: "Vehicle information is required and must be an object" });
        }
        const { type, make, model, year, color, numberPlate, capacity } = vehicle;

        const allowedTypes = ['car', 'bike', 'rickshaw'];
        if (!type || !allowedTypes.includes(type)) {
            return res.status(400).json({ message: "Vehicle type is required and must be one of: car, bike, rickshaw" });
        }
        if (!make || typeof make !== 'string' || make.trim().length === 0) {
            return res.status(400).json({ message: "Vehicle make is required" });
        }
        if (!model || typeof model !== 'string' || model.trim().length === 0) {
            return res.status(400).json({ message: "Vehicle model is required" });
        }
        if (year !== undefined) {
            const currentYear = new Date().getFullYear();
            if (typeof year !== 'number' || year < 1990 || year > currentYear) {
                return res.status(400).json({ message: `Vehicle year must be between 1990 and ${currentYear}` });
            }
        }
        if (!numberPlate || !/^[A-Z]{2,3}-\d{1,4}$/.test(numberPlate)) {
            return res.status(400).json({ message: "Vehicle numberPlate is required and must match format e.g. LEB-1234" });
        }
        // Check for unique number plate
        const existingNumberPlate = await Captain.findOne({ "vehicle.numberPlate": numberPlate.toUpperCase() });
        if (existingNumberPlate) {
            return res.status(400).json({ message: "A vehicle with this number plate already exists" });
        }
        if (capacity === undefined || typeof capacity !== 'number' || capacity < 1) {
            return res.status(400).json({ message: "Vehicle capacity is required and must be at least 1" });
        }

        // Hash password
        const hashedPassword = await Captain.hashPassword(password);

        // Create new captain
        const newCaptain = new Captain({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            vehicle,
            location
        });

        await newCaptain.save();

        // Generate token
        const token = newCaptain.generateAuthToken();

        // Return response (omit password)
        const captainData = newCaptain.toObject();
        delete captainData.password;

        res.status(201).json({
            message: "Captain registered successfully",
            captain: captainData,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const loginCaptain = async (req, res) => {
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
        
        // Find captain by email and include password for comparison
        const captain = await Captain.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        
        // Check if password matches
        const isPasswordValid = await captain.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
        
        // Generate token
        const token = captain.generateAuthToken();
        
        // Set cookie options
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        };
        
        // Set token in cookie
        res.cookie("accessToken", token, options);
        
        // Return response (omit password)
        const captainData = captain.toObject();
        delete captainData.password;
        
        res.status(200).json({
            success: true,
            message: "Captain logged in successfully",
            captain: captainData,
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
};

export const logoutCaptain = async (req, res) => {
    try {
        // Captain is already attached to req by the middleware
        const captain = req.captain;
        
        // Logout captain (clear socketId if needed)
        captain.socketId = null;
        const loggedOutCaptain = await captain.save();
        
        // Clear the cookie
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        
        res.status(200).json({
            success: true,
            message: "Captain logged out successfully",
            captain: loggedOutCaptain
        });
        
    } catch (error) {
        console.error('Logout error:', error);
        
        if (error.message === "Captain not found") {
            return res.status(404).json({
                success: false,
                message: 'Captain not found'
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const getCaptainProfile = async (req, res) => {
    try {
        // Captain is already attached to req by the middleware
        const captain = req.captain;
        
        res.status(200).json({
            success: true,
            message: "Captain profile retrieved successfully",
            captain: captain
        });
        
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

