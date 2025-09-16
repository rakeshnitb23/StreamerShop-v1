import { ApiResponse } from '../types';

export const createResponse = <T>(
  success: boolean,
  data?: T,
  message?: string,
  error?: string
): ApiResponse<T> => {
  return {
    success,
    data,
    message,
    error,
  };
};

export const generateDiscountCode = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const calculateDiscount = (actualPrice: number, guessedPrice: number, maxDiscount: number): number => {
  const accuracy = Math.abs(actualPrice - guessedPrice) / actualPrice;
  const discountPercentage = Math.max(0, (1 - accuracy) * maxDiscount);
  return Math.round(discountPercentage * 100) / 100;
};