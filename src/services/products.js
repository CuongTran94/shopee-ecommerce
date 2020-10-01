import fire, { firestore } from '../constants/config';
import ProductDetail from '../pages/DetailPage/components/ProductDetail';

export const handleFetchProduct = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .orderBy('pro_name')
      .limit(24)
      .get()
      .then(product => {
        //  const productArray = product.docs.map(doc => {
        //      return {
        //          id: doc.id,
        //          ...doc.data(),
        //      };
        //  });
        resolve(product.docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getTotalProduct = async () => {
  try {
    const total = await firestore
      .doc('counters/products')
      .get()
      .then(doc => doc.get('count'));

    return total;
  } catch (err) {
    throw err;
  }
};

export const handlePaginateProduct = async ({ snapshot = [], page, limit }) => {
  

  try {
    if (page === 1) {
      snapshot = 0;
    } else {
      snapshot = snapshot[snapshot.length - 1];
    }

    const productLimit = firestore
      .collection('products')
      .orderBy('pro_name')
      .startAfter(snapshot)
      .limit(limit);
    const snapshotLimit = await productLimit.get();
    const items = snapshotLimit.docs;

    return items;
  } catch (err) {
    throw err;
  }
};

export const handleFetchDetailProduct = async slug => {
  try {
    const productRef = await firestore
      .collection('products')
      .where('pro_slug', '==', slug)
      .limit(1)
      .get();
    const productDetail = productRef.docs;
    const { id } = productDetail[0];
    const data = productDetail[0].data();
    const newProductDetail = {
      id: id,
      ...data
    };

    if (!productDetail.length) {
      return [];
    }
    return newProductDetail;
  } catch (err) {
    throw err;
  }
};

export const handleSearchProductByName = (name = '') => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .orderBy('pro_name')
      .startAt(name)
      .endAt(`${name.toLocaleLowerCase}\uf8ff`)
      .get()
      .then(product => {
        resolve(product.docs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const fetchProductsByCategories = async ({
  categoryIds = [],
  order = 'asc',
  sortBy
}) => {
  try {
    const productsRef = firestore.collection('products');
    if (sortBy === 'ctime') {
      const products = await productsRef
        .where('pro_cate', 'in', categoryIds)
        .orderBy('createdAt', 'desc')
        .get();
      return products.docs;
    }

    if (sortBy === 'sales') {
      const products = await productsRef
        .where('pro_cate', 'in', categoryIds)
        .orderBy('pro_sold', 'desc')
        .get();
      return products.docs;
    }

    const products = await productsRef
      .where('pro_cate', 'in', categoryIds)
      .orderBy('pro_price', order)
      .get();
    return products.docs;
  } catch (error) {
    throw error;
  }
};

export const fetchProductsByRangePrice = async ({
  categoryIds = [],
  order = 'asc',
  lowPrice,
  highPrice
}) => {
  try {
    const productsRef = firestore.collection('products');
    const products = await productsRef
      .where('pro_cate', 'in', categoryIds)
      .where('pro_price', '>=', lowPrice)
      .where('pro_price', '<=', highPrice)
      .orderBy('pro_price', order)
      .get();
    return products.docs;
  } catch (error) {
    throw error;
  }
};
