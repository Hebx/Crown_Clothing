import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDHm-on_DiFBua90oiI4M1YzA1LqktECec',
  authDomain: 'crown-db-3e03e.firebaseapp.com',
  projectId: 'crown-db-3e03e',
  storageBucket: 'crown-db-3e03e.appspot.com',
  messagingSenderId: '310747225597',
  appId: '1:310747225597:web:71ac9b34b645e7fec74d94',
  measurementId: 'G-R3PTFDC15G',
}
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
