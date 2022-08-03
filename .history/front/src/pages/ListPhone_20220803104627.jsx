import { useEffect } from "react";
import axios from "axios";

const PhoneList = () => {
  useEffect(() => {
    axios.get("http://localhost:5005/phones").then((phones) => {
      console.log(phones);
    });
  }, []);
  return <div></div>;
};

export default PhoneList;
