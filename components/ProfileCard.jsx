import styles from "../styles/ProfileCard.module.css";
import Image from "next/image";
import PostCard from "./PostCard";

const ProfileCard = ({ userData }) => {
  return (
    <>
      <div className={styles.profileCardContainer}>
        <div className={styles.profileCard}>
          <div>
            <Image
              src={userData[0]?.creator.image}
              alt="profile-img"
              width={130}
              height={130}
            />
          </div>
          <div>
            <h1>{userData[0]?.creator.username}</h1>
            <p>{userData[0]?.creator.email}</p>
          </div>
        </div>
      </div>
      <div className={styles.postCardWrapper}>
        {userData.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
