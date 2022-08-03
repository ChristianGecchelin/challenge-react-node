import { useEffect } from "react";
import axios from "axios";

const PhoneList = () => {
  const getPhones = () => {
    axios.get("http://localhost:5005/phones").then((response) => {
      console.log(response.data);
    });
  };

  return <div>Hola ${getPhones()}</div>;
};

export default PhoneList;
