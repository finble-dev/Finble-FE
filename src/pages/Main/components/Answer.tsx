import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';

const Answer = () => {
  return (
    <Container>
      <TextWrap lineHeight={60} align="center" padding="185px 0 0 0">
        <TypoGraphy text="마음 편히 주식 투자하는 방법!" size="h1" />
        <TextRow align="center">
          <TypoGraphy text="핀블의 '" size="h1" />
          <TypoGraphy text="투자 실험" size="h1" color="var(--main-blue)" />
          <TypoGraphy text="'을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>

      <TextWrap lineHeight={36} align="center" padding="45px 0 120px 0">
        <TextRow align="center">
          <TypoGraphy
            text="가상의 투자 결과"
            size="t3"
            color="var(--main-blue)"
          />
          <TypoGraphy text="를 바라보며" size="t3" color="var(--type-gray-2)" />
        </TextRow>
        <TypoGraphy
          size="t3"
          color="var(--type-gray-2)"
          text="'앞으로 어떻게 투자해야할지 미리 알아보세요"
        />
      </TextWrap>
    </Container>
  );
};
export default Answer;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   margin-top: 180px;
// `;
