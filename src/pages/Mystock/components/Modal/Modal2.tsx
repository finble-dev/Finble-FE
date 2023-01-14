import styled from 'styled-components';
import { Btn60 } from '../../../../components/Button';
import Input from '../../../../components/Input';
import TypoGraphy from '../../../../components/Typography';

const Modal2 = ({ name, category }: { name: string; category: string }) => {
  const input = [
    {
      title: '종목명',
      type: 'search_enter',
      name: name,
    },
    {
      title: '매수 평단가',
      type: 'price',
      name: '',
    },
    {
      title: '수량',
      type: 'number',
      name: '',
    },
  ];

  return (
    <Container>
      <Wrapper>
        {input.map((i, index) => (
          <InputWrapper key={index}>
            <TypoGraphy text={i.title} size="t3" color="var(--type-gray-2)" />
            <Input type={i.type} name={i.name} category={category} />
          </InputWrapper>
        ))}
      </Wrapper>

      <Btn60 text="추가하기" type="able" />
    </Container>
  );
};

export default Modal2;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 34px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0 85px 0;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
