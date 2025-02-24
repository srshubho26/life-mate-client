import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosWithCredentials from "../hooks/useAxiosWithCredentials";
import Loading from "../components/reusuable/Loading";

export const AuthContext = createContext();
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const axiosWithCredentials = useAxiosWithCredentials();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                axiosWithCredentials.post("/jwt", { email: currentUser.email })
                    .then(() => {
                        setUser(currentUser);
                        setLoading(false);
                    })
                    .catch(()=>{
                        setLoading(false);
                    })
            } else {
                setLoading(false)
            }
        });

        return unsubscribe;
    }, [axiosWithCredentials]);

    useEffect(()=>{
        document.body.classList[dark? 'add' : 'remove']('dark');
    }, [dark])

    // Google Signin
    const googleSignin = () => signInWithPopup(auth, googleAuth);

    // Create new user with email & password
    const createNewUser = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                axiosWithCredentials.post("/create-user", { name, email })

                const updateFields = { displayName: name, photoURL };
                updateProfile(auth.currentUser, updateFields)
                    .then(() => {
                        setUser({ ...auth.currentUser, ...updateFields });
                    })
            })
    }

    // Login user with email & password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout function
    const logOut = async () => {
        setLoading(true);
        await axiosWithCredentials.post("/logout");
        setUser(null);
        return signOut(auth);
    }

    const values = { user, logOut, loginUser, createNewUser, googleSignin, setDark }

    return (<AuthContext.Provider value={values}>
        <div className={(dark ? "bg-lite-dark" : "bg-lite")}>
        {loading ? < Loading loading={loading} /> : children}
        </div>
    </AuthContext.Provider>);
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;