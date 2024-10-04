import { connect } from "mongoose";

export const dbconnect = async (constr: string) => {
  await connect(constr)
    .then(() => {
      console.log("database was connected");
    })
    .catch((e) => {
      console.log("Error while connection to db : ", e);
    });
};


