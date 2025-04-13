import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import NotSignedInPage from './components/signedOut/NotSignedInPage.jsx'
import SignedInPage from './components/signedIn/SignedInPage';

// Import functions from SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, collection, getDocs, query, collectionGroup, where } from "firebase/firestore";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    //web app's Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();
    connectFirestoreEmulator(db, 'localhost', 8080);

    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");

    // Add Firebase auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // Perform actions or update state as needed
        setIsSignedIn(true);
      } else {
        // User is signed out
        // Perform actions or update state as needed
        setIsSignedIn(false);
      }
    });

    

    // Get a reference to the warning element
    const warningElement = document.querySelector('.firebase-emulator-warning');

    // Check if the warning element exists
    if (warningElement) {
      // Remove the warning element from its parent
      warningElement.parentNode.removeChild(warningElement);
    }


    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  // Your App component code
  // ...

  console.log(isSignedIn)  

  return (

   <Router>
      <Routes>
          <Route exact path="/" element={
            !isSignedIn ? (
              <NotSignedInPage/>
            ) : (
              <Navigate replace to= {"/learn"}/>
            )
          }/>
          <Route exact path="/learn" element={
            isSignedIn ? (
              <SignedInPage/>
            ) : (
              <Navigate replace to={"/"}/>
            )
          }/>
      </Routes>
    </Router>
  );
}

export default App;