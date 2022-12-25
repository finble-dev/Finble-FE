import TypoGraphy from '../../../components/Typography';
import Button from '../../../components/Button';
import styled from 'styled-components';
import mainImg from '../../../assets/mainImg.svg';
const Inform = () => {
  return (
    <Container>
      <Column style={{ marginLeft: '345px', marginTop: '180px' }}>
        <TypoGraphy text="주식창을 볼 때마다" style={{ fontSize: '48px' }} />
        <TypoGraphy text="심장이 철렁했다면?" style={{ fontSize: '48px' }} />
        <TypoGraphy text="편안하게 투자할 수 있도록" size="main" />
        <TypoGraphy text="핀블이 도와드릴게요" size="main" />
        <Button text={'지금 바로 시작하기'} style={{ marginTop: '82px' }} />
      </Column>
      <img src={mainImg} style={{ marginTop: '247px', marginLeft: '10px' }} />
    </Container>
  );
};
export default Inform;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 718.94px;
  background-color: #f6f8fe;
  justify-content: start;
  align-items: start;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
