import styled from 'styled-components';
import { TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import Input from './Input';

const Modal = () => {
  return (
    <Container>
      <Input />
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  width: 100%;
`;
