import styles from "./page.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>TRAVEL</h3>
          <Link href="#">How it Works</Link>
          <Link href="#">Find a trip</Link>
          <Link href="/account/create_trip">Create a trip</Link>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>LATEST NEWS</h3>
          <Link href="#">Blog</Link>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>JOIN MY TRIP</h3>
          <Link href="#">About us</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className={styles.footerLinkWrapper}>
          <h3 className={styles.footerLinkHeading}>SUPPORT</h3>
          <Link href="#">Help & FAQ</Link>
          <Link href="#">Travel Insurance</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
