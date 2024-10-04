import { config } from "dotenv";

config(); 

export const port :string = process.env.PORT || '3880';
export const mongodb_con_str : string | undefined = process.env.MONGODB_CON_STR 


