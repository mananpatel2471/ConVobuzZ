import React, {useState} from 'react';
import '../../styles/user_search_card.css';
import axios from "axios";
import config from "../../config/default";
import {getUser} from "../../state/global";

const UserSearchCard = ({index, name, email, mobile, handleRequestChat}) => {

  const [sent, setSent] = useState(false);
  const SERVER_URL = config.SERVER_URL;
  const user = getUser();
  return (
    <div className="user-card" key={index}>
      <h2 className="user-card__name">{name}</h2>
      <div className="user-card__details">
        <p className="user-card__email"><i className="far fa-envelope"></i>{email}</p>
        <p className="user-card__mobile"><i className="fas fa-phone"></i>{mobile}</p>
      </div>
      <button id={`btn-${index}`} disabled={sent} className="user-card__button" onClick={() => {
        handleRequestChat(user.email, email).then((res) => {
          setSent(true);
        })
          .catch((err) => {
            console.log(err)
          })
      }}>Chat
      </button>
    </div>
  );
};

export default UserSearchCard;
