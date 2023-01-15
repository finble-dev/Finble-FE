import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { myData, newData } from '../../../assets/graphData';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Section2 = () => {
  const [label, setLabel] = useState([] as Array<string>);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  useEffect(() => {
    setLabel([]);
    let lastYear = currentYear - 1;

    myData.map((item: { date: number; data: number }) => {
      const year = Math.floor(item.date / 10000);
      let newLabel = label;

      setLabel(newLabel);
    });
  }, []);

  const graphData = {
    labels: label,
    datasets: [
      {
        label: '내 포트폴리오',
        data: myData.map((item: { date: number; data: number }) => item.data),
        borderColor: 'rgb(103, 146, 248)',
        pointStyle: false,
      },
      {
        label: '코스피',
        data: newData.map((item: { date: number; data: number }) => item.data),
        borderColor: 'rgb(255, 88, 82)',
        pointStyle: false,
      },
    ],
  } as any;

  return (
    <Wrap>
      <Container>
        {/* title */}
        <TypoGraphy
          text="최근 1년간 얼마나 벌었을까요?"
          size="t3"
          color="var(--type-gray-2)"
        />
        <TextWrap lineHeight={40} padding="16px 0 44px 0">
          <TextRow>
            <TypoGraphy text="시장보다&nbsp;" size="t2" />
            <TypoGraphy text="13%p" color="var(--main-blue)" size="t2" />
            <TypoGraphy text="&nbsp;낮은 수익률을 냈어요" size="t2" />
          </TextRow>
          <TypoGraphy text="내 포트폴리오 -42%,  코스피 -29%" size="t2" />
        </TextWrap>

        {/* line graph box */}
        <WhiteBox>
          <TypoGraphy text="투자 결과" size="b2" color="var(--type-gray-1)" />
          <Line
            data={graphData}
            options={options}
            style={{ width: '1093px', height: '542px', padding: '20px' }}
          />
        </WhiteBox>
      </Container>
    </Wrap>
  );
};

export default Section2;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      align: 'start',
      title: {
        color: 'black',
      },
      labels: {
        boxHeight: 2,
      },
    },
    tooltip: {
      padding: 10,
      bodySpacing: 5,
      usePointStyle: true,
    },
  },

  scales: {
    y: {
      id: 'yAxes',
      display: true,
    },
    x: {
      id: 'xAxes',
      display: true,
      grid: {
        display: false,
      },
    },
  },
} as any;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  background: #ebf0fe;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;

const WhiteBox = styled.div<{ width?: string; padding?: string }>`
  width: ${(props) => props.width || '100%'};
  height: auto;
  background: var(--type-white);
  padding: ${(props) => props.padding || '30px 40px'};
  border-radius: 20px;
`;
