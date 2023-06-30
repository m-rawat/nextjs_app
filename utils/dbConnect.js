import mongoose from "mongoose";

const url =
  "mongodb+srv://mayankrawat1:rFPnTXnD8Chw5SpR@cluster0.gn9kuea.mongodb.net/nextjs13?retryWrites=true&w=majority";

let isConnected = false; // track the connection

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
