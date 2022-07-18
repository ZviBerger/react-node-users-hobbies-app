import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import FormsPage from './pages/Forms';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/forms" element={<FormsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
