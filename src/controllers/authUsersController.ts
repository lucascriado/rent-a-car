import { Request, Response } from 'express';
import { createUser, getUser } from '../database/queries/authUsersQuery';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newUser = await createUser(username, password);
    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const userRows = await getUser('username', username);
    const user = userRows[0] as { username: string, password: string };

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login bem-sucedido', token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
};