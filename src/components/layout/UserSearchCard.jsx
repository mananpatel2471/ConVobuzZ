import React from 'react';
import '../../styles/user_search_card.css';
import axios from "axios";
import config from "../../config/default";
import {getUser} from "../../state/global";

const UserSearchCard = ({name, email, mobile}) => {
  const SERVER_URL = config.SERVER_URL;
  const user = getUser();
  return (
    <div className="user-card">
      <h2 className="user-card__name">{name}</h2>
      <div className="user-card__details">
        <p className="user-card__email"><i className="far fa-envelope"></i>{email}</p>
        <p className="user-card__mobile"><i className="fas fa-phone"></i>{mobile}</p>
      </div>
      <button className="user-card__button" onClick={() => {
        axios.post(`${SERVER_URL}/api/chatRequest`, {
          data: {
            sender: user.email,
            receiver: email
          }
        }, {
          headers: {
            Authorization: 'Bearer ' + user.token
          }
        }).then(res => {
          //TODO change button color
        }).catch(err => {
          console.log(err);
          //TODO Error
        })
      }}>Chat
      </button>
    </div>
  );
};

export default UserSearchCard;
