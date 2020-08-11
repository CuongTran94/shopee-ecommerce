import { firestore } from "../constants/config";

export const handleFetchCart = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("carts")
      .orderBy("userID")
      .limit(24)
      .get()
      .then((product) => {
        resolve(product.docs);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const fetchCartByUserID = async (userID) => {
  try {
    const cartRef = await firestore
      .collection("carts")
      .where("userID", "==", userID)
      .limit(1)
      .get();
    const cart = cartRef.docs;
    const { id } = cart[0];
    const data = cart[0].data();
    const newCart = {
      id: id,
      ...data,
    };
    if (!cart.length) {
      return [];
    }
    return newCart;
  } catch (err) {
    throw err;
  }
};
