import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhoneList = (props) => {
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
