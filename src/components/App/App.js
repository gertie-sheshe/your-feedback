import { Routes, Route } from "react-router-dom";
import Header from "../../layout/Header";
import Dashboard from "../../views/Dashboard";
import Auth from "../../views/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
