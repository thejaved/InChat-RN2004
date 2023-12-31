import firestore from '@react-native-firebase/firestore';

const sendMessage = async (
  roomId: string,
  senderId: string,
  text: string,
  type: string,
) => {
  try {
    const messagesCollection = firestore().collection(
      `rooms/${roomId}/messages`,
    );
    const timestamp = firestore.FieldValue.serverTimestamp();

    await messagesCollection.add({
      senderId,
      text,
      type,
      timestamp,
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const deleteMessage = async (roomId: string, messageId: string) => {
  try {
    const messageRef = firestore().doc(`rooms/${roomId}/messages/${messageId}`);
    await messageRef.delete();
  } catch (error) {
    console.error('Error deleting message:', error);
  }
};

const createChatRoom = async (user1Id: string, user2Id: string) => {
  try {
    // Check if a chat room already exists between the two users
    const existingRoomQuery = await firestore()
      .collection('rooms')
      .where('users', '==', [user1Id, user2Id])
      .get();

    if (!existingRoomQuery.empty) {
      // If a room already exists, return its ID
      const existingRoom = existingRoomQuery.docs[0];
      return existingRoom.id;
    }

    // If no room exists, create a new one
    const newRoomRef = await firestore()
      .collection('rooms')
      .add({
        users: [user1Id, user2Id],
        // Add any other room data as needed
      });

    console.log('Chat room created successfully with ID:', newRoomRef.id);
    return newRoomRef.id;
  } catch (error) {
    console.error('Error creating chat room:', error);
    return null;
  }
};

const getMessagesByRoomId = async (roomId: string) => {
  try {
    const messagesCollection = firestore().collection(
      `rooms/${roomId}/messages`,
    );

    // Query messages in ascending order of timestamp
    const querySnapshot = await messagesCollection
      .orderBy('timestamp', 'asc')
      .get();

    const messages: any = [];
    querySnapshot.forEach(doc => {
      // Get data from each document
      const messageData = doc.data();
      messages.push({
        messageId: doc.id,
        senderId: messageData.senderId,
        text: messageData.text,
        type: messageData.type,
        timestamp: messageData.timestamp.toDate(), // Convert timestamp to Date object
      });
    });

    return messages;
  } catch (error) {
    console.error('Error getting messages:', error);
    return null;
  }
};

export {sendMessage, deleteMessage, createChatRoom, getMessagesByRoomId};
