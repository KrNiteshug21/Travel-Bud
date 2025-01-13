"use client";
import { useState } from "react";
import { IoPerson, IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import ButtonAnimation from "@/Anim/ButtonAnimation";

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signIn("credentials", {
      email,
      password,
    });
    // console.log("data", data);

    setPassword("");
    setEmail("");
  };

  const handleLogin = async ({ provider }) => {
    await signIn(provider);
  };

  return (
    <section className="flex justify-center items-center mx-auto max-w-screen-xl min-h-screen">
      <div className="flex-auto border-2 shadow-xl backdrop-blur-md p-4 rounded-lg max-w-md">
        <h2 className="mb-4 font-semibold text-2xl text-center">Sign In!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative flex flex-auto justify-between w-full">
            <label className="hidden" htmlFor="email">
              email{" "}
            </label>
            <input
              className="border-gray-500 shadow px-3 py-2 border-b-2 rounded w-full text-lg outline-none"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoPerson
              size={24}
              className="top-3 right-3 absolute cursor-pointer"
            />
          </div>

          <div className="relative flex flex-auto justify-between w-full">
            <label className="hidden" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="border-gray-500 shadow px-3 py-2 border-b-2 rounded w-full text-lg outline-none"
              type={showPwd ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPwd ? (
              <IoEyeOffSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className="top-3 right-3 absolute cursor-pointer"
              />
            ) : (
              <IoEyeSharp
                size={24}
                onClick={() => setShowPwd(!showPwd)}
                className="top-3 right-3 absolute cursor-pointer"
              />
            )}
          </div>

          {/* <div className="flex justify-between items-center text-lg">
            <p>Remember me</p>
            <p>Forgot password</p>
          </div> */}

          <div className="mx-auto">
            <ButtonAnimation
              text="login"
              type="submit"
              className="bg-blue-700 px-4 py-2 rounded w-40 text-lg text-white cursor-pointer"
            />
          </div>
        </form>

        <p className="my-4 text-center text-lg">or</p>

        {/* <div className="flex flex-col gap-4">
          <button
            onClick={() => handleLogin("facebook")}
            className="relative flex justify-center items-center gap-2 bg-blue-600 mx-5 py-2 border-none rounded text-lg text-white overflow-hidden"
          >
            <span className="left-0 absolute place-content-center grid bg-blue-950 w-12 h-full">
              <FaFacebook size={24} />
            </span>{" "}
            Login with Facebook
          </button>
          <button
            onClick={() => handleLogin("google")}
            className="relative flex justify-center items-center gap-2 bg-blue-600 mx-5 py-2 border-none rounded text-lg text-white overflow-hidden"
          >
            <span className="left-0 absolute place-content-center grid bg-blue-950 w-12 h-full">
              <FcGoogle size={24} />
            </span>
            Login with Google
          </button>
        </div>
        <p className="my-4 text-center text-lg">or</p> */}

        <p className="text-center text-lg">
          <Link
            className="text-blue-600 hover:underline cursor-pointer"
            href={"/account/sign_up"}
          >
            Click here
          </Link>{" "}
          to create an account
        </p>
      </div>
    </section>
  );
}
