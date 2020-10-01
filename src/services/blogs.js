import { firestore } from '../constants/config';

export const fetchPostsService = async collection => {
  try {
    const data = await firestore
      .collection(collection)
      .orderBy('published', 'desc')
      .get();
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

export const fetchPostFirstLoadService = async () => {
  try {
    const data = await firestore
      .collection('blogs')
      .orderBy('slug')
      .limit(4)
      .get();

    const documentData = data.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      };
    });

    const lastVisible = documentData[documentData.length - 1].slug;
    return {
      documentData,
      lastVisible
    };
  } catch (error) {
    throw error;
  }
};

export const retrieveMore = async lastId => {
  try {
    const additionalQuery = await firestore
      .collection('blogs')
      .orderBy('slug')
      .startAfter(lastId)
      .limit(4)
      .get();

    const documentData = additionalQuery.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      };
    });
    const lastVisible = documentData[documentData.length - 1]?.slug;
    return {
      documentData,
      lastVisible
    };
  } catch (error) {
    return;
    throw error;
  }
};
