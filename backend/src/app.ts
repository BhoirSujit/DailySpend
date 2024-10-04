import express  from "express";
import cors, {CorsOptions} from 'cors'

import AuthRouter from "./routes/AuthRouter"

const app = express();
var corsOption: CorsOptions = {
    origin: '*'
}

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/user",AuthRouter)



export default app;



