import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';

const Question = () => {
  return (
    <Container>
      <TypoGraphy text="끝없이 떨어지던 작년 주식 시장," size="main" />
      <TypoGraphy text="혹시 크게 스트레스 받진 않았나요?" size="main" />
      <Row>
        <Column style={{ marginLeft: '356px' }}>
          <TypoGraphy
            text="특정 종목에만 돈을 몰아넣으며"
            size="h2"
            style={{ marginTop: '10px' }}
          />
          <TextRow>
            <TypoGraphy
              text="위험한 투자"
              color="#6792F8"
              size="h2"
              style={{ marginTop: '10px' }}
            />
            <TypoGraphy
              text="를 하고 있는 건 아닌지"
              size="h2"
              style={{ marginTop: '10px' }}
            />
          </TextRow>

          <TypoGraphy
            text="생각해 볼 필요가 있어요"
            size="h2"
            style={{ marginTop: '10px' }}
          />

          <TypoGraphy
            text="종목별로 투자 비율 고르게 나눈"
            size="h3"
            style={{ marginTop: '38px' }}
          />
          <TypoGraphy
            text="'포트폴리오'를 만들면 투자의 위험성을 줄일 수 있어요"
            size="h3"
            style={{ marginTop: '5px' }}
          />

          <TypoGraphy
            text="포트폴리오란? 투자 위험을 줄이기 위해 자산을 적절히 나누는 것을 의미해요."
            size="b3"
            style={{ marginTop: '30px', color: '#7A7A7A' }}
          />
        </Column>
      </Row>
    </Container>
  );
};
export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 150px;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
