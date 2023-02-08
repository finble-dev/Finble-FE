import styled from 'styled-components';
import TypoGraphy from '../../../../components/Typography';

interface label {
  color: string;
  name?: string;
  sector?: string;
  rate?: string;
}

const StockLabel = ({ color, name, sector, rate }: label) => {
  return (
    <Container>
      <Left>
        <ColorBox color={color} />
        <TypoGraphy text={name} size="b3" color="var(--type-gray-1)" />
        <TypoGraphy text={sector} size="b4" color="var(--type-gray-4)" />
      </Left>
      <TypoGraphy text={rate + '%'} size="b3" color="var(--type-gray-1)" />
    </Container>
  );
};

const SectorLabel = ({ color, sector, rate }: label) => {
  return (
    <Container width="auto">
      <Left>
        <ColorBox color={color} width={13} />
        <TypoGraphy text={sector} size="b3" color="var(--type-gray-2)" />
        <TypoGraphy text={rate + '%'} size="b3" color="var(--type-gray-2)" />
      </Left>
    </Container>
  );
};

export { StockLabel, SectorLabel };

const Container = styled.div<{ width?: string }>`
  display: flex;
  justify-content: space-between;
  height: 29px;
  align-items: center;
  width: ${(props) => props.width || '185px'};
`;

const ColorBox = styled.div<{ color: string; width?: number }>`
  width: ${(props) => props.width || 11}px;
  height: ${(props) => props.width || 29}px;
  background: ${(props) => props.color || 'black'};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
