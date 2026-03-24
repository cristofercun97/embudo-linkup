import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBy7oBzUZzAjLaBRlXwfS5_so31ASHk7CM',
  authDomain: 'linkup-encuesta-2026.firebaseapp.com',
  projectId: 'linkup-encuesta-2026',
  storageBucket: 'linkup-encuesta-2026.firebasestorage.app',
  messagingSenderId: '74475292124',
  appId: '1:74475292124:web:81a7ffe045724f25c0bb19'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
