import styled from 'styled-components';

export const SearchInpCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SearchInp = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 0 20px 0 40px;
  border: none;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`;
