import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import SignInSplash from "./components/screens/SignInSplash";
import SignInScreen from "./components/screens/SignInScreen";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  let user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <div className="app">
        {!user ? (
          <SignInSplash />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="profile" element={<SignInScreen />} />
          </Routes>
        )}
      </div>
    </Provider>
  );
}

export default App;
