import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  let user = false;
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="profile" element={<LoginScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
