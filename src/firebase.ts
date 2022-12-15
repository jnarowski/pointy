import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, collection, doc, addDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_ANALYTICS_ID
};

export const firebaseApp = initializeApp(firebaseConfig)

if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

export const db = getFirestore(firebaseApp)

// Collections
export const roomCollection = collection(db, 'rooms')
export const organizationCollection = collection(db, 'organizations')
export const userCollection = collection(db, 'users')

export const createOrganization = async (attributes: {}) => {
  return addDoc(organizationCollection, attributes)
}

export const createUser = async (attributes: {}) => {
  return addDoc(userCollection, attributes)
}