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
            <Button
              type="outline"
              size="small"
              text="로그아웃"
              width={98.11}
              height={40.06}
            />
          </Row>
        ) : (
          <Button
            type="outline"
            size="small"
            text="회원가입 / 로그인"
            width={150.11}
            height={40.06}
          />
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
  height: 83.06px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 83.06px;
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
