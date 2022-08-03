import { useEffect, useState } from "react";
import axios from "axios";

const PhoneList = () => {
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
    <div>
      {phones.length > 0 &&
        phones.map((phone) => {
          console.log(phone);
          return <li>{phone.name}</li>;
        })}
    </div>
  );
};

export default PhoneList;
