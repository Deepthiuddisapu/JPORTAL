import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reg from './Register';
import Login from './Login';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Reg/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;