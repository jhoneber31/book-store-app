export const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number
): number => {
  return parseFloat((price * (1 - discountPercentage / 100)).toFixed(2));
};
