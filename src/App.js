import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import NavigationBar from "./components/NavigationBar/NavigationBar"

function App() {
  return (
    <BrowserRouter basename="/single">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/beranda" element={<><NavigationBar/></>} />
        <Route path="/logout" element={<><Logout/></>} />
        <Route path="*" element={<PageNotFound />} status={404}/>
      </Routes>
    </BrowserRouter>
  );
}

function PageNotFound() {
  return (
    <div className="container mt-3">
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  );
}

export default App;
