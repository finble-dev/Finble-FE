import styled from 'styled-components';
import logo from '../assets/logo.svg';
import Typography from './Typography';
import Button from './Button';
import { Link } from 'react-router-dom';

interface login {
  isLogin: boolean;
}

const Header = ({ isLogin }: login) => {
  return (
    <Container>
      <Row style={{ marginLeft: '356px' }}>
        <Link to={'/'}>
          <Logo src={logo} />
        </Link>
        <Link to="/stock">
          <Typography
            text={'내 주식'}
            size={'b1'}
            style={{ marginLeft: '66px' }}
          />
        </Link>
        <Link to="/lab">
          <Typography
            text={'투자실험실'}
            size={'b1'}
            style={{ marginLeft: '66px' }}
          />
        </Link>
      </Row>
      {isLogin === true ? (
        <Row style={{ marginRight: '356px' }}>
          <Typography text={'김민성 님'} size={'b1'} />
          <Button
            type={'outline'}
            size={'small'}
            text={'로그아웃'}
            style={{ marginLeft: '20px' }}
          />
        </Row>
      ) : (
        <Row style={{ marginRight: '356px' }}>
          <Button
            type={'outline'}
            size={'small'}
            text={'회원가입 / 로그인'}
            style={{ marginLeft: '20px' }}
          />
        </Row>
      )}
    </Container>
  );
};
export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 83.06px;
`;

const Logo = styled.img`
  height: 32px;
  width: 106px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
