import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  MONGO_URI: str(),
  PORT: port(),
  JWT_SECRET: str(),
  JWT_EXPIRATION: str(),
});

export const isValidPassword = (password: string): boolean => {
  if (!password) return false;
  return true;
};

export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  return true;
};

export const isValidName = (name: string): boolean => {
  if (!name) return false;
  return true;
};
