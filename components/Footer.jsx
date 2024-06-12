import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>TRAVEL</h3>
          <a href="#">How it Works</a>
          <a href="#">Find a trip</a>
          <a href="#">Create a trip</a>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>LATEST NEWS</h3>
          <a href="#">Blog</a>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>JOIN MY TRIP</h3>
          <a href="#">About us</a>
          <a href="#">Careers</a>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>SUPPORT</h3>
          <a href="#">Help & FAQ</a>
          <a href="#">Travel Insurance</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
