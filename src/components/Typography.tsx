import styled from 'styled-components';

const TypoGraphy = (text: string, size: string) => {
  <Container size={size}> {text} </Container>;
};

export default TypoGraphy;

const Container = styled.div<{ size: string }>`
  size: ${(props) =>
    props.size == 'head1' ? '15px' : props.size == 'head1' ? '10px' : '5px'};
`;
