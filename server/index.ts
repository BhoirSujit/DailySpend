import { config } from "dotenv";
config();

import env from "./src/utils/validate";
import { connect } from "./src/connection/db";
import app from "./src/app";

//connect db
async function main() {
  await connect()
    .then(() => {
      console.log("Database conencted");

      app.listen(env.PORT, () => {
        console.log("listning on port : ", env.PORT);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
main();
