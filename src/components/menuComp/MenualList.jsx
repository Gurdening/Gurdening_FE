// ManualList.jsx
import React from 'react';
import ManualItem from './ManualItem';
import { ManualListWrapper } from './ManualList.styles'; // 스타일 컴포넌트 임포트

const ManualList = ({ manuals }) => {
  return (
    <ManualListWrapper>
      {manuals.map((manual) => (
        <ManualItem key={manual.id} {...manual} />
      ))}
    </ManualListWrapper>
  );
};

export default ManualList;
