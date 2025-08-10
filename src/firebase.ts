import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // ✅ Ավելացրու սա

const firebaseConfig = {
  apiKey: "AIzaSyAPXGWHUuV9mB-8gK0i5UVl7oZ1Mq1qEn0",
  authDomain: "myproject-73982.firebaseapp.com",
  databaseURL: "https://myproject-73982-default-rtdb.firebaseio.com",
  projectId: "myproject-73982",
  storageBucket: "myproject-73982.firebasestorage.app",
  messagingSenderId: "378828638389",
  appId: "1:378828638389:web:a5c9739e12cfdf3b2b16fc"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// ✅ Ահա սա է լուծումը
export const auth = getAuth(app);
