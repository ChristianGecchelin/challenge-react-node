import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import galaxy from "../assets/images/IPhone_7.png";
const PhoneDetail = (props) => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  console.log(phone);
  const getPhone = () => {
    axios
      .get(`http://localhost:5005/phones/${id}`)
      .then((response) => setPhone(response.data));
  };
  useEffect(() => {
    getPhone();
  }, []);
  return (
    <div>
      {phone && (
        <div>
          <h2>{phone.name} </h2>
          <h3>{phone.manufacturer}</h3>
          <p>{phone.processor}</p>
          <p>{phone.description}</p>
          <img
            src={require(`../assets/images/${phone.imageFileName}`)}
            alt="galaxy"
          />
          <p>$ {phone.price}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneDetail;
