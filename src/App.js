
import './App.css';
import Router from './Router'
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';
import Sidebar from './pages/layouts/Sidebar';
import Navbar from './pages/layouts/Navbar';


axios.defaults.withCredentials = true


function App() {
  return (
    <AuthContextProvider>
      <div className="app">
        <Sidebar />
        <main className='main-dash'>
          <Navbar />
          <Router />
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
