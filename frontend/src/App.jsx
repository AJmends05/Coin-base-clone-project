import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/signin"   element={<SignIn />} />
        <Route path="/signup"   element={<SignUp />} />
        <Route path="/explore"  element={<Explore />} />
        <Route path="/profile"  element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App