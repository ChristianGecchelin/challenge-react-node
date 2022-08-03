import { Link } from "react-router-dom";

const PhoneList = (props) => {
  const { phones } = props;
  return (
    <div className="narrow">
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
