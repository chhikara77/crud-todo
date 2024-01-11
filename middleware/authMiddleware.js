// middleware/authMiddleware.js
import { auth } from '../config/firebaseConfig.js';
import admin from 'firebase-admin';
// Initialize Firebase Admin with your service account key
import serviceAccount from '../config/firebase-adminkey.json' assert { type: "json" };
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
export const isAuthenticated = async (req, res, next) => {
 // const idToken = req.headers.authorization;
  const idToken = req.header('Authorization').replace('Bearer', '').trim()


  if (!idToken) {
    return res.status(401).json({ message: 'Unauthorized - Missing authorization token' });
  }

  try {
    console.log(idToken)
    const result =await admin.auth().verifyIdToken(idToken);
    
    console.log(result)
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ message: 'Unauthorized - Invalid authorization token' });
  }
};
