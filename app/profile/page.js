"use client";

import ProfileCard from "@/components/ProfileCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState([]);

  const fetchUsersInfo = async () => {
    const res = await fetch(`/api/users/${session?.user.id}`, {
      method: "GET",
    });
    const userInfo = await res.json();
    setUserData(userInfo);
  };

  useEffect(() => {
    if (session?.user.id) fetchUsersInfo();
  }, [session?.user.id]);

  return (
    <div>
      <ProfileCard userData={userData} />
    </div>
  );
};

export default Profile;
