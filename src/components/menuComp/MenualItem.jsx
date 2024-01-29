import React from 'react';

const ManualItem = ({ title, image, description }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ManualItem;
