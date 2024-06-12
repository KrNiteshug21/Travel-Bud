"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { IoPerson, IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.heading}>Register Here!</h2>
        <form className={styles.formContainer}>
          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="username">
              Username{" "}
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <IoPerson size={24} className={styles.icon} />
          </div>

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="password">
              Password{" "}
            </label>
            <input
              className={styles.input}
              type={showPwd ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
            />
            {showPwd ? (
              <IoEyeOffSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className={styles.icon}
              />
            ) : (
              <IoEyeSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className={styles.icon}
              />
            )}
          </div>

          <div className={styles.flex}>
            {/* <p>Remember me</p> */}
            <p>Forgot password</p>
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </div>
        </form>

        <p className={styles.orPara}>Or</p>

        <div className={styles.loginDiv}>
          <Link href="#" className={styles.loginWithFacebook}>
            <span className={styles.loginIcons}>
              <FaFacebook size={24} />
            </span>{" "}
            Login with Facebook
          </Link>
          <Link href="#" className={styles.loginWithGoogle}>
            <span className={styles.loginIcons}>
              <FcGoogle size={24} />
            </span>
            Login with Google
          </Link>
        </div>
      </div>
    </section>
  );
}
