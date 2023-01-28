import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';
import StepBox from '../../../components/StepBox';
import { WhiteBox, WhiteSmallBox } from '../components/WhiteBox';
import TypoGraphy from '../../../components/Typography';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Colors,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Colors
);

const Section2 = ({ data }: { data: any }) => {
  // 수익률 비교
  let profitGap = parseInt(data.portfolio_profit) - parseInt(data.kospi_profit);
  let profitText = '낮은';
  if (profitGap > 0) {
    profitText = '높은';
  } else if (profitGap == 0) {
    profitText = '같은';
  }

  // 내 포트폴리오 상태 (위험/안전)
  let status = '위험';
  let maxProfitGap =
    parseInt(data.portfolio_max_fall) - parseInt(data.kospi_max_fall);
  if (maxProfitGap > 0) {
    status = '위험';
  } else {
    status = '안전';
  }

  // 그래프
  // let i = 0;
  // useEffect(() => {
  //   i++;
  //   if (i >= 2) {
  //     data.graph_kospi.map(
  //       (item: { date: string; data: number }, index: number) => {
  //         if (
  //           index != 0 &&
  //           item.date[6] != data.graph_kospi[index - 1].date[6]
  //         ) {
  //           setKospiData((label: any) => [...label, item]);
  //           setLabel((label: []) => [
  //             ...label,
  //             item.date.slice(0, 7).replace('-', '.\u00A0'),
  //           ]);
  //         } else {
  //           setLabel((label: []) => [...label, '']);
  //         }
  //       }
  //     );

  //     data.graph_portfolio.map(
  //       (item: { date: string; data: number }, index: number) => {
  //         if (
  //           index != 0 &&
  //           item.date[6] != data.graph_portfolio[index - 1].date[6]
  //         ) {
  //           setPortfolioData((label: any) => [...label, item]);
  //         }
  //       }
  //     );
  //   }
  // }, []);

  let newlabel = data.graph_kospi.map((i: { date: number; data: number }) =>
    ('' + i.date).slice(0, 7).replace('-', '.\u00A0')
  );

  const graphData = {
    labels: newlabel,
    datasets: [
      {
        label: '내 포트폴리오',
        data: data.graph_portfolio.map(
          (item: { date: number; data: number }) => item.data
        ),
        borderColor: 'rgb(103, 146, 248)',
        borderWidth: 4,
        pointStyle: false,
      },
      {
        label: '코스피',
        data: data.graph_kospi.map(
          (item: { date: number; data: number }) => item.data
        ),
        borderWidth: 4,
        borderColor: 'rgb(255, 88, 82)',
        pointStyle: false,
      },
    ],
  } as any;

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        align: 'start',
        title: {
          color: 'green',
        },
        labels: {
          boxHeight: 3,
        },
      },
      tooltip: {
        padding: 10,
        bodySpacing: 5,
        background: '#3B3B3B',
        usePointStyle: true,
        callback: {
          label: function () {
            return '';
          },
        },
      },
      colors: { enabled: true },
    },
    scales: {
      y: {
        id: 'yAxes',
        grid: { color: '#909090' },
        ticks: {
          fontSize: 10,
          fontColor: '#909090',
        },
      },
      x: {
        id: 'xAxes',
        grid: { display: false },
        ticks: {
          callback(val: number, index: number): any {
            var newthis = this as any;
            return newlabel[index] != newlabel[index - 1]
              ? newthis.getLabelForValue(val)
              : '';
          },
          fontColor: '#909090',
          fontSize: 10,
        },
        align: '0', // x축 값의 회전 각도를 설정할 수 있어요.
        padding: 0, // x축 값의 상하 패딩을 설정할 수 있어요.
      },
    },
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
            <TypoGraphy
              text={`${profitGap}%p`}
              color="var(--main-blue)"
              size="t2"
            />
            <TypoGraphy
              text={`\u00A0${profitText} 수익률을 냈어요`}
              size="t2"
            />
          </TextRow>
          <TypoGraphy
            text={`내 포트폴리오 ${parseInt(
              data.portfolio_profit
            )}%,  코스피 ${parseInt(data.kospi_profit)}%`}
            size="t2"
          />
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
            text={`\u00A0${maxProfitGap}%p\u00A0`}
            size="t2"
            color="var(--main-blue)"
          />
          {maxProfitGap > 0 ? (
            <TypoGraphy text="더 떨어져서" size="t2" />
          ) : (
            <TypoGraphy text="덜 떨어져서" size="t2" />
          )}
        </TextRow>
        <TextRow>
          {maxProfitGap > 0 ? (
            <TypoGraphy
              text="위험도가 높다"
              size="t2"
              color="var(--main-blue)"
            />
          ) : (
            <TypoGraphy
              text="위험도가 낮다"
              size="t2"
              color="var(--main-blue)"
            />
          )}
          <TypoGraphy text="고 할 수 있어요" size="t2" />
        </TextRow>

        {/* white boxes */}
        <WhiteBoxWrap>
          <WhiteSmallBox
            title="내 포트폴리오"
            status={status}
            max_fall={data.portfolio_max_fall}
            max_loss={data.portfolio_max_loss}
          />
          <VS>
            <TypoGraphy text="VS" size="t3" color="var(--main-blue)" />
          </VS>
          <WhiteSmallBox
            title="코스피"
            status=""
            max_fall={data.kospi_max_fall}
            max_loss={data.kospi_max_loss}
          />
        </WhiteBoxWrap>

        <StepBox step={2} />
      </Container>
    </Wrap>
  );
};

export default Section2;

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
