import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PhoneDetail = (props) => {
  const { phones } = props;
  const [phone, setPhone] = useState({});
  const { id } = useParams();

  const phoneFiltered = phones.filter((phone) => {
    return phone.id === id;
  });
  setPhone(phoneFiltered[0]);

  /* const getPhone = () => {
    axios.get(`http://localhost:5005/phones/${phone.id}`);
  }; */
  return <div>Hola Numero 2</div>;
};

export default PhoneDetail;
