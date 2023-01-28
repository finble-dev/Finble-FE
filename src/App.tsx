import Main from './pages/Main/Main';
import MyStock from './pages/Mystock/MyStock';
import Lab from './pages/Lab/Lab';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './assets/styles/Globalstyles';
import StockDiagnosis from './pages/Mystock/StockDiagnosis ';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { useSelector } from 'react-redux';
// import { expirationState, setExpiration } from './store/slice/userSlice';
// import { refreshTokenState } from './store/slice/tokenSlice';
// import { SERVER } from './network/config';
// import { useDispatch } from 'react-redux';

const clientID: string = process.env.REACT_APP_CLIENT_ID as string;

function App() {
  // const refreshToken = useSelector(refreshTokenState);
  // const expiration = useSelector(expirationState);
  // const dispatch = useDispatch();

  // let now = 0;
  // let i = 0;
  // function getTime() {
  //   now = new Date().getTime();
  //   console.log('i : ', i);
  //   console.log('기존 expiration:  ' + expiration);
  //   console.log('expiration - now:  ' + (expiration - now));

  //   if (now != 0 && expiration != 0 && expiration - now < 40000) {
  //     // dispatch(setRefreshFlag({ refreshFlag: true }));
    //   fetch(`${SERVER}/login/refresh/`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ refresh: refreshToken }),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res);
    //       dispatch(setExpiration({ expiration: now + 300000 }));
    //       console.log('새로운 ex:   ' + expiration);
    //     })
    //     .catch((err) => console.log(err));
    // }
  //   i++;
  // }
  // setInterval(getTime, 1000);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <BrowserRouter>
            <GoogleOAuthProvider clientId={clientID}>
              {/* <Header />
              <div style={{ marginTop: '70px' }}></div> */}
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/stock" element={<MyStock />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/diagnosis" element={<StockDiagnosis />} />
              </Routes>
            </GoogleOAuthProvider>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
