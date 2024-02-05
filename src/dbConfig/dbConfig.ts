import mongoose from "mongoose";
export async function connect() {
  mongoose
    .connect("mongodb+srv://gauravsoni8800:OLnQSWzx2VvnPlQa@cluster0.7qjv7cd.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("database connected");
    })
    .catch(() => {
      console.log("database error");
    });
}
