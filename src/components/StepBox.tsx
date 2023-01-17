import styled from 'styled-components';
import TypoGraphy from './Typography';
import StepBoxBg from '../assets/img/stepBoxBg.png';
import { Link } from 'react-router-dom';

const StepBox = ({ step }: { step: number }) => {
  let text1, text2, arrow;
  if (step == 2) {
    text1 = '민성님의 투자 현황을 알았으니';
    text2 = '이제 위험도를 낮추러 가볼까요?';
    arrow = '투자 실험하러 가기 > ';
  } else if (step == 3) {
    text1 = '다시 새로운 포트폴리오를';
    text2 = '만들어보고 싶으신가요?';
    arrow = '다시 만들기 > ';
  }

  return (
    <StepWrapper>
      <TypoGraphy text={'Step ' + step} color="var(--type-white)" size="h2" />

      <SubContainer>
        <Column>
          <TypoGraphy text={text1} color="var(--type-white)" size="t2" />
          <TypoGraphy text={text2} color="var(--type-white)" size="t2" />
        </Column>

        {step === 2 ? (
          <Link to="/lab">
            <TypoGraphy
              text={arrow}
              color="var(--type-white)"
              size="h2"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        ) : (
          <div
            onClick={() => {
              window.scrollTo({ top: 1500, left: 0, behavior: 'smooth' });
            }}
          ></div>
        )}
      </SubContainer>
    </StepWrapper>
  );
};

export default StepBox;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${StepBoxBg});
  background-position: center center;
  background-size: cover;
  width: 1200px;
  height: 242px;
  border-radius: 20px;
  padding: 40px 32px;
  margin-top: 120px;
`;

const SubContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: end;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 15px 0;
  line-height: 40px;
`;
