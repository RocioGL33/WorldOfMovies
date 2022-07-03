import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
