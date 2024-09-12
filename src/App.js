import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from './ticketActions';
import { fetchUsers } from './userActions';
import Controls from './components/Controls';
import TicketList from './components/TicketList';
import { setGroupBy, setSortBy } from './ticketSlice';
import logo from './assets/Display.svg';
import down from './assets/down.svg'; 

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { tickets, groupBy, sortBy } = useSelector((state) => state.ticket);
  const { users } = useSelector((state) => state.user);

  const [showControls, setShowControls] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTickets());
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setShowControls(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleGroupByChange = (value) => {
    dispatch(setGroupBy(value));
  };

  const handleSortByChange = (value) => {
    dispatch(setSortBy(value));
  };

  const toggleControls = () => {
    setShowControls((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="display-header" onClick={toggleControls}>
          <img src={logo} alt="logo" />
          <p>Display</p>
          <img src={down} alt="down" className={`arrow ${showControls ? 'rotate' : ''}`} />
        </div>

        {showControls && (
          <div ref={controlsRef}>
            <Controls
              groupBy={groupBy}
              onGroupByChange={handleGroupByChange}
              sortBy={sortBy}
              onSortByChange={handleSortByChange}
            />
          </div>
        )}
      </div>
      <main>
        <TicketList tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
      </main>
    </div>
  );
};

export default App;
