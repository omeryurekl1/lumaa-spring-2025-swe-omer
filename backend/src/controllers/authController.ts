import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const existingUser = await userRepository.findOneBy({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = userRepository.create({
            username,
            password: hashedPassword
        });

        await userRepository.save(user);

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const user = await userRepository.findOneBy({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);

        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Error logging in' });
    }
}; 