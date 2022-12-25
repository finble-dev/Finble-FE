import styled from 'styled-components';

interface btn {
  type?: string;
  size?: string;
  text?: string;
  style?: React.CSSProperties | undefined;
}

const Button = ({ type, size, text, style }: btn) => {
  return (
    <Container type={type} size={size} style={style}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled.div<{ type?: string; size?: string }>`
  border: ${(props) =>
    props.type === 'outline' ? '0.5px solid #C4C4C4' : 'none'};
  border-radius: 21.68px;
  padding: ${(props) =>
    props.size === 'small' ? '9px 18px 9px 18px;' : '21px 130px'};
  size: ${(props) => (props.size === 'small' ? '18px' : '22px')};
  color: ${(props) => (props.type === 'outline' ? 'black' : 'white')};
  font-weight: ${(props) => (props.size === 'small' ? '500' : '700')};
  background-color: ${(props) =>
    props.type === 'outline' ? 'transparent' : '#6792F8'};
`;
