import styled from 'styled-components';

interface typo {
  text?: string;
  size?: string;
  color?: string;
  style?: React.CSSProperties | undefined;
}

const TypoGraphy = ({ text, size, color, style }: typo) => {
  return (
    <Container size={size} color={color} style={style}>
      {text}
    </Container>
  );
};

export default TypoGraphy;

const Container = styled.div<{ size?: string; color?: string }>`
  font-size: ${(props) =>
    props.size === 'main'
      ? '48px'
      : props.size === 'h1'
      ? 'var(--fs-h1)'
      : props.size === 'h2'
      ? 'var(--fs-h2)'
      : props.size === 'h3'
      ? 'var(--fs-h3)'
      : props.size === 'b1'
      ? 'var(--fs-b1)'
      : props.size === 'b2'
      ? 'var(--fs-b2)'
      : 'var(--fs-b3)'};

  font-weight: ${(props) =>
    props.size === 'main'
      ? 700
      : props.size === 'h1'
      ? 'var(--fw-h1)'
      : props.size === 'h2'
      ? 'var(--fw-h2)'
      : props.size === 'h3'
      ? 'var(--fw-h3)'
      : props.size === 'b1'
      ? 'var(--fw-b1)'
      : props.size === 'b2'
      ? 'var(--fw-b2)'
      : 'var(--fw-b3)'};

  color: ${(props) => props.color || 'var(--type-black)'};
`;
