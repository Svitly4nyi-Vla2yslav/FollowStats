import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { saveUserData } from "../../../firestore";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query?.code as string | undefined;

    if (!code) {
        return res.status(400).json({ error: "😀 Authorization code is required" });
    }

    try {
        const tokenResponse = await axios.get("https://graph.facebook.com/v17.0/oauth/access_token", {
            params: {
                client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
                redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/oauth/callback`,
                client_secret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
                code,
            },
        });

        const accessToken = tokenResponse.data.access_token;

        const userResponse = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`);
        const userData = userResponse.data;

        await saveUserData({
            id: userData.id,
            name: userData.name,
            accessToken,
        });

        res.status(200).json({ message: "💛💙 Authorization successful", userData });

    } catch (error) {
        console.error("🫠 Failed to exchange code for token", error);
        res.status(500).json({ error: "🫠 Failed to exchange code for token" });
    }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
