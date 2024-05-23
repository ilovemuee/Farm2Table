import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfNssnGIrJN1-Jvq_HngnAMKiLPOP5JYQ",
  authDomain: "farm2table-2522b.firebaseapp.com",
  projectId: "farm2table-2522b",
  storageBucket: "farm2table-2522b.appspot.com",
  messagingSenderId: "104555492575",
  appId: "1:104555492575:web:629374d78838898e94656a",
  measurementId: "G-S1S9KLBMZT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export {app,auth,db}


