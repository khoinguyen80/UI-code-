import firebase from 'firebase/app'
import 'firebase/auth'
import { toast } from 'react-toastify'

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful authentication
      const { user } = result
      toast.success('User signed in with Google: ', user)
    })
    .catch((error) => {
      // Handle errors
      toast.error('Error signing in with Google: ', error)
    })
}
