import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import galaxy from "../assets/images/Galaxy_S7.png";
const PhoneDetail = (props) => {
  const { phones } = props;
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
          <h2>Movil name: {phone.name} </h2>
          <p>{phone.description}</p>
          <img src={galaxy} alt="galaxy" />
          <p>$ {phone.price}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneDetail;
