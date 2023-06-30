import postModel from "@/models/postModel";
import { dbConnect } from "@/utils/dbConnect";

export const POST = async (request) => {
  const { userId, content, tag } = await request.json();

  try {
    if (!content || !tag)
      return new Response("Please fill all fields", { status: 400 });
    await dbConnect();

    const newPost = new postModel({
      creator: userId,
      content,
      tag,
    });

    await newPost.save();
    console.log(newPost);

    return new Response("Post created successfully", { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
