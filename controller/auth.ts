import { Request, Response } from "express";

export async function singup(req: Request, res: Response) {
  const { email, password, name } = req.body;

  res.status(201).json({ email, password, name });
}
