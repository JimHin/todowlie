import firebaseService from '../services/firebase'
import 'firebase/auth'
import 'firebase/firestore'

export default async () => {
  const config = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
  firebaseService.fBInit(config)

  // Validation that our service structure is working
  // with a firebase app instance. Does not validate a
  // valid API key.
  console.log(firebaseService.auth())
}
