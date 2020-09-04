import { firestore } from '../constants/config';

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

export const updateOrderFirebase = (order, id) => {
  firestore
    .collection('checkouts')
    .doc(id)
    .set(order);
};
export const addToOrderFirebase = order => {
  firestore.collection('checkouts').add(order);
};

export const fetchOrderManagement = async userID => {
  try {
    const orderRef = await firestore
      .collection('checkouts')
      .where('userID', '==', userID)
      .where('status', '==', 2)
      .get();

    return orderRef.docs.map(doc => doc.data());
  } catch (err) {
    throw err;
  }
};

export const handleFetchOrderDetailByID = async orderID => {
  try {
    const productRef = await firestore
      .collection('checkouts')
      .where('id', '==', orderID)
      .limit(1)
      .get();
    const productDetail = productRef.docs;
    const data = productDetail[0].data();
    const newProductDetail = {
      ...data
    };
    if (!productDetail.length) {
      return {};
    }
    return newProductDetail;
  } catch (err) {
    throw err;
  }
};
