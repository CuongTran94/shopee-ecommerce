export const getPrice = (price, qty) => {
  return price * qty;
};

export const containsObject = (productID, products = []) => {
  return products.some(product => product.pro_id === productID);
};

export const getTotalPrice = (products = []) => {
  return products.reduce(
    (acc, curr) => acc + curr.pro_price * curr.pro_quantity,
    0
  );
};

export const emptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const truncateString = (string, maxLength = 30) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const getTotalQuantity = (products = []) => {
  return products.reduce((acc, curr) => acc + curr.pro_quantity, 0);
};

export const sepratePriceNumber = price => {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
};
