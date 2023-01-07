import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import mainBg from '../../../assets/img/main/mainBg.png';
import { Btn60 } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { TextWrap, Row } from '../../../assets/styles/styles';

const Section1 = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrap lineHeight={65} padding="0 0 50px 0">
          <TypoGraphy
            text="주식창을 볼 때마다 심장이 철렁했다면?"
            size="h1"
            color="var(--type-gray-2)"
          />
          <TypoGraphy
            text="편안하게 투자할 수 있도록"
            size="h1"
            color="var(--type-black)"
          />
          <Row>
            <TypoGraphy text="핀블" size="h1" color="var(--main-blue)" />
            <TypoGraphy
              text="이 도와드릴게요!"
              size="h1"
              color="var(--type-black)"
            />
          </Row>
        </TextWrap>
        <BtnWrapper to="/stock">
          <Btn60 type="able" text="지금 바로 시작하기" />
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};
export default Section1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 733px;
  background-image: url(${mainBg});
  background-size: cover;
  background-position: center center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const BtnWrapper = styled(Link)`
  width: fit-content;
`;
