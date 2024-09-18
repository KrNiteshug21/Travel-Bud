import styles from "./page.module.css";

const Header = () => {
  // const [destination, setDestination] = useState("");
  // const [month, setMonth] = useState("January");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Destination: ", destination);
  //   console.log("Month: ", month);
  //   console.log("");
  //   setDestination("");
  //   setMonth("");
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerHeading}>Find Travel Buddies</h1>
          <p className={styles.headerPara}>
            Get to experience the world in low cost by sharing your travelling
            expenses with your partner
          </p>
          {/* <form className={styles.headerForm} onSubmit={(e) => handleSubmit(e)}>
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
            <div>
              <input
                type="submit"
                value="Search"
                className={styles.searchBtn}
              />
            </div>
          </form> */}
        </div>
      </header>
    </>
  );
};

export default Header;
