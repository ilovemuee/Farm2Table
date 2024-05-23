import  initializeApp  from '@react-native-firebase/app';
import  getAuth  from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfNssnGIrJN1-Jvq_HngnAMKiLPOP5JYQ",
  authDomain: "farm2table-2522b.firebaseapp.com",
  projectId: "farm2table-2522b",
  storageBucket: "farm2table-2522b.appspot.com",
  messagingSenderId: "104555492575",
  appId: "1:104555492575:web:629374d78838898e94656a",
  measurementId: "G-S1S9KLBMZT"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


