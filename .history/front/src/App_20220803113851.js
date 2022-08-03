import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import PhoneList from "./pages/ListPhone";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/:id" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

export default App;
