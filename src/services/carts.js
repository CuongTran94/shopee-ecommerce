import { firestore } from '../constants/config';

export const handleFetchCart = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('carts')
      .orderBy('userID')
      .limit(24)
      .get()
      .then(product => {
        resolve(product.docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const addToCartFirebase = cart => {
  firestore.collection('carts').add(cart);
};

export const updateCartFirebase = (cart, id) => {
  firestore
    .collection('carts')
    .doc(id)
    .set(cart);
};

export const fetchOrderByUserID = async userID => {
  try {
    const orderRef = await firestore
      .collection('checkouts')
      .where('userID', '==', userID)
      .where('status', '==', 1)
      .limit(1)
      .get();
    const order = orderRef.docs;
    if (order.length === 0) return {};
    const { id } = order[0];
    const data = order[0].data();
    const newOrder = {
      id,
      ...data
    };
    return newOrder;
  } catch (err) {
    throw err;
  }
};

export const deleteCart = async cartID => {
  await firestore
  .collection('carts')
  .doc(cartID)
  .delete();
}

export const fetchCartByUserID = async userID => {
  try {
    const cartRef = await firestore
      .collection('carts')
      .where('userID', '==', userID)
      .limit(1)
      .get();
    const cart = cartRef.docs;
    if (cart.length === 0) return {};
    const { id } = cart[0];
    const data = cart[0].data();
    const newCart = {
      id,
      ...data
    };
    return newCart;
  } catch (err) {
    throw err;
  }
};
