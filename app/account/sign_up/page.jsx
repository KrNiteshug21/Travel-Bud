"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { IoPerson, IoEyeOffSharp, IoEyeSharp, IoMail } from "react-icons/io5";
import { UploadButton } from "@/hooks/uploadthing";

export default function RegisterPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const createUser = async () => {
    const response = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, profilePic: image }),
    });

    if (!response.ok) {
      alert("Network response was not ok");
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = createUser();
    if (user) alert(`${user.username} created successfully`);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.heading}>Sign up!</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <IoPerson size={24} className={styles.icon} />
          </div>

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="email">
              Email{" "}
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
            <IoMail size={24} className={styles.icon} />
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
            {showPwd ? (
              <IoEyeSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className={styles.icon}
              />
            ) : (
              <IoEyeOffSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className={styles.icon}
              />
            )}
          </div>

          <div className="">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res[0].url);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.registerBtn}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
