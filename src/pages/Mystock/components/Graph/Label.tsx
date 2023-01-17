import styled from 'styled-components';
import TypoGraphy from '../../../../components/Typography';

interface label {
  color: string;
  name: string;
  cate: string;
  rate: string;
}

const Label = ({ color, name, cate, rate }: label) => {
  return (
    <Container>
      <Left>
        <ColorBox color={color} />
        <TypoGraphy text={name} size="b3" color="var(--type-gray-1)" />
        <TypoGraphy text={cate} size="b4" color="var(--type-gray-4)" />
      </Left>
      <TypoGraphy text={rate + '%'} size="b4" color="var(--type-gray-1)" />
    </Container>
  );
};

export default Label;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  align-items: center;
  width: 228px;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 13px;
  height: 33px;
  background: ${(props) => props.color || 'black'};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
