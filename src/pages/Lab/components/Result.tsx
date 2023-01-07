import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextWrap, Row } from '../../../assets/styles/styles';
import { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';
import { myData, newData } from '../../../assets/graphData';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Experiment = () => {
  const [modalFlag, setModalFlag] = useState(false);
  // 투자원금
  const [current, setCurrent] = useState(2626302);
  // 최종금액
  const [total, setTotal] = useState(11345623);

  const list2 = [
    [['black', `현재 투자원금인 ${current}원을 10년간 투자했다면`]],
    [
      ['black', '최종 금액은 \t'],
      ['blue', ` ${total}원(+${Math.floor(total / current) * 100}%)`],
      ['black', '이 되었을 거에요.'],
    ],
  ];

  const [label, setLabel] = useState([] as Array<string>);

  const graphData = {
    labels: label,
    datasets: [
      // { yAxisID: 'yAxes', xAxisID: 'xAxes' },
      {
        label: '기존 포트폴리오',
        borderColor: 'rgb(103, 146, 248)',
        borderWidth: 2,
        data: myData.map((item: { date: number; data: number }) => item.data),
        pointStyle: false,
      },
      {
        label: '새로 만든 포트폴리오',
        borderColor: 'rgb(255, 88, 82)',
        borderWidth: 2,
        data: newData.map((item: { date: number; data: number }) => item.data),
        pointStyle: false,
      },
    ],
  } as any;

  let i = 0;

  useEffect(() => {
    i++;
    let lastYear = 0;
    // 아에
    if (i >= 2) {
      setLabel([]);
      myData.map((item: { date: number; data: number }) => {
        const year = Math.floor(item.date / 10000);
        let newLabel = label;

        if (year != lastYear) {
          newLabel.push('20' + year.toString());
          lastYear = year;
        } else {
          newLabel.push('\t');
        }
        setLabel(newLabel);
      });
    }
  }, []);

  return (
    <Container>
      <Column>
        <TypoGraphy text="투자 실험 결과" size="h1" />
        <Row style={{ justifyContent: 'space-between', maxWidth: '1200px' }}>
          <Column>
            <TextWrap lineHeight={34} style={{ marginBottom: '32px' }}>
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
        <GraphWrapper>
          <Line data={graphData} options={options} />
        </GraphWrapper>
      </Column>
    </Container>
  );
};
export default Experiment;

const options = {
  responsive: true,
  legend: { display: true, align: 'start' },
  scales: {
    yAxes: [
      {
        id: 'yAxes',
        display: true,
        title: {
          display: true,
          text: 'value',
        },
      },
    ],
    xAxes: [
      {
        id: 'xAxes',
        display: true,
        title: {
          display: true,
          text: 'value',
        },
      },
    ],
  },
} as any;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 120px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 1200px;
  margin-top: 120px;
`;

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 517px;
  padding: 24px;
  background: #dee7fd;
  border-radius: 19.9997px;
`;
