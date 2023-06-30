"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/adrianhajdin/project_next_13_ai_prompt_sharing/44be0ff086359a11121b6f76e04ba834470a95aa/public/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/">
          <p>Postopia</p>
        </Link>
      </div>

      <div className={styles.right}>
        {session?.user ? (
          <>
            <Link href="/post/create">
              <button className={`${styles.navBtn} ${styles.createPostBtn}`}>
                Create Post
              </button>
            </Link>

            <button
              className={`${styles.navBtn} ${styles.signOutBtn}`}
              onClick={() => signOut()}
            >
              SignOut
            </button>

            <Link href="/profile">
              <Image
                className={styles.userImage}
                src={session?.user.image}
                alt="logo"
                width={30}
                height={30}
              />
            </Link>
          </>
        ) : (
          <>
            <button
              className={`${styles.navBtn} ${styles.signInBtn}`}
              onClick={() => signIn("google")}
            >
              SignIn
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
