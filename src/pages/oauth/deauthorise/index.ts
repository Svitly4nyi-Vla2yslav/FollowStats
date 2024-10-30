import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { signed_request } = req.body;
    if (!signed_request) {
        return res.status(400).json({ error: "🤣 Missing signed request" });
    }

    try {
        const [signature, payload] = signed_request.split('.');
        if (!signature || !payload) {
            return res.status(400).json({ error: "Invalid signed request format" });
        }

        const decodedPayload = Buffer.from(payload, 'base64').toString('utf-8');
        const data = JSON.parse(decodedPayload);

        const expectedSignature = crypto
            .createHmac('sha256', process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string)
            .update(payload)
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        if (signature !== expectedSignature) {
            return res.status(400).json({ error: "Invalid signature" });
        }

        console.log("Deauthorized user data:", data);
        res.status(200).json({ message: "Deauthorization successful", data });
    } catch (error) {
        console.error("🤪 Failed to decode signed request:", error);
        return res.status(500).json({ error: "😩 Failed to decode signed request" });
    }
}
