import styled from 'styled-components';
import TypoGraphy from '../../../components/Typography';

export const LossBar = ({
  original,
  test,
}: {
  original: number;
  test: number;
}) => {
  return (
    <Container>
      <LastBar />
      <CurBar height={(test / original) * 110} />
      <Column>
        <TypoGraphy text="기존" size="b4" style={{ height: 'auto' }} />
        <TypoGraphy text="포트폴리오" size="b4" style={{ height: 'auto' }} />
      </Column>
      <Column style={{ left: '115px' }}>
        <TypoGraphy text="새로 만든" size="b4" style={{ height: 'auto' }} />
        <TypoGraphy text="포트폴리오" size="b4" style={{ height: 'auto' }} />
      </Column>
      <LineWrapper>
        <TypoGraphy text="0" size="b4" color="var(--type-gray-2)" />
        <Line />
      </LineWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 228px;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  height: 1px;
`;

const Line = styled.div`
  display: flex;
  height: 1px;
  width: 194px;
  background-color: #818181;
  margin-left: 5px;
`;

const LastBar = styled.div`
  position: absolute;
  top: 20px;
  left: 47px;

  width: 39px;
  height: 110px;
  background-color: #ffaeae;
  border-radius: 0px 0px 4px 4px;
`;

const CurBar = styled.div<{ height: number }>`
  position: absolute;
  top: 20px;
  left: 127px;

  width: 39px;
  height: ${(props) => props.height}px;
  background-color: #ff5852;
  border-radius: 0px 0px 4px 4px;
`;

const Column = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 17px;
  bottom: 10px;
  left: 35px;
`;
