import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Login from './Components/Login/Login';
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div >
      <NavBar />
      <Login />
      <Toaster />
    </div>
  );
}

export default App;
