import { firestore, auth } from '../constants/config';

export const getCurrentUser = async() => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const getUserProfile = async ({userAuth, data}) => {
    if(!userAuth) return;
    const { uid } = userAuth;

    const userRef = await firestore.doc(`users/${uid}`);
    const userCurrent = await userRef.get();

    if(!userCurrent.exists) {
        const { displayName, email, photoURL, phoneNumber } = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                phoneNumber,
                userRoles,
                createdAt: timestamp,
                ...data
            });
        }
        catch(err) {
            console.log(err);
        }
    }

    return userRef;
}

export const signUp = async({email, password}) => {
    try {
        const response = await auth.createUserWithEmailAndPassword(email, password);
        const data = await response.user;
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export const signIn = async({email, password}) => {
    try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        return user;
    } catch(err) {
        throw err;
    }
}