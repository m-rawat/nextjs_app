import styles from "../styles/PostCard.module.css";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className={styles.postCardContainer}>
      <div className={styles.postCardTop}>
        <div>
          <Image
            src={post?.creator.image}
            alt="profile-img"
            width={35}
            height={35}
          />
        </div>
        <div>
          <h3>{post?.creator.username}</h3>
          <p>{post?.creator.email}</p>
        </div>
      </div>

      <div className={styles.postCardMiddle}>
        <p>{post?.content.slice(0, 300)}...</p>
      </div>

      <div className={styles.postCardBottom}>
        <p>{post?.tag}</p>
      </div>
    </div>
  );
};

export default PostCard;
