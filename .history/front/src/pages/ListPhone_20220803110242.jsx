import { useEffect } from "react";
import axios from "axios";

const PhoneList = () => {
  const getPhones = () => {
    axios
      .get("http://localhost:5005/phones")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhones();
  }, []);

  return <div>Hola </div>;
};

export default PhoneList;
