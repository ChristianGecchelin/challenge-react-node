import { useEffect, useState } from "react";
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

  return;
};

export default PhoneList;
