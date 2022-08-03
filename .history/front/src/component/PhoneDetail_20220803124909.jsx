import { useEffect, useState } from "react";
import axios from "axios";
const PhoneDetail = (props) => {
  const { phones } = props;
  const [phone, setPhone] = useState({});
  const getPhone = () => {
    axios.get(`http://localhost:5005/phones/${phone.id}`);
  };
  return <div>Hola Numero 2</div>;
};

export default PhoneDetail;
