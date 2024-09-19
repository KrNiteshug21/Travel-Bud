import styles from "./page.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerHeading}>Find Travel Buddies</h1>
          <p className={styles.headerPara}>
            Get to experience the world in low cost by sharing your travelling
            expenses with your partner
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
