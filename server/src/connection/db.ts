import mongoose from "mongoose"
import env from "../utils/validate"

export const connect = async () => {
    return await mongoose.connect(env.MONGO_URI);    
}