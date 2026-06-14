import mongoose, { Schema, models, model } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['buyer', 'seller', 'both'],
      default: 'buyer',
    },
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;