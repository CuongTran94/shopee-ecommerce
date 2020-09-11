import { firestore } from '../constants/config';

export const fetchCategories = async () => {
  try {
    const data = await firestore
      .collection('categories')
      .where('c_parentId', '==', 'root')
      .orderBy('c_order')
      .get();
    return data.docs.map(doc => doc.data());
  } catch (error) {
    throw error;
  }
};
