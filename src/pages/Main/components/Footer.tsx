import TypoGraphy from '../../../components/Typography';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column /*style={{ marginLeft: '357px' }}*/>
          <TypoGraphy
            text="먼저 본인의 투자 현황을 입력하고"
            //size="h2"
            style={{ fontSize: '24px', color: '#7A7A7A' }}
          />
          <TypoGraphy
            text="실험을 시작해보세요!"
            //size="h2"
            style={{ fontSize: '24px', color: '#7A7A7A' }}
          />
        </Column>
        <Link to={'/lab'}>
          <Button
            text={'시작하기'}
            style={{
              fontSize: '18px',
              width: '269.61px',
              height: '56.38px',
              padding: 0,
            }}
          />
        </Link>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 274px;
  background-color: #f6f8fe;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  line-height: 42.67px;
`;
