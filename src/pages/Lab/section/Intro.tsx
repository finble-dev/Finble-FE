import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextRow, TextWrap, Row } from '../../../assets/styles/styles';
import graph1 from '../../../assets/img/lab/graph1.png';
import graph2 from '../../../assets/img/lab/graph2.png';

const Intro = () => {
  return (
    <Container>
      <TypoGraphy
        text="투자 실험실"
        color="var(--main-blue)"
        size="t3"
        style={{ marginTop: '109px', marginBottom: '10px' }}
      />
      <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
      <Row style={{ marginBottom: '35px', lineHeight: '55px' }}>
        <TypoGraphy text="핀블의 '" size="h1" />
        <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h1" />
        <TypoGraphy text="'을 소개합니다." size="h1" />
      </Row>

      <Box>
        <Row style={{ justifyContent: 'space-between', maxWidth: '1200px' }}>
          <Column>
            <TextWrap lineHeight={52} padding="0 0 45px 0">
              <TextRow align="center">
                <TypoGraphy
                  text="투자 실험,"
                  color="var(--main-blue)"
                  size="h1"
                />
                <TypoGraphy text="왜 필요한 걸까요?" size="h1" />
              </TextRow>
            </TextWrap>

            <TextWrap lineHeight={34}>
              {list1.map((items: any, idx: number) => (
                <Row lineHeight={34}>
                  {items.map((item: any, idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="b1" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="b1"
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
                      <TypoGraphy text={item[1]} size="b1" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="b1"
                      />
                    )
                  )}
                </Row>
              ))}
            </TextWrap>
          </Column>
          <img src={graph1} style={{ width: '532px', height: '285px' }} />
        </Row>
      </Box>

      <Box>
        <Row
          style={{
            justifyContent: 'space-between',
            maxWidth: '1200px',
            alignItems: 'center',
          }}
        >
          <img src={graph2} style={{ width: '381px', height: '244px' }} />
          <Column style={{ marginLeft: '91px' }}>
            <TextWrap lineHeight={52} padding="0 0 45px 0">
              <TextRow align="center">
                <TypoGraphy
                  text="투자 실험"
                  color="var(--main-blue)"
                  size="h1"
                />
                <TypoGraphy text="은 어떻게 하나요?" size="h1" />
              </TextRow>
            </TextWrap>

            <TextWrap lineHeight={34}>
              {list3.map((items: any, idx: number) => (
                <Row lineHeight={34}>
                  {items.map((item: any, idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="b1" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="b1"
                      />
                    )
                  )}
                </Row>
              ))}
            </TextWrap>

            <div style={{ marginTop: '30px' }} />

            <TextWrap lineHeight={34}>
              {list4.map((items: any, idx: number) => (
                <Row lineHeight={34}>
                  {items.map((item: any, idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="b1" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="b1"
                      />
                    )
                  )}
                </Row>
              ))}
            </TextWrap>
          </Column>
        </Row>
      </Box>
    </Container>
  );
};
export default Intro;

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

const list3 = [
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

const list4 = [
  [['black', 'ETF만 잘 활용하면 거의 모든 자산군에 투자할 수 있으니,']],
  [
    ['blue', "자산을 여러 '바구니'에 나눈 것과 같은 효과"],
    ['black', '를 볼 수 있어요.'],
  ],
  [['black', '다양한 자산을 포트폴리오에 추가하며 투자 실험을 해보세요.']],
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f7f8fa;
  margin-bottom: 75px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 440px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-bottom: 45px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
