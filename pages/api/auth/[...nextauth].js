import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github"
// import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)