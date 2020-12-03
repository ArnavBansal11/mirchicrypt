import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.Discord({
        clientId: "783612696930418699",
        clientSecret: "e8GuLWFgpAVwGy4C53Po0o1Sn7md5aV0",
        scope: "identify email guilds.join",
      }),
    ],

    callbacks: {
      signIn: async (_user, _account, _profile) => {
        axios
          .post("http://localhost:5000/auth/login", {
            user: _user,
            account: _account,
            profile: _profile,
          })
          .then((res) => {
            return Promise.resolve(true);
          })
          .catch((ex) => Promise.resolve(false));
      },
    },
  });
