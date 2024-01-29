import React from 'react';
import ManualItem from './ManualItem';

const ManualList = ({ manuals }) => {
  return (
    <div>
      {manuals.map((manual) => (
        <ManualItem key={manual.id} {...manual} />
      ))}
    </div>
  );
};

export default ManualList;
