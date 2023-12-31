import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

type UserType = {
  fullName: string;
  email: string;
  password: string;
};

const registerUser = async (userData: UserType) => {
  try {
    const {email, fullName} = userData;

    const userExists = await isUserExists(email);

    if (userExists) {
      Alert.alert('Error!!', 'Email is already in use');
      return null;
    }

    const usersCollection = firestore().collection('users');
    const newUserRef = await usersCollection.add({
      ...userData,
      isVerified: false,
      posts: [],
      bio: `Hi 👋, I am ${fullName}`,
    });
    const newUserDoc = await newUserRef.get();
    const newUser = {id: newUserDoc.id, ...newUserDoc.data()};

    return newUser;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const usersCollection = firestore().collection('users');
    const querySnapshot = await usersCollection
      .where('email', '==', email)
      .where('password', '==', password)
      .get();

    if (querySnapshot.empty) {
      Alert.alert('Error!!', 'Invalid email or password');
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = {id: userDoc.id, ...userDoc.data()};

    return userData;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

const getUserById = async (userId: string) => {
  try {
    const userDoc = await firestore().collection('users').doc(userId).get();

    if (!userDoc.exists) {
      Alert.alert('Error!!', 'User not found');
      return null;
    }

    const userData = {id: userDoc.id, ...userDoc.data()};

    return userData;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    return null;
  }
};

const isUserExists = async (email: string): Promise<boolean> => {
  const usersCollection = firestore().collection('users');
  const querySnapshot = await usersCollection.where('email', '==', email).get();
  return !querySnapshot.empty;
};

export {registerUser, loginUser, getUserById, isUserExists};
