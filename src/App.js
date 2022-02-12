import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
