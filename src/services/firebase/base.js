import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

/**
 * Returns Firebase's auth service
 * https://firebase.google.com/docs/reference/js/firebase.auth.html#callable
 * @author "JimHin <krowstudio@icloud.com>"
 * @return {Interface} The Firebase Auth service interface
 */
export const auth = () => {
  return firebase.auth()
}
/**
 * Returns Firebase's firestore service
 * @author "JimHin <krowstudio@icloud.com>"
 * @return {Interface} The Firebase firestore service interface
 */
export const db = () => {
  return firebase.firestore()
}
/**
 * Returns Firebase's firestore collection todos
 * @author "JimHin <krowstudio@icloud.com>"
 */
export const todosCollection = () => {
  return db.collection('todos')
}

/** Convenience method to initialize firebase app
 * @author "JimHin <krowstudio@icloud.com>"
 * @param  {Object} config
 * @return {Object} App
 */
export const fBInit = (config) => {
  return firebase.initializeApp(config)
}
