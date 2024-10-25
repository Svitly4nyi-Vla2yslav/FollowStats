import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto"; // Потрібно для перевірки підпису в signed_request

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { signed_request } = req.body; // Отримуємо signed_request з тіла запиту

    if (!signed_request) {
        return res.status(400).json({ error: "🤣 Missing signed request" });
    }

    try {
        // Розділяємо signed_request на підпис і корисну інформацію
        const [signature, payload] = signed_request.split('.');

        // Розшифровуємо та декодуємо інформацію
        const decodedPayload = Buffer.from(payload, 'base64').toString('utf-8');
        const data = JSON.parse(decodedPayload); // Перетворюємо JSON-стрічку в об'єкт

        // Створюємо підпис для порівняння з використанням App Secret
        const expectedSignature = crypto
            .createHmac('sha256', process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string)
            .update(payload)
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, ''); // Приводимо підпис до правильного формату

        // Перевіряємо підпис
        if (signature !== expectedSignature) {
            return res.status(400).json({ error: "Invalid signature" });
        }

        // Якщо підпис вірний, обробляємо дані
        console.log("Deauthorized user data:", data);
        res.status(200).json({ message: "Deauthorization successful", data });
    } catch (error) {
        console.error("🤪 Failed to decode signed request:", error);
        return res.status(500).json({ error: "😩 Failed to decode signed request" });
    }
}