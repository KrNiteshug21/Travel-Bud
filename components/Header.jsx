"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("January");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destination: ", destination);
    console.log("Month: ", month);
    console.log("");
    setDestination("");
    setMonth("");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerHeading}>Find Travel Buddies</h1>
          <p className={styles.headerPara}>
            Get to experience the world in low cost by sharing your travelling
            expenses with your partner
          </p>
          <form className={styles.headerForm} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.destInputDiv}>
              <label htmlFor="dest">Choose travel destination: </label>
              <input
                type="text"
                name="dest"
                id="dest"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where would you like to go?"
              />
            </div>
            {/* <div className={styles.monthSelectDiv}>
            <label htmlFor="month">Month of Travel: </label>
            <select
              name="month"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
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
          </div> */}
            <div>
              <input
                type="submit"
                value="Search"
                className={styles.searchBtn}
              />
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
