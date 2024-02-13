import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 10px;
`;

export const NavIcon = styled.img`
  margin-bottom: 4px;
`;

export const NavLogo = styled.img`
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 11;
`;
export const NavText = styled.span`
  color: ${({ $active }) => ($active ? '#FBB24D' : '#848484')};
  display: block;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;
