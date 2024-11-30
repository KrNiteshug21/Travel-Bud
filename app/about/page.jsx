"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPinterestSquare, FaInstagramSquare } from "react-icons/fa";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`FullName: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mx-auto mt-14 mb-6 py-8 max-w-screen-lg font-roboto">
      <div className="mx-auto px-4 text-gray-600 leading-relaxed container">
        <div className="space-y-4 mb-12">
          <h1 className="font-bold text-2xl text-center text-gray-950">
            Contact Us
          </h1>
          <p className="text-lg">
            We're thrilled that you want to get in touch with us at Moviedise.
            Whether you have questions, feedback, or simply want to connect with
            fellow movie enthusiasts, we're here and eager to hear from you.
            Feel free to reach us.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <h2 className="font-semibold text-gray-800 text-xl">
            Feedback and Suggestions:
          </h2>
          <p className="text-lg">
            Your opinion matters to us! If you have suggestions for improving
            our platform, features you'd like to see, or any other input, please
            don't hesitate to share. We're constantly striving to enhance your
            experience and value your insights. Thank you for considering
            reaching out to <b>Travel Buddy</b>. We're dedicated to providing a
            seamless and enjoyable experience for all movie enthusiasts, and
            your engagement is essential in achieving that goal. Let's continue
            celebrating the magic of cinema together!
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-[48%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="mb-4 font-semibold text-gray-800 text-xl">
                Feedback Form
              </h2>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name..."
                className="border-gray-500 shadow px-3 py-2 border-b-2 rounded w-full text-lg outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg: dummy@gmail.com"
                className="border-gray-500 shadow px-3 py-2 border-b-2 rounded w-full text-lg outline-none"
              />
              <textarea
                value={message}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message or query..."
                className="border-gray-700 px-4 py-2 border-b-2 rounded-md outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-900 ml-auto px-4 py-2 rounded-lg w-max text-white"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="place-content-center grid w-full md:w-[48%]">
            <div className="p-4 text-center">
              <Phone className="mx-auto w-16 h-16" />
              <h2 className="font-semibold text-2xl">PHONE</h2>
              <p>+91******2187</p>
            </div>
            <div className="p-4 text-center">
              <Mail className="mx-auto w-16 h-16" />
              <h2 className="font-semibold text-2xl">EMAIL</h2>
              <p>dummyJack12@gmail.com</p>
            </div>
            <div className="flex justify-center items-center gap-2 p-4">
              <Link href="https://www.facebook.com/">
                <AiFillFacebook size={40} />
              </Link>
              <Link href="https://twitter.com/i/flow/login">
                <AiFillTwitterSquare size={40} />
              </Link>
              <Link href="https://in.linkedin.com/">
                <AiFillLinkedin size={40} />
              </Link>
              <Link href="https://in.pinterest.com/">
                <FaPinterestSquare size={40} />
              </Link>
              <Link href="https://www.instagram.com/">
                <FaInstagramSquare size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
