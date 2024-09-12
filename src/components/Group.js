import React from 'react';
import Ticket from './Ticket';
import add from '../assets/add.svg';
import menu from '../assets/menu.svg';
import todologo from '../assets/To-do.svg';
import inProgressLogo from '../assets/in-progress.svg';
import backlogLogo from '../assets/Backlog.svg';
import cancelledLogo from '../assets/Cancelled.svg';
import doneLogo from '../assets/Done.svg';
import priority0 from '../assets/No-priority.svg';
import priority1 from '../assets/Img - Low Priority.svg';
import priority2 from '../assets/Img - Medium Priority.svg';
import priority3 from '../assets/Img - High Priority.svg';
import priority4 from '../assets/SVG - Urgent Priority colour.svg';

const statusMap = {
  'Todo': { logo: todologo, name: 'Todo' },
  'In progress': { logo: inProgressLogo, name: 'In Progress' },
  'Backlog': { logo: backlogLogo, name: 'Backlog' },
  'Cancelled': { logo: cancelledLogo, name: 'Cancelled' },
  'Done': { logo: doneLogo, name: 'Done' }
};

const priorityMap = {
  0: { logo: priority0, name: 'No Priority' },
  1: { logo: priority1, name: 'Low' },
  2: { logo: priority2, name: 'Medium' },
  3: { logo: priority3, name: 'High' },
  4: { logo: priority4, name: 'Urgent' }
};

const Group = ({ groupName, tickets, users, groupBy }) => {
  const currentStatus = statusMap[groupName] || { logo: '', name: groupName };
  const currentUser = users.find((u) => u.id === groupName) || {};
  const currentUserInfo = { name: currentUser.name, available: currentUser.available };

  const currentPriority = priorityMap[groupName] || { logo: '', name: `Priority ${groupName}` };

  const generateProfileImage = (userId) => `https://randomuser.me/api/portraits/men/${userId}.jpg`;

  return (
    <div className="whole-card">
      <div className="plus-dot-outside">
        <div className="plus-dot">
          <div className="todo-status">
            {groupBy === 'userId' ? (
              <div className="user-profile-container">
                <img className="userprofile" src={generateProfileImage(groupName.split('-')[1])} alt={currentUserInfo.name} />
                <div className={`availability-indicator ${currentUserInfo.available ? 'available' : 'not-available'}`}></div>
              </div>
            ) : groupBy === 'priority' ? (
              <img className="" src={currentPriority.logo} alt={currentPriority.name} />
            ) : (
              <img src={currentStatus.logo} alt={currentStatus.name} />
            )}
          </div>
          <p className="name-ticket-dot">
            {groupBy === 'userId'
              ? <pre>{currentUserInfo.name}</pre>  || groupName
              : groupBy === 'priority'
                ? currentPriority.name
                :currentStatus.name }
          </p>

          <div className="ticket-info">
            {groupBy === 'status' ? `${tickets[0]?.priority || 0}` : ''}
            {groupBy === 'userId' ? `${tickets[0]?.priority || 0}` : ''}
            {groupBy === 'priority' ? `${tickets[0]?.priority || 0}` : ''}
          </div>
        </div>
        <div className="plus-dot-left">
          <img src={add} alt="add" />
          <img src={menu} alt="menu" />
        </div>
      </div>

      <div className="group">
        <div className="tickets">
          {tickets.length > 0 ? (
            tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} groupBy={groupBy} userAvailability={users.find(user => user.id === ticket.userId)?.available} />)
          ) : (
            <p>No tickets in this category</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Group;
