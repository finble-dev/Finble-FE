import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import mainBg from '../../../assets/img/mainBg.png';
import { Btn60 } from '../../../components/Button';
import { Link } from 'react-router-dom';

const Inform = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrap>
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
          <TypoGraphy
            text="핀블이 도와드릴게요!"
            size="h1"
            color="var(--type-black)"
          />
        </TextWrap>
        <BtnWrapper to="/stock">
          <Btn60 type="able" text="지금 바로 시작하기" />
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};
export default Inform;

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

const TextWrap = styled.div`
  padding: 0 0 4rem 0;
  line-height: 65px;
`;
const BtnWrapper = styled(Link)`
  width: fit-content;
`;
