"use client";
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
      { title: "About us", src: "/about" },
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
    <footer className="bg-primaryDarkBlue text-white overflow-hidden">
      <div className="flex flex-wrap justify-between gap-4 px-8 py-12">
        {footers.map((footer, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-2xl">{footer.head}</h3>
              {footer.links.map((link, i) => {
                return (
                  <div key={`${index}+${i}`}>
                    <Link
                      className="text-white/50 text-xl hover:text-white/70 hover:underline no-underline"
                      href={link.src}
                    >
                      {link.title}
                    </Link>
                  </div>
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
