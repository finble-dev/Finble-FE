import styled from 'styled-components';
import TypoGraphy from '../../../components/Typography';

interface stock {
  name: string;
  code: string;
  category?: string;
}

const SearchListBox = ({ name, code }: stock) => {
  return (
    <Container>
      <TypoGraphy text={name} size="b1" />
      <TypoGraphy text={code} color="#b9b9b9" size="input" />
    </Container>
  );
};

export default SearchListBox;

const Container = styled.div`
  width: 100%;
  height: 60px;
  line-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
