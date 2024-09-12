import React from 'react';
import menu from '../assets/menu.svg';

const Ticket = ({ ticket, groupBy, userAvailability }) => {
  const generateRandomProfileImage = (userId) => `https://randomuser.me/api/portraits/men/${userId}.jpg`;

  return (
    <div className="ticket" key={ticket.id}>
      <div className="ticketID">
        <div className="ticketid-left">
          <p className='tick'>{ticket.id}</p>
          <h5>{ticket.title}</h5>
          <div className="ticketId-img">
      {(groupBy==='status')? "": <img src={menu} alt="menu" />}

            <div className="dottt"></div>
            <p>{ticket.tag}</p>
          </div>
        </div>
        {(groupBy === 'status' || groupBy === 'priority') && (
          <div className="ticketId-right">
            <div className="user-profile-container">
              <img src={generateRandomProfileImage(ticket.userId.replace('usr-', ''))} alt="user" />
              <div className={`availability-indicator ${userAvailability ? 'available' : 'not-available'}`}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;
