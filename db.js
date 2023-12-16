import { connect } from "mongoose";

export default () => {
  connect("mongodb://localhost:27017/mydatabase")
    .then(() => {
      console.log("Database connected Successfully.");
    })
    .catch((err) => {
      console.log(err);
    });
};
