import Header from './components/Header';
import Main from './pages/Main/Main';
import MyStock from './pages/MyStock';
import Lab from './pages/Lab';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './assets/styles/Globalstyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/stock" element={<MyStock />}></Route>
              <Route path="/lab" element={<Lab />}></Route>
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
  width: 1920px;
  border: 1px solid black;
`;
