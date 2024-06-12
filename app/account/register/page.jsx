"use client";
import { useState } from "react";
import styles from "./page.module.css";
import {
  IoPerson,
  IoEyeOffSharp,
  IoEyeSharp,
  IoMail,
  IoLocation,
} from "react-icons/io5";

export default function RegisterPage() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.heading}>Register Here!</h2>
        <form action="" className={styles.formContainer}>
          <div className={styles.flex}>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="name">
                Full name{" "}
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
              />
              <IoPerson size={24} className={styles.icon} />
            </div>
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
          </div>

          <div className={styles.flex}>
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
          </div>

          <div className={styles.flex}>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="destination">
                Destination{" "}
              </label>
              <input
                className={styles.input}
                type="text"
                id="destination"
                name="destination"
                placeholder="Destination"
              />
              <IoLocation size={24} className={styles.icon} />
            </div>
            <div className={styles.inputDivs}>
              <label className={styles.label} htmlFor="month">
                Month of Travel{" "}
              </label>
              <select className={styles.select} name="month" id="month">
                <option value="January">Choose travel month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
          </div>

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="name">
              Description{" "}
            </label>
            <textarea
              className={styles.textarea}
              id="name"
              name="name"
              placeholder="Description"
              rows={10}
              cols={40}
            />
          </div>

          <div className={styles.inputDivs}>
            <label className={styles.label} htmlFor="name">
              Travel Count{" "}
            </label>
            <input
              className={styles.input}
              type="number"
              id="name"
              name="name"
              placeholder="Travel count"
            />
          </div>

          {/* <div className={styles.inputDivs}>
          <label className={styles.label} htmlFor="image">
            Upload Image here
          </label>
          <input type="file" className={styles.fileInput} />
        </div> */}

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.registerBtn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
