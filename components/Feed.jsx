"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "../styles/Feed.module.css";
import SearchBox from "./SearchBox";
import { useSession } from "next-auth/react";

const Feed = ({ allPosts }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (session?.user.id) setPosts(allPosts);
  }, [session?.user.id]);

  useEffect(() => {
    if (searchText === "") {
      setFilteredPosts(posts);
    } else {
      const filterPosts = posts.filter((post) =>
        post.tag.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPosts(filterPosts);
    }
  }, [searchText, posts]);

  return (
    <>
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
      <div className={styles.postCardWrapper}>
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Feed;
