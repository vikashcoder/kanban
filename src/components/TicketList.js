import React from 'react';
import Group from './Group';

const TicketList = ({ tickets, users, groupBy, sortBy }) => {
  const statuses = ['Todo', 'In progress', 'Backlog', 'Cancelled', 'Done'];

  const groupTickets = (groupingField) => {
    return tickets.reduce((grouped, ticket) => {
      const key = ticket[groupingField];
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
      return grouped;
    }, {});
  };

  const sortTickets = (groupedTickets) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach((key) => {
      sortedGroups[key] = groupedTickets[key].sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;
        }
        return a.title.localeCompare(b.title);
      });
    });
    return sortedGroups;
  };

  const groupedAndSortedTickets = () => {
    const grouped = groupTickets(groupBy);

    
    if (groupBy === 'status') {
      statuses.forEach(status => {
        if (!grouped[status]) {
          grouped[status] = [];
        }
      });
    }

    return sortTickets(grouped);
  };

  const groups = groupedAndSortedTickets();

  return (
    <>
      {Object.keys(groups).map((group) => (
        <Group
          key={group}
          groupName={group}
          tickets={groups[group]}
          users={users}
          groupBy={groupBy}
        />
      ))}
    </>
  );
};

export default TicketList;
