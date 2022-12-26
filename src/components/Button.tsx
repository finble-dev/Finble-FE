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
  border-radius: 37px;
  padding: ${(props) =>
    props.size === 'small' ? '9px 18px 9px 18px;' : '21px 130px'};
  color: ${(props) => (props.type === 'outline' ? 'black' : 'white')};
  font-weight: ${(props) => (props.size === 'small' ? '500' : '700')};
  font-size: ${(props) =>
    props.size === 'small' ? 'var(--fs-b1)' : 'var(--fs-h3)'};
  background-color: ${(props) =>
    props.type === 'outline' ? 'transparent' : '#6792F8'};

  display: flex;
  align-items: center;
  justify-content: center;

  // size: ${(props) => (props.size === 'small' ? '18px' : '24px')};
`;
