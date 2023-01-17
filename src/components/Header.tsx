import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';
import Typography from './Typography';
import { Link } from 'react-router-dom';
import { Btn60 } from './Button';

interface login {
  isLogin: boolean;
}

const Header = ({ isLogin }: login) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Link to="/stock">
            <Typography text="내 주식" size="b2" />
          </Link>
          <Link to="/lab">
            <Typography text="투자실험실" size="b2" />
          </Link>
        </Row>
        {isLogin === true ? (
          <Row gap="1rem">
            <Typography text="김민성 님" size="b2" />
            <Btn60 type="login" text="로그아웃" />
          </Row>
        ) : (
          <Link to="/stock">
            <Btn60 type="login" text="회원가입 / 로그인" />
          </Link>
        )}
      </Container>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const Logo = styled.img`
  height: 32px;
  width: 106px;
`;

const Row = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${(props) => props.gap || '65.77px'};
  align-items: center;
  height: 100%;
`;

const ani = keyframes`
0% {
  width: 0%;
}
100% {
  width: 60%;
}
`;

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 0%;
    height: 2px;
    background: var(--main-blue);
    // position: absolute;
    left: 0;
    bottom: 0;
    animation: ${ani} 0.5s 1;
    animation-fill-mode: forwards;
  }
`;
