import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        minlength: [3, 'Last name must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: (email) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },

            message: 'Invalid email address',
        },
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    vehicle: {
        type: {
          type: String,
          enum: ['car', 'bike', 'rickshaw'],
          required: true,
        },
        make: { type: String, required: true }, 
        model: { type: String, required: true }, 
        year: { type: Number, min: 1990, max: new Date().getFullYear() },
        color: { type: String },
        numberPlate: { 
          type: String, 
          required: true, 
          unique: true, 
          uppercase: true,
          match: /^[A-Z]{2,3}-\d{1,4}$/, // e.g., LEB-1234, KAR-999

        },
        capacity: { type: Number, required: true, min: [1 ,  'Capacity must be more then 1'] },
        location:{
            latitude:{
                type:Number
            },
            longitude:{
                type:Number

            }
        }

      },
    location: {
        latitude: {
        type: Number,
        required: true
    },
        longitude: {
        type: Number,
        required: true
    }
}
    
});

captainSchema.methods.generateAuthToken = function () {
     const token = jwt.sign({ id: this._id },process.env.JWT_SECRET,{ expiresIn: '24h' });
     return token;
};
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function name(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}





const Captain = mongoose.model('Captain', captainSchema);

export default Captain;