import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3014";
axios.defaults.withCredentials = true;

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                privateKey: { label: "Private Key", type: "text"}
            },
            async authorize(credentials, req) {
                const payload = {
                    privateKey: credentials?.privateKey
                }

                const res = await fetch('http://localhost:3014/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        tenant: credentials.tenantKey,
                        'Accept-Language': 'en-US',
                    }
                })

                const user = await res.json();
                if(res.ok && user) {
                    return user;
                }

                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'},
    callbacks: {
        async jwt({ token, user, account}) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: user?.token,
                    name: user?.result?.name
                }
            }

            return token;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            return session;
        },
        // async redirect({ url, baseUrl }) {
        //     // if (url !== baseUrl) {
        //     //     console.log(new URL(url));
        //     // }
        //     // const callbackUrl = new URL(url).searchParams.get('callbackUrl');
        //     // if (callbackUrl) {
        //     //     return baseUrl + callbackUrl;
        //     // }
        //     return url;
        // }
    }
}
export default NextAuth(authOptions)