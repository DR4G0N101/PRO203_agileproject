import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export function hashPassword(password) {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}