// Алфавит Base62 (0-9, A-Z, a-z) — безопасно для URL
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const generateShortCode = (): string => {
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return result;
};