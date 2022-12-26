import TypoGraphy from '../../../components/Typography';
import Button from '../../../components/Button';
import styled from 'styled-components';
import mainImg from '../../../assets/mainImg.svg';

const Inform = () => {
  return (
    <Wrapper>
      <Container>
        <Column /*style={{ marginLeft: '362px', marginTop: '229px' }}*/>
          <TypoGraphy
            text="주식창을 볼 때마다 심장이 철렁했다면?"
            size="h2"
            style={{ fontWeight: 400 }}
          />
          <TypoGraphy text="편안하게 투자할 수 있도록" size="h2" />
          <TypoGraphy text="핀블이 도와드릴게요!" size="h2" />
          <Button
            text={'지금 바로 시작하기'}
            //size="small"
            style={{
              width: '288px',
              height: '54px',
              fontSize: '18px',
              fontWeight: 700,
              marginTop: '100px',
              padding: 0,
            }}
          />
        </Column>
        {/* 이미지 크기 조정필요*/}
        <ImgContainer>
          <Img src={mainImg} />
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};
export default Inform;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 83.06px);
  background: #f6f8fe;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
  line-height: 65px;
`;

const ImgContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
