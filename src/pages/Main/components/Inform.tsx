import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import mainImg from '../../../assets/mainImg.svg';
import { Img, ImgContainer } from '../../../assets/styles/styles';
import { Btn60 } from '../../../components/Button';

const Inform = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <TextWrap>
            <TypoGraphy
              text="주식창을 볼 때마다 심장이 철렁했다면?"
              size="36px"
              color="#686868"
              style={{ fontWeight: 700 }}
            />
            <TypoGraphy
              text="편안하게 투자할 수 있도록"
              size="36px"
              style={{ fontWeight: 700 }}
            />
            <TypoGraphy
              text="핀블이 도와드릴게요!"
              size="36px"
              style={{ fontWeight: 700 }}
            />
          </TextWrap>
          <Btn60 type="able" text="지금 바로 시작하기" />
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

const TextWrap = styled.div`
  padding: 0 0 4rem 0;
  line-height: 65px;
`;

/*const ImgContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
`;*/
