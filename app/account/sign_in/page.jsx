"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { IoPerson, IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    setPassword("");
    setEmail("");
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.heading}>Sign In!</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="email">
              email{" "}
            </label>
            <input
              className={styles.input}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPwd ? (
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

        <p className={styles.orPara}>or</p>

        {/* <div className={styles.loginDiv}>
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
        </div> */}

        {/* <p className={styles.orPara}>or</p> */}

        <p className="text-center text-lg">
          <Link
            className="text-blue-600 hover:underline cursor-pointer"
            href={"/account/sign_up"}
          >
            Click here
          </Link>{" "}
          to create an account
        </p>
      </div>
    </section>
  );
}
