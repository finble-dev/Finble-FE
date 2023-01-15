import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextWrap, TextRow } from '../../../assets/styles/styles';
import { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';
import { myData, newData } from '../../../assets/graphData';

import q from '../../../assets/img/lab/q.png';
import a from '../../../assets/img/lab/a.png';
import up from '../../../assets/img/lab/up.png';
import down from '../../../assets/img/lab/down.png';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Experiment = () => {
  const [modalFlag, setModalFlag] = useState(false);
  // 투자원금
  const [current, setCurrent] = useState(2626302);
  // 최종금액
  const [total, setTotal] = useState(11345623);
  // 연평균 수익률
  const [year, setYear] = useState(28);
  const [yearPercent, setYearPercent] = useState(-4);
  //최대 낙폭
  const [loss, setLoss] = useState(28);
  const [lossPercent, setLossPercent] = useState(-17);
  // tip flag
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);

  const list1 = [
    [['black', `10년 동안 테스트했을 때`]],
    [
      ['blue', '연평균 수익률'],
      ['black', `은 ${year}%로 ${yearPercent}%p 낮아졌고`],
    ],
    [
      ['blue', '최대 낙폭'],
      ['black', `은 ${loss}%로 ${lossPercent}%p 줄어들었어요`],
    ],
  ];

  const list2 = [
    [['black', `현재 투자원금인 ${current}원을 10년간 투자했다면`]],
    [
      ['black', '최종 금액은 \t'],
      ['blue', ` ${total}원(+${Math.floor(total / current) * 100}%)`],
      ['black', '이 되었을 거에요.'],
    ],
  ];

  const question = [
    {
      flag: q1,
      setFlag: setQ1,
      question: '수익률을 더 높이려면 어떻게 해야하나요?',
      answer1:
        '보유 중인 종목 중 개별 기업에 투자하는 주식의 비중을 더 높여보세요. ',
      answer2:
        '그렇지만 동시에 포트폴리오의 안정성이 낮아질 수도 있으니 조심하세요!',
    },
    {
      flag: q2,
      setFlag: setQ2,
      question: '더 안전한 포트폴리오를 만드려면 어떻게 해야하나요?',
      answer1: '새로운 자산 유형을 추가하거나 비중을 늘려보세요. ',
      answer2:
        '아직 없으시다면 추천해드린 S&P 500 지수를 추종하는 ETF, 채권을 포함하고 있는 ETF 등을 추가해보세요! ',
    },
  ];

  const [label, setLabel] = useState([] as Array<string>);

  const graphData = {
    labels: label,
    datasets: [
      {
        label: '기존 포트폴리오',
        data: myData.map((item: { date: number; data: number }) => item.data),
        borderColor: 'rgb(103, 146, 248)',
        pointStyle: false,
      },
      {
        label: '새로 만든 포트폴리오',
        data: newData.map((item: { date: number; data: number }) => item.data),
        borderColor: 'rgb(255, 88, 82)',
        pointStyle: false,
      },
    ],
  } as any;

  let i = 0;

  useEffect(() => {
    i++;
    let lastYear = 0;
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
        <TextRow
          style={{ justifyContent: 'space-between', maxWidth: '1200px' }}
        >
          <Column>
            <TextWrap lineHeight={40} style={{ marginBottom: '32px' }}>
              {list1.map((items: any, idx: number) => (
                <TextRow lineHeight={34}>
                  {items.map((item: any, idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="t2" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="t2"
                      />
                    )
                  )}
                </TextRow>
              ))}
            </TextWrap>
          </Column>
          <TextRow>
            <BarGraphWrapper>
              <TypoGraphy text="연평균 수익률" size="b2" />
            </BarGraphWrapper>
            <BarGraphWrapper>
              <TypoGraphy text="최대 낙폭" size="b2" />
            </BarGraphWrapper>
          </TextRow>
        </TextRow>

        <TextRow
          style={{ justifyContent: 'space-between', maxWidth: '1200px' }}
        >
          <Column>
            <TextWrap lineHeight={40} style={{ marginBottom: '32px' }}>
              {list2.map((items: any, idx: number) => (
                <TextRow lineHeight={40}>
                  {items.map((item: any, idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="t2" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="t2"
                      />
                    )
                  )}
                </TextRow>
              ))}
            </TextWrap>
          </Column>
        </TextRow>
        <LineGraphWrapper>
          <Line data={graphData} options={options} />
        </LineGraphWrapper>
        <Column>
          <TypoGraphy text="더 나은 투자 전략을 만들기 위한 TIP" size="t2" />
          {question.map((item: any, idx: number) => (
            <>
              <TipLine />

              <QuestionRow>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  <ImgQA src={q} />
                  <TypoGraphy
                    text={item.question}
                    size="b1"
                    style={{ marginLeft: '30px' }}
                  />
                </div>

                <div
                  onClick={() => {
                    item.setFlag(!item.flag);
                  }}
                >
                  {item.flag ? (
                    <ImgToggle src={down} />
                  ) : (
                    <ImgToggle src={up} />
                  )}
                </div>
              </QuestionRow>
              {item.flag ? (
                <>
                  <TipLine />
                  <AnswerRow>
                    <ImgQA src={a} />
                    <TextWrap lineHeight={46} style={{ marginLeft: '30px' }}>
                      <TypoGraphy text={item.answer1} size="b1" />
                      <TypoGraphy text={item.answer2} size="b1" />
                    </TextWrap>
                  </AnswerRow>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </Column>
      </Column>

      <StepWrapper>
        <TypoGraphy text="Step 3" color="var(--type-white)" size="h2" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          <Column style={{ marginTop: '21px', width: 'auto' }}>
            <TypoGraphy
              text="다시 새로운 포트폴리오를"
              color="var(--type-white)"
              size="t2"
            />
            <TypoGraphy
              text="만들어보고 싶으신가요?"
              color="var(--type-white)"
              size="t2"
            />
          </Column>
          <div
            onClick={() => {
              window.scrollTo({ top: 900, left: 0, behavior: 'smooth' });
            }}
          >
            <TypoGraphy
              text="다시 만들기 > "
              color="var(--type-white)"
              size="h2"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </StepWrapper>
    </Container>
  );
};
export default Experiment;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      align: 'start',
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

const BarGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 276px;
  background: #ebf0fe;
  border-radius: 10px;
  margin-left: 30px;
  padding: 17px 25px;
`;

const LineGraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 517px;
  padding: 24px;
  background: #ffffff;
  border-radius: 19.9997px;
`;

const TipLine = styled.div`
  background-color: #dadada;
  height: 1px;
  width: 1200px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6792f8;
  width: 1200px;
  height: 242.73px;
  border-radius: 20px;
  padding: 49px 32px;
  margin-top: 200px;
`;

const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const AnswerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 136px;
  background-color: #f7f8fa;
`;

const ImgQA = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

const ImgToggle = styled.img`
  width: 19.6px;
  height: 9.8px;
  cursor: pointer;
`;
