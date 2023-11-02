import './App.css';
import Main from './components/Main';
import Result from './components/Result';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/test.result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
