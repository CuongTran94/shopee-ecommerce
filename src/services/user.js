import { firestore, auth, rawFirebase } from '../constants/config';

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const getUserProfile = async ({ userAuth, data }) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  const userRef = await firestore.doc(`users/${uid}`);
  const userCurrent = await userRef.get();

  if (!userCurrent.exists) {
    const { displayName, email, photoURL, phoneNumber } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];
    const moreData = {
      gender: 'male',
      dateOfBirth: new Date(),
      address: 'None',
      fullName: 'None'
    };

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        phoneNumber,
        userRoles,
        createdAt: timestamp,
        ...moreData,
        ...data
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const updateUserProfile = (newUser, userID) => {
  try {
    return firestore
      .collection('users')
      .doc(userID)
      .set(newUser);
  } catch (error) {
    throw error;
  }
};

export const signUp = async ({ email, password }) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const data = await response.user;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    throw err;
  }
};

export const reAuthenticateUser = currentPassword => {
  const user = auth.currentUser;
  const cred = rawFirebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  );

  return user.reauthenticateWithCredential(cred);
};

export const changePasswordFirebase = async ({
  newPassword,
  currentPassword
}) => {
  await reAuthenticateUser(currentPassword)
    .then(() => {
      const user = auth.currentUser;
      user
        .updatePassword(newPassword)
        .then(() => {
          console.log('password was changed');
        })
        .catch(error => {
          throw error;
        });
    })
    .catch(error => {
      throw error;
    });
};
