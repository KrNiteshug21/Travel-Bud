import NextAuth from "next-auth";
import { fetchUsers } from "@/lib/userData";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const OPTIONS = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password...",
        },
      },
      async authorize(credentials) {
        const users = await fetchUsers();

        const user = users.find((user) => credentials.username === user.name);

        const isSame =
          (await bcrypt.compare(credentials.password, user.password)) &&
          credentials.username === user.name;

        if (isSame) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
