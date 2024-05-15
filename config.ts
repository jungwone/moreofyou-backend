// env

export const config = {
  bcrypt: {
    saltRounds: parseInt(process.env.SALT_ROUNDS || "12"),
  },
};
