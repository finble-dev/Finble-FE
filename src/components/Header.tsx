import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';
import Typography from './Typography';
import { Link, useLocation } from 'react-router-dom';
import { Btn60 } from './Button';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { nameState, setName } from '../store/slice/userSlice';
import { tokenState, setToken } from '../store/slice/tokenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SERVER } from '../network/config';
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const name = useSelector(nameState);
  const token = useSelector(tokenState);
  const dispatch = useDispatch();

  const logout = () => {
    fetch(`${SERVER}/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setName({ name: '' }));
        dispatch(setToken({ token: '' }));
      })
      .catch((err) => console.log(err));
  };

  const path = useLocation();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Column>
            {path.pathname === '/stock' || path.pathname === '/diagnosis' ? (
              <>
                <Link to="/stock">
                  <Typography text="내 주식" size="b2" />
                </Link>
                <Line />
              </>
            ) : (
              <Link to="/stock">
                <Typography text="내 주식" size="b2" />
              </Link>
            )}
          </Column>

          <Column>
            {path.pathname === '/lab' ? (
              <>
                <Link to="/lab">
                  <Typography text="투자실험실" size="b2" />
                </Link>
                <Line />
              </>
            ) : (
              <Link to="/lab">
                <Typography text="투자실험실" size="b2" />
              </Link>
            )}
          </Column>
        </Row>
        {name !== '' ? (
          <Row gap="1rem">
            <Typography text={`${name}님`} size="b2" />
            <div onClick={logout}>
              <Btn60 type="login" text="로그아웃" />
            </div>
          </Row>
        ) : (
          <div onClick={() => setModalOpen(true)}>
            <Btn60 type="login" text="회원가입 / 로그인" />
          </div>
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
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
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
  gap: ${(props) => props.gap || '35.77px'};
  align-items: center;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0px 0px 0px;
  height: 100%;
  width: 110px;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  background-color: #6792f8;
`;
