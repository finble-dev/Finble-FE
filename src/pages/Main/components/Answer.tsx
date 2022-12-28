import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { Container } from '../../../assets/styles/styles';

const Answer = () => {
  return (
    <Container>
      <TextWrap lineHeight={60} align="center">
        <TypoGraphy
          text="마음 편히 주식 투자하는 방법!"
          size="38px"
          style={{ fontWeight: 700 }}
        />
        <TextRow>
          <TypoGraphy text="핀블의 '" size="38px" style={{ fontWeight: 700 }} />
          <TypoGraphy
            text="투자 실험"
            size="38px"
            color="#6792F8"
            style={{ fontWeight: 700 }}
          />
          <TypoGraphy
            text="'을 소개합니다."
            size="38px"
            style={{ fontWeight: 700 }}
          />
        </TextRow>
      </TextWrap>

      <TextWrap lineHeight={36} align="center">
        <TypoGraphy
          text="가상의 투자 결과를 바라보며"
          size="t3"
          color="#7a7a7a"
        />
        <TypoGraphy
          size="t3"
          color="#7a7a7a"
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

const TextWrap = styled.div<{ lineHeight?: number; align?: string }>`
  line-height: ${(props) => props.lineHeight || 1}px;
  text-align: ${(props) => props.align || 'left'};
  padding: 1rem 0;
`;

const TextRow = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;
