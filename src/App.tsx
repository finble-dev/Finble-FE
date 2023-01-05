import Header from './components/Header';
import Main from './pages/Main/Main';
import MyStock from './pages/MyStock';
import Lab from './pages/Lab';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './assets/styles/Globalstyles';
import { useState } from 'react';

function App() {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <BrowserRouter>
            <Header isLogin={isLogin} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/stock" element={<MyStock isLogin={isLogin} />} />
              <Route path="/lab" element={<Lab isLogin={isLogin} />} />
            </Routes>
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
