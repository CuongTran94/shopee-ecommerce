export const getPrice = (price, qty) => {
  return price * qty;
};

export const containsObject = (productID, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].pro_id === productID) {
      return true;
    }
  }
  return false;
};

export const getTotalPrice = (products = []) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].pro_price * products[i].pro_quantity;
  }
  return total;
};

export const emptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
