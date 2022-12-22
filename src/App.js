import Home from "./Home";
import Ask from "./Ask";
import History from "./History";
import Banner from "./Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const title = "What would my PM say?";
  return (
    <div className="App">
      <Router>
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
