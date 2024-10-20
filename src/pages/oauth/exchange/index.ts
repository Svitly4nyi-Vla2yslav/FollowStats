import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;
    if (!code) {
        return res.status(400).json({ error: "😀 Autorization code is required" });
    }

    try {
        const tokenResponse = await axios.get("https://graph.facebook.com/v17.0/oauth/access_token", {
            params: {
                client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
                redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/oauth/callback`,
                client_secret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
                code,
            },
        });
        res.status(200).json(tokenResponse.data);
    } catch (error) {
        res.status(500).json({ error: "🫠 Failed to exchange code for token" });
        console.error("🫠 Failed to exchange code for token", error);
    }
}