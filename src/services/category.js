import { firestore } from '../constants/config';

export const fetchCategories = async () => {
  try {
    const data = await firestore.collection('categories').get();
    return data.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      };
    });
  } catch (error) {
    throw error;
  }
};
