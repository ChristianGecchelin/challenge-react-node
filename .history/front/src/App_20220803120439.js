import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneList from "./pages/ListPhone";
import PhoneDetail from "./component/PhoneDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/:id" element={<PhoneDetail />} />
      </Routes>
    </div>
  );
}

export default App;
