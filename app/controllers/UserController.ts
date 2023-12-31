import firestore from '@react-native-firebase/firestore';
import {User} from '@react-native-google-signin/google-signin';
import {isUserExists} from './AuthController';

const getUsers = async (currentUserEmail: string) => {
  try {
    const usersCollection = firestore().collection('users');
    const querySnapshot = await usersCollection.get();

    if (querySnapshot.empty) {
      return [];
    }

    const usersData = querySnapshot.docs
      .map(userDoc => ({id: userDoc.id, ...userDoc.data()}))
      .filter((user: any) => user.email !== currentUserEmail);

    return usersData;
  } catch (error) {
    console.error('Error getting users:', error);
    return null;
  }
};

const addUser = async (user: User) => {
  try {
    const {email} = user.user;

    // Check if the user already exists
    const userExists = await isUserExists(email);

    if (userExists) {
      const existingUser = await getUserByEmail(email);
      return existingUser;
    }

    const newUser = await addNewUser(user);
    return newUser;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};

const getUserByEmail = async (email: string) => {
  const usersCollection = firestore().collection('users');
  const querySnapshot = await usersCollection.where('email', '==', email).get();

  if (querySnapshot.empty) {
    return null;
  }

  const userDoc = querySnapshot.docs[0];
  const userData = {id: userDoc.id, ...userDoc.data()};

  return userData;
};

const addNewUser = async (user: User) => {
  const {email, name, photo} = user.user;

  const usersCollection = firestore().collection('users');
  const newUserRef = await usersCollection.add({
    name,
    email,
    photo,
    posts: [],
    isVerified: true,
    bio: `Hi 👋, I am ${name}`,
  });

  const newUserDoc = await newUserRef.get();
  const newUser = {id: newUserDoc.id, ...newUserDoc.data()};

  return newUser;
};

export {addUser, getUsers};
