import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const PhoneDetail = (props) => {
  const { phones } = props;
  const [phone, setPhone] = useState({});
  const { id } = useParams();

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
      <h2>Movil name: </h2>
    </div>
  );
};

export default PhoneDetail;
