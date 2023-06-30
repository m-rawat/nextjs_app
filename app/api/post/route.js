import postModel from "@/models/postModel";
import { dbConnect } from "@/utils/dbConnect";

export const GET = async (request) => {
  try {
    await dbConnect();

    const posts = await postModel.find({}).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("No post available", { status: 500 });
  }
};
