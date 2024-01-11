// controllers/userController.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig.js';
// Initialize Firebase with your configuration


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class UserController {
  static async sendLoginLink(req,res) {
    const { email } = req.body;
    console.log(email)
    try {
      const actionCodeSettings = {
        url: 'http://localhost:3000/login', // Change this URL to your frontend URL
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      
      console.log('Login link sent to email.');
      res.json("login link sent to email")
    } catch (error) {
      console.log(error)
      //res.status(500).json('Error sending login link:', error);
    }
  }

  static async verifyLoginLink(req,res) {
    const {email,oobCode} = req.body
    console.log(email,oobCode)
    try {
      const result = await signInWithEmailLink(auth, email, oobCode);

      // Get user info from the result
      const { user } = result;
      
      console.log('Login successful.',user);
      res.json({message:"loginn successful",token:user.stsTokenManager.accessToken})
    } catch (error) {
      console.error('Error verifying login link:', error);
    }
  }
}

export default UserController;
