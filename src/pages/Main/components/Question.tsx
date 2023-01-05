import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';

const Question = () => {
  return (
    <Container>
      <TextWrap lineHeight={66} padding="148px 0 120px 0" align="center">
        <TypoGraphy text="끝없이 떨어지던 작년 주식 시장," size="h1" />
        <TypoGraphy text="혹시 크게 스트레스 받진 않았나요?" size="h1" />
      </TextWrap>
      <Row>
        <Column>
          <TextWrap lineHeight={52} padding="0 0 45px 0">
            <TypoGraphy text="특정 종목에만 돈을 몰아넣으며" size="h2" />
            <TextRow>
              <TypoGraphy
                text="위험한 투자"
                color="var(--main-blue)"
                size="h2"
              />
              <TypoGraphy text="를 하고 있는 건 아닌지" size="h2" />
            </TextRow>
            <TypoGraphy text="생각해 볼 필요가 있어요" size="h2" />
          </TextWrap>

          <TextWrap padding="0 0 185px 0" lineHeight={34}>
            <TypoGraphy
              text="종목별로 투자 비율 고르게 나눈"
              size="t3"
              color="var(--type-gray-2)"
            />
            <TypoGraphy
              text="'포트폴리오'를 만들면 투자의 위험성을 줄일 수 있어요"
              color="var(--type-gray-2)"
              size="t3"
            />
          </TextWrap>

          {/* <TypoGraphy
            text="*포트폴리오란? 투자 위험을 줄이기 위해 자산을 적절히 나누는 것을 의미해요."
            size="b3"
            style={{ color: '#7a7a7a' }}
          /> */}
        </Column>
      </Row>
    </Container>
  );
};
export default Question;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   margin-top: 180px;
// `;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
