"use client";

import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const PostCreate = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [post, setPost] = useState({
    content: "",
    tag: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const res = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          content: post.content,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      console.log(res);
      if (res.ok) {
        toast.success("New post created");
        router.push("/");
        router.refresh();
      } else {
        toast.error("please fill all fields");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
      submitting={submitting}
    />
  );
};

export default PostCreate;
