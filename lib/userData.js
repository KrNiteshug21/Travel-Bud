import { connectDB } from "./DBConn";

export const fetchUsers = async () => {
  try {
    const res = await fetch(`http://localhost:${process.env.PORT}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await res.json();
    // return data;
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
};
