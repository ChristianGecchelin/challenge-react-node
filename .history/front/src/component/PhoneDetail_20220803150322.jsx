import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import galaxy from "../assets/images/IPhone_7.png";
const PhoneDetail = (props) => {
  const [phone, setPhone] = useState({});
  const [image, setImage] = useState("");
  const { id } = useParams();
  let imageSrc;
  console.log(phone);
  const getPhone = () => {
    axios.get(`http://localhost:5005/phones/${id}`).then((response) => {
      setPhone(response.data);
      setImage(response.data.imageFileName);
    });
  };

  if (image) {
    imageSrc = require(`../assets/images/${image}`);
  }

  useEffect(() => {
    getPhone();
  }, []);
  return (
    <div className="flex">
      {phone && (
        <div>
          <h2>{phone.name} </h2>
          <h3>{phone.manufacturer}</h3>
          <p>
            <b>Processor:</b> {phone.processor}
          </p>
          <p>
            <b>Ram:</b> {phone.ram}
          </p>
          <p>
            <b>Screen:</b> {phone.screen}
          </p>
          <p>{phone.description}</p>
          <img height={500} src={imageSrc} alt={phone.name} />
          <p>
            <b>$ {phone.price}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default PhoneDetail;
