import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import {
  TextRow,
  TextWrap,
  Img,
  ImgContainer,
} from '../../../assets/styles/styles';
import graph1 from '../../../assets/img/lab/graph1.png';
import graph2 from '../../../assets/img/lab/graph2.png';

const Intro = () => {
  return (
    <Container>
      {/* title */}
      <TypoGraphy text="투자 실험실" color="var(--main-blue)" size="t3" />
      <TextWrap align="center" lineHeight={55} padding="10px 0 15px 0">
        <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
        <TextRow>
          <TypoGraphy text="핀블의 ‘" size="h1" />
          <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h1" />
          <TypoGraphy text="’을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>

      {/* first box */}
      <Box>
        {/* left text */}
        <Column>
          <TextWrap lineHeight={52} padding="0 0 45px 0">
            <TextRow align="center">
              <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h1" />
              <TypoGraphy text=", 왜 필요한 걸까요?" size="h1" />
            </TextRow>
          </TextWrap>

          <TextWrap lineHeight={34}>
            {list1.map((items: any, itemsIdx: number) => (
              <TextRow lineHeight={34} key={itemsIdx}>
                {items.map((item: any, itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="b1" key={itemIdx} />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b1"
                      key={itemIdx}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>

          <TextWrap lineHeight={34} padding="30px 0 0 0">
            {list2.map((items: any, itemsIdx: number) => (
              <TextRow lineHeight={34} key={itemsIdx}>
                {items.map((item: any, itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="b1" key={itemIdx} />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b1"
                      key={itemIdx}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>
        </Column>

        {/* right img */}
        <ImgContainer width="532px">
          <Img src={graph1} />
        </ImgContainer>
      </Box>

      {/* second box */}
      <Box>
        {/* right img */}
        <ImgContainer width="381px">
          <Img src={graph2} />
        </ImgContainer>

        {/* left text */}
        <Column padding="0 0 0 90px">
          <TextWrap lineHeight={52} padding="0 0 25px 0">
            <TextRow align="center">
              <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h1" />
              <TypoGraphy text="은 어떻게 하나요?" size="h1" />
            </TextRow>
          </TextWrap>

          <TextWrap lineHeight={34}>
            {list3.map((items: any, itemsIdx: number) => (
              <TextRow lineHeight={34} key={itemsIdx}>
                {items.map((item: any, itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="b1" key={itemIdx} />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b1"
                      key={itemIdx}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>

          <TextWrap lineHeight={34} padding="20px 0 0 0">
            {list4.map((items: any, itemsIdx: number) => (
              <TextRow lineHeight={34} key={itemsIdx}>
                {items.map((item: any, itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy text={item[1]} size="b1" key={itemIdx} />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b1"
                      key={itemIdx}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>
        </Column>
      </Box>
    </Container>
  );
};

export default Intro;

const list1 = [
  [['blue', '“달걀을 한 바구니에 담지 말라”']],
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
    ['black', '개인이 직접 투자하기에는 힘든\u00A0'],
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
  padding: 109px 0 100px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 440px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 22px 0;
`;

const Column = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: ${(props) => props.padding || 0};
`;
