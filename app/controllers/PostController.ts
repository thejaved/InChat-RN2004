import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const createPost = async (
  userId: string,
  imageUri: string,
  title: string,
  description: string,
) => {
  try {
    const fileName = `${Date.now()}_${Math.random()}.jpg`;
    const reference = storage().ref(`posts/${fileName}`);

    const response = await fetch(imageUri);
    const blob = await response.blob();
    await reference.put(blob);

    const downloadURL = await reference.getDownloadURL();

    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substring(2, 7);
    const uniqueId = `${timestamp}_${randomNumber}`;

    const postData = {
      id: uniqueId,
      imageUrl: downloadURL,
      title,
      description,
      timestamp: Date.now(),
    };

    const userDoc = await firestore().collection('users').doc(userId).get();

    await firestore()
      .collection('users')
      .doc(userId)
      .update({posts: [...(userDoc.data()?.posts ?? []), postData]});

    Alert.alert('Success', 'Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
    Alert.alert('Error', 'Failed to create post');
  }
};

const deletePost = async (userId: string, postId: string) => {
  try {
    const userDoc = await firestore().collection('users').doc(userId).get();
    const userPosts = userDoc.data()?.posts || [];
    const postToDelete = userPosts.find((post: any) => post.id === postId);

    if (!postToDelete) {
      throw new Error('Post not found');
    }

    const imageRef = storage().refFromURL(postToDelete.imageUrl);
    await imageRef.delete();

    const updatedPosts = userPosts.filter((post: any) => post.id !== postId);

    await firestore()
      .collection('users')
      .doc(userId)
      .update({posts: updatedPosts});

    Alert.alert('Success', 'Post deleted successfully');
  } catch (error) {
    console.error('Error deleting post:', error);
    Alert.alert('Error', 'Failed to delete post');
  }
};

export {createPost, deletePost};
