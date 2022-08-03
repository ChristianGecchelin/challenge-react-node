import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneList from "./pages/ListPhone";
import PhoneDetail from "./component/PhoneDetail";

function App() {
  const [phones, setPhones] = useState([]);
  const getPhones = () => {
    axios
      .get("http://localhost:5005/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneList phones={phones} />} />
        <Route path="/:id" element={<PhoneDetail phones={phones} />} />
      </Routes>
    </div>
  );
}

export default App;
