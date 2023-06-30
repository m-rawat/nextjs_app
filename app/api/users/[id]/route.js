import postModel from "@/models/postModel";
import { dbConnect } from "@/utils/dbConnect";

export const GET = async (request, { params }) => {
  try {
    await dbConnect();

    const userInfo = await postModel
      .find({ creator: params.id })
      .populate("creator");

    return new Response(JSON.stringify(userInfo), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
