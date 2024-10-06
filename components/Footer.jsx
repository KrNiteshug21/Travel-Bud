import styles from "./page.module.css";
import Link from "next/link";

const footers = [
  {
    head: "TRAVEL",
    links: [
      { title: "How it Works", src: "/#working" },
      { title: "Find a trip", src: "/trips" },
      { title: "Create a trip", src: "/account/create_trip" },
    ],
  },
  { head: "LATEST NEWS", links: [{ title: "Blog", src: "#" }] },
  {
    head: "Travel Buddy",
    links: [
      { title: "About us", src: "#" },
      { title: "Careers", src: "#" },
    ],
  },
  {
    head: "SUPPORT",
    links: [
      { title: "Help & FAQ", src: "#" },
      { title: "Travel Insurance", src: "#" },
      { title: "Contact", src: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primaryDarkBlue text-white/90">
      <div className={styles.footerWrapper}>
        {footers.map((footer, index) => {
          return (
            <div key={index} className={styles.footerLinkWrapper}>
              <h3 className={styles.footerLinkHeading}>{footer.head}</h3>
              {footer.links.map((link, i) => {
                return (
                  <Link key={`${index}+${i}`} href={link.src}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
