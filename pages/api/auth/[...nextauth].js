import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize({ token }) {
        return { token };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 60 * 60,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    async session({ session, user, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
});
