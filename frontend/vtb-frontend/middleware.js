import { withAuth } from "next-auth/middleware";

export default withAuth({
  // pages: {
  //     signIn: "/login"
  // },
  callbacks: {
    authorized: ({ token }) => {
      return !!token?.accessToken;
    },
  },
});

export const config = { matcher: ["/", "/profle"] };
