import NextAuth from 'next-auth';
import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { createOrUpdateUser } from '@/lib/db/user';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

interface GithubProfile {
  login: string;
  name?: string;
  email?: string;
  avatar_url?: string;
}

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // This callback is called whenever a user signs in
    async signIn({ user, account, profile }) {
      if (account?.provider === 'github') {
        try {
          const githubProfile = profile as GithubProfile;
          // Create or update user in our database
          await createOrUpdateUser({
            name: user.name || '',
            email: user.email || '',
            image: user.image || '',
            githubUsername: githubProfile.login,
          });
          return true;
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false;
        }
      } else if (account?.provider === 'email') {
        try {
          await createOrUpdateUser({
            name: user.name || '',
            email: user.email || '',
            image: user.image || '',
          });
          return true;
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false;
        }
      }
      return true;
    },

    // This callback is called whenever a session is checked
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        // Add user ID to the session
        session.user.id = token.sub as string;
      }
      return session;
    },

    // This callback is called whenever a JWT is created or updated
    async jwt({ token, user }) {
      if (user) {
        // Add user ID to the token
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
