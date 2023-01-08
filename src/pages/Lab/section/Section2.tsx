import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextRow, TextWrap, Row } from '../../../assets/styles/styles';
import graph2 from '../../../assets/img/lab/graph2.png';

const list1 = [
  [
    ['black', '개인이 직접 투자하기에는 힘든'],
    ['blue', '채권, 금과 같은 자산'],
    ['black', '들을'],
  ],
  [['black', '전문기관에 맡겨 묶음으로 투자하는 방법.']],
  [
    ['blue', "즉, '펀드'처럼 투자하는 상품을 ETF"],
    ['black', '라고 해요.'],
  ],
  [
    [
      'black',
      '또한 ETF는 주식시장에 상장돼 있어 주식처럼 쉽게 사고팔 수 있어요.',
    ],
  ],
];

const list2 = [
  [['black', 'ETF만 잘 활용하면 거의 모든 자산군에 투자할 수 있으니,']],
  [
    ['blue', "자산을 여러 '바구니'에 나눈 것과 같은 효과"],
    ['black', '를 볼 수 있어요.'],
  ],
  [['black', '다양한 자산을 포트폴리오에 추가하며 투자 실험을 해보세요.']],
];
const Section2 = () => {
  return (
    <Container>
      <Row
        style={{
          justifyContent: 'space-between',
          maxWidth: '1200px',
          alignItems: 'center',
        }}
      >
        <img src={graph2} style={{ width: '381px', height: '244px' }} />
        <Column>
          <TextWrap lineHeight={52} padding="0 0 45px 0">
            <TextRow align="center">
              <TypoGraphy text="투자 실험은 어떻게 하나요?" size="h2" />
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
      </Row>
    </Container>
  );
};
export default Section2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 522px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
