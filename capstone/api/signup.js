import { Pocketbase } from 'pocketbase';

const pb = new Pocketbase('http://127.0.0.1:8090');

export default async (req, res) => {
  const { firstname, lastname, email, username, password, repassword } = req.body;
  try {
    const response = await pb.add('user', { firstname, lastname, email, username, password, repassword });
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating user' });
  }
}