import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextRow, TextWrap, Row } from '../../../assets/styles/styles';
import graph1 from '../../../assets/img/lab/graph1.png';

const list1 = [
  [['blue', '달걀을 한 바구니에 담지 말라']],
  [['black', '이 속담을 한 번이라도 들어봤다면']],
  [['black', '쉽게 이해할 수 있어요.']],
];

const list2 = [
  [['black', "투자 실험을 통해 내 자산을 여러 '바구니'에 나눠보며"]],
  [
    ['blue', '위험도는 낮추고, 수익률은 안정적'],
    ['black', '으로 만들 수 있어요.'],
  ],
];

const Section1 = () => {
  return (
    <Container>
      <Row style={{ justifyContent: 'space-between', maxWidth: '1200px' }}>
        <Column>
          <TextWrap lineHeight={52} padding="0 0 45px 0">
            <TextRow align="center">
              <TypoGraphy
                text="투자 실험,"
                color="var(--main-blue)"
                size="h2"
              />
              <TypoGraphy text="왜 필요한 걸까요?" size="h2" />
            </TextRow>
          </TextWrap>

          <TextWrap lineHeight={34}>
            {list1.map((items: any, idx: number) => (
              <Row lineHeight={34}>
                {items.map((item: any, idx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="t3" />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="t3"
                    />
                  )
                )}
              </Row>
            ))}
          </TextWrap>

          <div style={{ marginTop: '30px' }} />

          <TextWrap lineHeight={34}>
            {list2.map((items: any, idx: number) => (
              <Row lineHeight={34}>
                {items.map((item: any, idx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="t3" />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="t3"
                    />
                  )
                )}
              </Row>
            ))}
          </TextWrap>
        </Column>
        <img src={graph1} style={{ width: '532px', height: '285px' }} />
      </Row>
    </Container>
  );
};
export default Section1;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 522px;
  background: #ebf0fe;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
