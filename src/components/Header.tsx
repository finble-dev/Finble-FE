import styled from 'styled-components';
// import logo from './assets/logo.png';

const Header = () => {
  return <Container>{/* <Logo src={logo} /> */}</Container>;
};
export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 83.06px;
`;

const Logo = styled.img`
  height: 32px;
  width: 106px;
`;
