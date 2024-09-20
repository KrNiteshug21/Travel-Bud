import User from "@/models/User";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/DBConn";
import bcrypt from "bcrypt";

async function handler(req, res) {
  return await NextAuth(req, res, OPTIONS);
}

export const OPTIONS = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password...",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;
        if (!email || !password) return null;
        const user = await User.findOne({ email });
        if (!user) return null;

        const isSame = await bcrypt.compare(password, user.password);
        if (!isSame) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/account/sign_in",
  },
  secret: process.env.NEXTAUTH,

  callbacks: {
    async jwt({ token, account, profile, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.id;
      return session;
    },
  },
};

// const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
