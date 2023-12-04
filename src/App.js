import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
