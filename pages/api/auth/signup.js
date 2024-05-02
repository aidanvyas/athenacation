import { Database } from '@replit/database';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new Database();

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, phoneNumber, password } = req.body;

      // Here you should add server-side validation for email and phone number as well

      // Hash the password before storing it in the database
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Store the email, phoneNumber, and hashedPassword in the Replit database
      await db.set(email, { phoneNumber, hashedPassword });

      // Respond with a success message
      res.status(200).json({ message: 'Sign-up successful' });
    } catch (error) {
      console.error('Sign-up error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    res.status(405).end();
  }
}
