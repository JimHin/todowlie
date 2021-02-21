import firebaseService from '../services/firebase'
import 'firebase/auth'
import 'firebase/firestore'

export default async () => {
  const config = {
    apiKey: 'AIzaSyDHvx1XPPgLVhdda2cr9kJN5lJrK1wwtck',
    authDomain: 'todowlie.firebaseapp.com',
    projectId: 'todowlie',
    storageBucket: 'todowlie.appspot.com',
    messagingSenderId: '583074680185',
    appId: '1:583074680185:web:1bbfa6a4a8228ca3cf33a8',
    measurementId: 'G-1S78PM8NJW'
  }
  firebaseService.fBInit(config)

  // Validation that our service structure is working
  // with a firebase app instance. Does not validate a
  // valid API key.
  console.log(firebaseService.auth())
}
