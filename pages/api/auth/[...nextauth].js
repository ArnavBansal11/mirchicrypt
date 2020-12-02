import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

export default (req, res) => 
    NextAuth(req, res, {
    providers: [
        Providers.Discord({
            clientId: "783612696930418699",
            clientSecret: "e8GuLWFgpAVwGy4C53Po0o1Sn7md5aV0"
        })
        ],
        callbacks: {
            signIn: async (_user, _account, _profile) => {
                
            }
        }
})