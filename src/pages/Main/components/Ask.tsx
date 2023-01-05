import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';

const Ask = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrap lineHeight={60} align="center">
          <TypoGraphy text="먼저 본인의 투자 현황을 입력하고" size="h1" />
          <TextRow align="center">
            <TypoGraphy
              text="안전한 투자 방법"
              size="h1"
              color="var(--main-blue)"
            />
            <TypoGraphy text="을 알아보세요!" size="h1" />
          </TextRow>
        </TextWrap>
      </Container>
    </Wrapper>
  );
};

export default Ask;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 185px 0;
  background: #f6f8ff;
  width: 100%;
`;
