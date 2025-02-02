import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Pages
import Home from "./pages/Home";

import './App.css'
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <Router>
        <div className="app-container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
