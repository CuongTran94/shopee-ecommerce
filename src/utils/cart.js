export const getPrice = (price, qty) => {
  return price * qty;
};

 export function containsObject(productID, list) {
  let i;
  for (i = 0; i < list.length; i++) {
      if (list[i].id === productID) {
          return true;
      }
  }

  return false;
}

export const emptyObject  = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}