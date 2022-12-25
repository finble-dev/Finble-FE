import styled from 'styled-components';
import Inform from './components/Inform';
import Question from './components/Question';
import Answer from './components/Answer';
import Footer from './components/Footer';

const Main = () => {
  return (
    <Container>
      <Inform />
      <Question />
      <Answer />
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
