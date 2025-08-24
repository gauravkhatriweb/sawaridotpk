import PassengerModel from "../models/passenger.model.js";

export const createPassenger = async (firstname , lastname , email , password) => {
    if(!firstname || !email || !password) {
        throw new Error("All fields are required");
    }
    const newPassenger = await PassengerModel.create({
        firstname,
        lastname,
        email,
        password,
    });
    return newPassenger;
}

export const loginPassenger = async (email, password) => {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    // Find passenger with password (since password field is select: false)
    const passenger = await PassengerModel.findOne({ email }).select("+password");
    
    if (!passenger) {
        throw new Error("Invalid email or password");
    }

    // Check if password matches
    const isPasswordValid = await passenger.comparePassword(password);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    // Remove password from response
    const passengerWithoutPassword = await PassengerModel.findById(passenger._id).select("-password");
    
    return passengerWithoutPassword;
}

export const logoutPassenger = async (passengerId) => {
    if (!passengerId) {
        throw new Error("Passenger ID is required");
    }
    
    // Find passenger to verify they exist
    const passenger = await PassengerModel.findById(passengerId).select("-password");
    
    if (!passenger) {
        throw new Error("Passenger not found");
    }
    
    // Clear socketId if it exists (for real-time features)
    if (passenger.socketId) {
        await PassengerModel.findByIdAndUpdate(passengerId, { socketId: null });
    }
    
    return passenger;
}
