import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';
import Typography from './Typography';
import { Link } from 'react-router-dom';
import { Btn60 } from './Button';
import { useState } from 'react';
import LoginModal from './LoginModal';

interface login {
  isLogin: boolean;
}

const Header = ({ isLogin }: login) => {
  const [modalOpen, setModalOpen] = useState(false);

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
          <Link to="/stock" onClick={() => setModalOpen(true)}>
            <Btn60 type="login" text="회원가입 / 로그인" />
          </Link>
        )}

        {/* modal */}
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
