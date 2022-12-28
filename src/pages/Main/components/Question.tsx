import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { Container } from '../../../assets/styles/styles';

const Question = () => {
  return (
    <Container>
      <div
        style={{ textAlign: 'center', paddingTop: '5rem', lineHeight: '66px' }}
      >
        <TypoGraphy
          text="끝없이 떨어지던 작년 주식 시장,"
          size="38px"
          style={{ fontWeight: 700 }}
        />
        <TypoGraphy
          text="혹시 크게 스트레스 받진 않았나요?"
          size="38px"
          style={{ fontWeight: 700 }}
        />
      </div>
      <Row>
        <Column /*style={{ marginLeft: '356px' }}*/>
          <div style={{ lineHeight: '51px' }}>
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
          </div>

          <div style={{ lineHeight: '34px', margin: '30px 0' }}>
            <TypoGraphy
              text="종목별로 투자 비율 고르게 나눈"
              size="t3"
              color="#7a7a7a"
            />
            <TypoGraphy
              text="'포트폴리오'를 만들면 투자의 위험성을 줄일 수 있어요"
              color="#7a7a7a"
              size="t3"
            />
          </div>

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
  margin-top: 150px;
`;

const TextRow = styled.div`
  display: flex;
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
