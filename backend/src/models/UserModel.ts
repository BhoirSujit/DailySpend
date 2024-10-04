import { Schema, model } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: {type: String},
  password : { type: String, required: true, select: false },
}, {
    timestamps: true
});

export default model('users', schema)
