import styled from 'styled-components';

interface btn {
  type?: string;
  size?: string;
  text?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties | undefined;
}

const Button = ({ type, size, text, style, width, height }: btn) => {
  return (
    <Container
      type={type}
      size={size}
      width={width}
      height={height}
      style={style}
    >
      {text}
    </Container>
  );
};

export default Button;

const Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 37px;

  width: ${(props) => props.width || 20}px;
  height: ${(props) => props.height || 20}px;

  border: ${(props) =>
    props.type === 'outline' ? '0.5px solid #C4C4C4' : 'none'};
  background-color: ${(props) =>
    props.type === 'outline' ? 'transparent' : '#6792F8'};
  color: ${(props) => (props.type === 'outline' ? 'black' : 'white')};

  font-weight: ${(props) =>
    props.size === 'small' ? 500 : props.size === 'small-bold' ? 700 : 600};
  font-size: ${(props) =>
    props.size === 'small' || props.size === 'small-bold' ? 18 : 24}px;

  // padding: ${(props) =>
    props.size === 'small' ? '9px 18px 9px 18px;' : '21px 130px'};
`;
