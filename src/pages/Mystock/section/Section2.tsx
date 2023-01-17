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
import { WhiteBox, WhiteSmallBox } from '../components/WhiteBox';
import StepBox from '../../../components/StepBox';

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
  const [status, setStatus] = useState('위험');
  const WhiteSmallBoxTitle = [
    {
      title: '내 포트폴리오',
      status: status,
    },
    {
      title: '코스피',
      status: '',
    },
    ,
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  let indexArray: number[] = [];

  useEffect(() => {
    setLabel([]);

    // let newMyData = myData.filter(
    //   (item: { date: number; data: number },index:number) =>
    //     Math.floor(item.date / 100) ==
    //     ((currentYear % 100) - 1) * 100 + (currentMonth + 1)
    //   // let newLabel = label;
    // );

    myData.map(
      (item: { date: number; data: number }, index: number) => {
        if (
          Math.floor(item.date / 100) ==
          ((currentYear % 100) - 1) * 100 + (currentMonth + 1)
        ) {
          indexArray.push(index);
        }
        // Math.floor(item.date / 100) ==
        //   ((currentYear % 100) - 1) * 100 + (currentMonth + 1);
      }
      // let newLabel = label;
    );
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
        {/* section 2-1 */}
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

        {/* section2-2 */}
        <TextWrap padding="120px 0 16px 0">
          <TypoGraphy
            text="이만큼 떨어지기도 했어요"
            size="t3"
            color="var(--type-gray-2)"
          />
        </TextWrap>
        <TextRow>
          <TypoGraphy text="가장 많이 떨어진 시기에는 시장보다 약" size="t2" />
          <TypoGraphy
            text="&nbsp;14%p&nbsp;"
            size="t2"
            color="var(--main-blue)"
          />
          <TypoGraphy text="더 떨어져서" size="t2" />
        </TextRow>
        <TextRow>
          <TypoGraphy text="위험도가 높다" size="t2" color="var(--main-blue)" />
          <TypoGraphy text="고 할 수 있어요" size="t2" />
        </TextRow>

        {/* white boxes */}
        <WhiteBoxWrap>
          <WhiteSmallBox title="내 포트폴리오" status={status} />
          <VS>
            <TypoGraphy text="VS" size="t3" color="var(--main-blue)" />
          </VS>
          <WhiteSmallBox title="코스피" status="" />
        </WhiteBoxWrap>

        <StepBox step={2} />
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

const WhiteBoxWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 0 120px 0;
`;
const VS = styled.div`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dee7fd;
  width: 55px;
  height: 55px;
`;
