"use client";
import { useState } from "react";
import { IoPerson, IoEyeOffSharp, IoEyeSharp, IoMail } from "react-icons/io5";
import { UploadButton } from "@/hooks/uploadthing";
import { useRouter } from "next/navigation";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import Image from "next/image";
import SuccessModal from "@/components/SuccessModal";

const initialModalObj = {
  header: "",
  msg: "",
  trigger: false,
};

export default function RegisterPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [modalObj, setModalObj] = useState(initialModalObj);
  const router = useRouter();

  const createUser = async () => {
    const response = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, profilePic: image }),
    });

    if (!response.ok) {
      setModalObj({
        header: "Error",
        msg: "Failed to create user",
        trigger: true,
      });
      return;
    }

    setModalObj({
      header: "Success",
      msg: `${username} created successfully`,
      trigger: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser();
    setUsername("");
    setEmail("");
    setPassword("");
    setImage(null);
  };

  const clickFunction = () => {
    if (modalObj.header === "Success") router.push("/account/sign_in");
    setModalObj(initialModalObj);
    return;
  };

  return (
    <>
      {modalObj.trigger && (
        <SuccessModal modalObj={modalObj} clickFunction={clickFunction} />
      )}
      <section className="flex justify-center items-center mx-auto max-w-screen-xl min-h-screen">
        <div className="flex-auto border-2 backdrop-blur-md p-4 rounded-lg max-w-md">
          <h2 className="mb-4 font-semibold text-2xl text-center">Sign up!</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative flex flex-auto justify-between w-full">
              <label className="hidden" htmlFor="username">
                Username{" "}
              </label>
              <input
                className="border-gray-500 shadow px-3 py-2 border-b-2 rounded w-full text-lg outline-none"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <IoPerson
                size={24}
                className="top-3 right-3 absolute cursor-pointer"
              />
            </div>

            <div className="relative flex flex-auto justify-between w-full">
              <label className="hidden" htmlFor="email">
                Email{" "}
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
              <IoMail
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
              {showPwd ? (
                <IoEyeSharp
                  size={24}
                  onClick={() => setShowPwd(!showPwd)}
                  className="top-3 right-3 absolute cursor-pointer"
                />
              ) : (
                <IoEyeOffSharp
                  size={24}
                  onClick={() => setShowPwd(!showPwd)}
                  className="top-3 right-3 absolute cursor-pointer"
                />
              )}
            </div>

            <div className="flex justify-center items-center gap-10">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImage(res[0].url);
                  alert("Upload Completed");
                }}
                onUploadError={(error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
              {image && (
                <Image
                  src={image}
                  alt="uploaded image"
                  width={70}
                  height={70}
                  className="rounded h-w-32 w-32"
                />
              )}
            </div>

            <div className="mx-auto">
              <ButtonAnimation
                disabled={!username || !email || !password || !image}
                text="Sign up"
                type="submit"
                className="bg-blue-700 px-4 py-2 rounded w-40 text-lg text-white cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
