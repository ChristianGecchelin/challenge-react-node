import { useEffect, useState } from "react";
import axios from "axios";

const PhoneList = () => {
  const [phones, setPhones] = useState();
  const getPhones = () => {
    axios
      .get("http://localhost:5005/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (phones.length > 0) {
      getPhones();
    }
  }, [phones]);

  return (
    <div>
      {phones.length > 0 && phones.map((phone) => <li>{phones.name}</li>)}
    </div>
  );
};

export default PhoneList;
