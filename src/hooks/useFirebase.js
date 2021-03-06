import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getIdToken,
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  // Providers
  const googleProvider = new GoogleAuthProvider();

  // sign in using google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // observe whether user auth state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem("idToken", idToken)
        );
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
