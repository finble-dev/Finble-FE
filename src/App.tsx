import Header from './components/Header';
import Main from './pages/Main';
import MyStock from './pages/MyStock';
import Lab from './pages/Lab';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './assets/styles/Globalstyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/stock" element={<MyStock />}></Route>
            <Route path="/lab" element={<Lab />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
