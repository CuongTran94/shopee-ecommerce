import { firestore } from '../constants/config';

export const fetchSilders = async () => {
  try {
    const data = await firestore
      .collection('sliders')
      .orderBy('order')
      .get();
    return data.docs.map(doc => doc.data());
  } catch (error) {
    throw error;
  }
};
