import { useState } from 'react';
import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Label from '../components/Graph/Label';
ChartJS.register(ArcElement, Tooltip, Legend);

const Section1 = () => {
  const backgroundColor = ['#6792F8', '#FFE07E', '#4FEDAE'];
  const data = [
    { name: '카카오', cate: 'IT', rate: '60.0' },
    { name: '애플', cate: '첨단 기술', rate: '30.0' },
    { name: '테슬라', cate: '첨단 기술', rate: '10.0' },
  ];
  const graphData = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: data.map((i) => i.rate),
        backgroundColor: backgroundColor,
        borderWidth: 0,
        cutout: '55%',
      },
    ],
  };

  const [assets, setAssets] = useState(['3,348,916', '3,348,916']);

  const content = [
    {
      color: 'var(--main-blue)',
      text: 'IT주',
    },
    {
      color: 'var(--type-black)',
      text: '와 \u00A0',
    },
    {
      color: 'var(--main-blue)',
      text: '첨단 기술주',
    },
    {
      color: 'var(--type-black)',
      text: '의 비중이 가장 크네요',
    },
  ];

  return (
    <Wrap>
      <Container>
        {/* title */}
        <TextWrap padding="0 0 7px 0">
          <TypoGraphy
            text="민성님의 주식은 어떻게 이루어졌을까요?"
            color="var(--type-gray-2)"
            size="t3"
          />
        </TextWrap>
        <TextRow>
          {content.map((i) => (
            <TypoGraphy text={i.text} color={i.color} size="t2" />
          ))}
        </TextRow>

        {/* box */}
        <WhiteBox>
          {/* left text */}
          <SubContainer width={30}>
            <TypoGraphy text="총 자산" size="b3" color="var(--type-gray-2)" />
            <TextRow lineHeight={85}>
              <TypoGraphy text={assets[0]} size="t1" />
              <TypoGraphy
                text="&nbsp;원"
                size="t1"
                color="var(--type-gray-2)"
              />
            </TextRow>
            <TextWrap padding="10px 0 0 0">
              <TypoGraphy
                text="총 투자 금액"
                size="b3"
                color="var(--type-gray-2)"
              />
              <TextRow lineHeight={50}>
                <TypoGraphy text={assets[1]} size="b1" />
                <TypoGraphy
                  text="&nbsp;원"
                  size="b1"
                  color="var(--type-gray-2)"
                />
              </TextRow>
            </TextWrap>
          </SubContainer>

          {/* right graph */}
          <SubContainer border="none">
            {/* 종목별 graph */}
            <TypoGraphy
              text="종목별 비중"
              size="b3"
              color="var(--type-gray-2)"
            />
            <DoughnutGraphWrapper>
              <Doughnut data={graphData} width="280px" height="280px" />
              <LabelWrapper>
                {data.map((i: any, index: number) => (
                  <Label
                    color={backgroundColor[index]}
                    name={i.name}
                    cate={i.cate}
                    rate={i.rate}
                  />
                ))}
              </LabelWrapper>
            </DoughnutGraphWrapper>

            {/* 섹터별 graph */}
            <TypoGraphy
              text="섹터별 비중"
              size="b3"
              color="var(--type-gray-2)"
            />
            <BarGraphWrapper>
              {data.map((i, index: number) => (
                <BarGraph color={backgroundColor[index]} width={i.rate} />
              ))}
            </BarGraphWrapper>
          </SubContainer>
        </WhiteBox>
      </Container>
    </Wrap>
  );
};

export default Section1;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  background: var(--type-gray-6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 114px 0 120px 0;
`;

const WhiteBox = styled.div`
  padding: 30px 20px;
  background: var(--type-white);
  border-radius: 20px;
  margin: 44px 0 0 0;
  display: flex;
`;

const SubContainer = styled.div<{ border?: string; width?: number }>`
  border-right: ${(props) => props.border || '2px solid var(--type-gray-5)'};
  padding: 0 24px;
  width: ${(props) => props.width || 70}%;
`;

const DoughnutGraphWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  justify-content: space-between;
  padding: 20px 0 20px 10px;
  margin: 0 0 15px 0;
  gap: 35px;
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  column-gap: 23px;
  row-gap: 15px;
`;

const BarGraphWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin: 20px 15px;
`;
const BarGraph = styled.div<{ width: string; color: string }>`
  width: ${(props) => props.width || '0'}%;
  height: 100%;
  background: ${(props) => props.color || 'var(--type-gray-3)'};
`;
