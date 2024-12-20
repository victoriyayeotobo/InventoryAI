import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Encrypt data using bcrypt
export const encrypt = async (data: string) => {
  const salt = await bcrypt.genSalt(10);
  const encrypted = await bcrypt.hash(data, salt);
  return encrypted;
};

// Decrypt data (using bcrypt)
export const decrypt = async (data: string, hash: string) => {
  const isMatch = await bcrypt.compare(data, hash);
  return isMatch;
};

// Generate JWT token
export const generateToken = (payload: object, secret: string, expiresIn: string = '1h') => {
  return jwt.sign(payload, secret, { expiresIn });
};

// Verify JWT token
export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
