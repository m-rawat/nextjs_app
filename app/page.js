import Feed from "@/components/Feed";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Home = async () => {
  const data = await getPosts();
  return (
    <div>
      <Heading />
      <Feed allPosts={data} />
    </div>
  );
};

export default Home;
