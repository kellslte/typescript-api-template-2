import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    authentication: {
      password: {
        type: String,
        required: true,
        select: false,
      },

      sessionToken: {
        type: String,
        select: false,
      },
    },
  },
  { timestamps: true }
);


export const User = model('User', UserSchema);