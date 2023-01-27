import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SERVER } from '../../network/config';
import { useAppSelect } from '../../store/configStore.hooks';
import { nameState, tokenState } from '../../store/slice/userSlice';
import Section1 from './section/Section1';
import Section2 from './section/Section2';
import { initData } from './initData';
import Header from '../../components/Header';

const StockDiagnosis = () => {
  const token = useAppSelect(tokenState);
  const name = useSelector(nameState); // 성 + 이름
  const [data, setData] = useState(initData);

  useEffect(() => {
    if (name != '') {
      fetch(`${SERVER}/portfolio/analysis/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res.data));
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
