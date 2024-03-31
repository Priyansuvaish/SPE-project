import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
          <Route path="/" element={<Home />}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
