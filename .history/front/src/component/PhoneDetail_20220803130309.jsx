import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PhoneDetail = (props) => {
  const { phones } = props;
  const { id } = useParams();

  const phoneFiltered = phones.filter((phone) => {
    return phone.id == id;
  });

  /* const getPhone = () => {
    axios.get(`http://localhost:5005/phones/${phone.id}`);
  }; */
  return (
    <div>
      <h2>Movil name: ${phoneFiltered[0].name}</h2>
    </div>
  );
};

export default PhoneDetail;
