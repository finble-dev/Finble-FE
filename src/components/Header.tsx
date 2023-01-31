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
  let link, text;

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
  // let stock_line, lab_line;

  // if (path.pathname === '/stock' || path.pathname === '/diagnosis') {
  //   stock_line = 'block';
  //   lab_line = 'none';
  // } else if (path.pathname === '/lab') {
  //   stock_line = 'none';
  //   lab_line = 'block';
  // }

  // const header = [
  //   { link: '/stock', name: '내 주식', display: stock_line },
  //   { link: '/lab', name: '투자실험실', display: lab_line },
  // ];

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
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
          {/* <Row gap="64px">
            {header.map((i) => (
              <>
                <Link to={i.link}>
                  <Typography text={i.name} size="b2" />
                </Link>
                <Line display={i.display} />
              </>
            ))}
          </Row> */}
        </Row>

        {name !== '' ? (
          <Row gap="15px">
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
  height: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  height: 100%;
`;

const Logo = styled.img`
  height: 26px;
  width: 88px;
`;

const Row = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${(props) => props.gap || '64px'};
  align-items: center;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Line = styled.div<{ display?: string }>`
  width: 91px;
  height: 4px;
  // display: ${(props) => props.display || 'none'};
  position: absolute;
  margin: 48px 0 0 0;
  background-color: #6792f8;
`;
