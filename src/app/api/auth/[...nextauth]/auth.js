import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const isTrueEmail = credentials.email === process.env.EMAIL
          const pssIsTrue = credentials.password === process.env.PASSWORD

          if (!pssIsTrue || !isTrueEmail) {
            return null
          }

          return {
            email: credentials.email,
            password:credentials.password
          }
        } catch (error) {
          console.log(error)
          return null
        }
      },
      callbacks: {
        async session({ session, user, token }) {
          session.user = token.user
          return session
        },
        async jwt({ token, user}) {
          if (!user) {
            return token;
          }

          token.user = user
          console.log(token)
          return token
        },
        async redirect({ url, baseUrl }) {
          return baseUrl;
        },
      },
      pages: {
        signIn: '/admin/signin',
      },
      secret:process.env.NEXTAUTH_SECRET
    })
  ],
}
