import TypoGraphy from '../../../components/Typography';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Column style={{ marginLeft: '357px' }}>
        <TypoGraphy
          text="먼저 본인의 투자 현황을 입력하고"
          size="h2"
          style={{ color: '#7A7A7A' }}
        />
        <TypoGraphy
          text="실험을 시작해보세요!"
          size="h2"
          style={{ color: '#7A7A7A' }}
        />
      </Column>
      <Link to={'/lab'}>
        <Button text={'시작하기'} style={{ marginRight: '357px' }} />
      </Link>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 274px;
  background-color: #f6f8fe;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
