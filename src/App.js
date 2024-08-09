import Home from "./Home";
import TopBar from "./topbar/TopBar";
import Single from "./Single";
import Write from "./write/Write";
import Settings from "./Settings";
import Login from "./login/Login";
import Register from "./register/Register";
import {
 Routes,BrowserRouter,Route
}from "react-router-dom"

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/write" element={user ? <Write /> :<Register/>} />
        <Route path="/settings" element={ user ? <Settings/>: <Register/>} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/about" element={<Single />} />
        <Route path="/about" element={<Single />} />
        
      </Routes>
      
  </BrowserRouter>
  );
}

export default App;
