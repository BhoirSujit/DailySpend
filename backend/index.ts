import app from "./src/app"
import {port, mongodb_con_str} from "./src/config/config"
import {dbconnect} from "./src/connections/MongoDBCon"

//init db
(async function() {
    if (mongodb_con_str) {
        await dbconnect(mongodb_con_str);
    } else {
        console.log('connection string not defined');
    }
})();

//run server
app.listen(port, () => {
    console.log("server running on : http//localhost:",port)
})