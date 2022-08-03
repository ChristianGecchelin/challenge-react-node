import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          return (
            <Link key={phone.id} to={`/${phone.id}`}>
              <p>{phone.name}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default PhoneList;
