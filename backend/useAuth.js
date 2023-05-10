import React, { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { notification } from "antd";
import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  RecaptchaVerifier,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { useState } from "react";
// import { notification } from "antd";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const [user, setUser] = useState([]);
  const [userDb, setUserDb] = useState(typeof window !== "undefined" && JSON.parse(localStorage.getItem("userDb")));

  

  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    
    if (typeof window !== "undefined") {
      const userDb = JSON.parse(localStorage.getItem("userDb"));
      setUserDb(userDb);
    }
  }, [user]);


  useEffect(() => {
    window.addEventListener("storage", (e) => {
      const userDb = JSON.parse(localStorage.getItem("userDb"));
      setUserDb(userDb);
    });
    return () => {
      window.removeEventListener("storage", (e) => {
        const userDb = JSON.parse(localStorage.getItem("userDb"));
        setUserDb(userDb);
      });
    };
  }, [user]);


  const onSignin = () => {
    window.recaptchaVerifier = new RecaptchaVerifier( "sign-in-button", {
        size: "invisible",
        callback: (response) => {
            console.log("Recaptcha resolved");
        },
        defaultCountry: "IN",
    },auth);
    const phoneNumber = JSON.parse(localStorage.getItem("userPhn"));
    // const phoneNumber = "+919962444054";
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            const code = window.prompt("Enter OTP");
            confirmationResult
                .confirm(code)
                .then((result) => {
                    const user = result.user;
                    console.log("User is signed in");
                    setDoc(
                      doc(db, "users", user?.uid),
                      {
                        uid: user?.uid,
                        phoneNumber: user?.phoneNumber,
                      },
                      { merge: true }

                    ).then( async () => {
                      localStorage.setItem(
                        "userDb", 
                        JSON.stringify({
                          uid: user?.uid,
                          phoneNumber: user?.phoneNumber,
                        })
                        );
                        setUserDb({
                          uid: user?.uid,
                          phoneNumber: user?.phoneNumber,
                        })
                        const docRef = doc(db, "users", user?.uid);
                        const docSnap = await getDoc(docRef);
                        const checkUser = docSnap.data();
                        if (checkUser.name) {
                          router.push(`/dashboard/${userDb?.uid}`);
                        } else {
                          router.push("/register");
                        }
                      }).catch((error) => alert(error.message));
                })
                .catch((error) => alert(error.message));
        })
        .catch((error) => alert(error.message));
    };


  const onSignout = () => {
    signOut(auth)
    .then(() => {
        console.log("User signed out");
        setUser(null);
        localStorage.removeItem("userPhn");
        localStorage.removeItem("userDb");
        localStorage.removeItem("user");
        router.push("/");
      })
      .catch(() => {
        alert("Error logging out");
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, onSignin, onSignout,api, userDb, setUserDb }}
    >
      {children}
      {contextHolder}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
