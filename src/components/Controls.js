import React from 'react';

const Controls = ({ groupBy, onGroupByChange, sortBy, onSortByChange }) => (
  <div className="controls">
    <div>
      <p>Grouping</p>
      <select value={groupBy} onChange={(e) => onGroupByChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="userId">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
    <div>
      <p>Ordering</p>
      <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  </div>
);

export default Controls;
