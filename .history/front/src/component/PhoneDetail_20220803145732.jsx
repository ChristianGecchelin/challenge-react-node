import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import galaxy from "../assets/images/IPhone_7.png";
const PhoneDetail = (props) => {
  const [phone, setPhone] = useState({});
  const [image, setImage] = useState("");
  const { id } = useParams();
  let imageSrc;
  console.log(phone.imageFileName);
  const getPhone = () => {
    axios.get(`http://localhost:5005/phones/${id}`).then((response) => {
      setPhone(response.data);
      setImage(response.data.imageFileName);
    });
  };

  if (phone) {
    imageSrc = require(`../assets/images/${image}`);
  }

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
          <img src={imageSrc} alt={phone.name} />
          <p>$ {phone.price}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneDetail;
