import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
  appId: VUE_APP_APP_ID,
  measurementId: VUE_APP_MEASUREMENT_ID,
})

export const DB = firebase.firestore()
const analytics = getAnalytics(app)
