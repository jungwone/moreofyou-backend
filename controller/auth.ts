import bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as userRepository from "../data/auth";
import { config } from "../config";

export async function singup(req: Request, res: Response) {
  const { email, password, name } = req.body;

  const user = await userRepository.findUserByEmail(email);
  if (user) {
    return res
      .status(409)
      .json({ message: `${email}로 가입된 계정이 존재합니다` });
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);

  userRepository.createUser({ email, name, password: hashedPassword });

  res.status(201).json({ message: "계정이 성공적으로 생성되었습니다." });
}
