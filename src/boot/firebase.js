import firebaseService from '../services/firebase'
import 'firebase/auth'

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}
const firebaseApp = firebaseService.fBInit(config)

// Validation that our service structure is working
// with a firebase app instance. Does not validate a
// valid API key.
console.log(firebaseService.auth())
const firebaseAuth = firebaseApp.auth()
export { firebaseAuth }
