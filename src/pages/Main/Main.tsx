import styled from 'styled-components';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';
import Section4 from './components/Section4';

const Main = () => {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Container>
  );
};
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
