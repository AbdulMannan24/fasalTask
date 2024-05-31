import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import List from './components/List';
import CreateList from './pages/CreateList';
import axios from 'axios';
import { Api } from './apiConfig';
import { useEffect } from 'react';


function App() {
  // Activating Free server instance
  useEffect(()=> {
      axios.get(Api +'/');
  }, [])

  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <SignUp/> } />
        <Route path = '/signin' element = { <SignIn/> } />
        <Route path = '/home' element = { <Home/> } />
        <Route path = '/createlist' element = { <CreateList/> } />
      </Routes>
    </Router>
  )
}

export default App
