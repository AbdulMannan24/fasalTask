import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <SignUp/> } />
        <Route path = '/signin' element = { <SignIn/> } />
        <Route path = '/home' element = { <Home/> } />
      </Routes>
    </Router>
  )
}

export default App
