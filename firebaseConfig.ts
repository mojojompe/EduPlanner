import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Firebase is initialized automatically by the native modules using google-services.json
// We just need to export the instances

GoogleSignin.configure({
    webClientId: '527319329706-bufeahjv63kikf3dh0v89tneogcbsrph.apps.googleusercontent.com',
});

const authInstance = auth();
const dbInstance = firestore();

export { authInstance as auth, dbInstance as db };
