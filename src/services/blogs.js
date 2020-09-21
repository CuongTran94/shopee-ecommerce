import { firestore } from '../constants/config';

export const fetchPostsService = async collection => {
  try {
    const data = await firestore.collection(collection).get();
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

export const fetchPostDetailService = async (collection, slug) => {
  try {
    const data = await firestore
      .collection(collection)
      .where('slug', '==', slug)
      .get();
    const post = data.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });

    return {
      ...post[0],
      published: post[0].published.toDate()
    };
  } catch (error) {
    throw error;
  }
};
