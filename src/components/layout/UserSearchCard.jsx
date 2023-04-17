import React, {useEffect, useState} from 'react';
import '../../styles/user_search_card.css';
import axios from "axios";
import config from "../../config/default";
import {getUser} from "../../state/global";

const UserSearchCard = ({index, name, email, mobile, handleRequestChat}) => {

  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState(false);

  const SERVER_URL = config.SERVER_URL;
  const user = getUser();
  useEffect(() => {

    axios.get(SERVER_URL + '/api/getStatus',
      {
        method: "GET",
        params: {
          receiver: email
        },
        headers: {
          //  'Authorization': `Bearer ${user.token}`,

          //TODO Temporary hardcoded token
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYi5jIiwiaWF0IjoxNjgxNzIzMjMwLCJleHAiOjE2ODE4MDk2MzB9.e3GgWP5bXQvL_yuXI2MLspf7xDJV0hF8Wxy1YT6y2_U`,
        }
      }).then(r => {
      try {
        const {data} = r;
        setStatus(data.status === 'not sent');
      } catch (err) {
        console.log(err)
      }

    }).catch(err => {
      console.log(err)
    })
  }, []);
  return (
    <div className="user-card" key={index}>
      <h2 className="user-card__name">{name}</h2>
      <div className="user-card__details">
        <p className="user-card__email"><i className="far fa-envelope"></i>{email}</p>
        <p className="user-card__mobile"><i className="fas fa-phone"></i>{mobile}</p>
      </div>
      {
        status ? <button id={`btn-${index}`} disabled={sent} className="user-card__button" onClick={() => {
          handleRequestChat(user.email, email).then((res) => {
            setSent(true);
          })
            .catch((err) => {
              console.log(err)
            })
        }}>Chat
        </button> : <div></div>
      }

    </div>
  );
};

export default UserSearchCard;
