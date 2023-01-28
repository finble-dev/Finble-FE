import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppSelect } from '../../store/configStore.hooks';
import { tokenState } from '../../store/slice/tokenSlice';
import { nameState } from '../../store/slice/userSlice';
import Section1 from './section/Section1';
import Section2 from './section/Section2';
import { initData } from './initData';
import { getPortfolioAnalysis } from '../../network/api';

const StockDiagnosis = () => {
  const token = useAppSelect(tokenState);
  const name = useSelector(nameState); // 성 + 이름
  const [data, setData] = useState(initData);

  // 포트폴리오 진단 api 연결
  useEffect(() => {
    if (name != '') {
      getPortfolioAnalysis(token, setData);
    }
  }, []);

  return (
    <Container>
      <Header />
      <div style={{ marginTop: '70px' }}></div>
      {data != initData ? (
        <>
          <Section1 data={data} />
          <Section2 data={data} />
        </>
      ) : (
        <>loading..</>
      )}
    </Container>
  );
};

export default StockDiagnosis;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
