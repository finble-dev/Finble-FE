import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Btn60 } from '../../../../components/Button';
import Input from '../../../../components/Input';
import TypoGraphy from '../../../../components/Typography';
import { SERVER } from '../../../../network/config';
import { tokenState } from '../../../../store/slice/userSlice';

interface InputType {
  name: string;
  market: string;
  symbol: string;
}

const Modal2 = ({ name, market, symbol }: InputType) => {
  const token = useSelector(tokenState);
  const [price, setPrice] = useState('');
  const [num, setNum] = useState('');

  const input = [
    {
      title: '종목명',
      type: 'search_enter',
      name: name,
      setText: '',
    },
    {
      title: '매수 평단가',
      type: 'price',
      name: '',
      setText: setPrice,
    },
    {
      title: '수량',
      type: 'number',
      setText: setNum,
      name: '',
    },
  ];

  const sendData = JSON.stringify({
    symbol: symbol,
    average_price: price,
    quantity: num,
  });

  const onClick = () => {
    fetch(`${SERVER}/portfolio/`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: sendData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  console.log(sendData);

  return (
    <Container>
      <Wrapper>
        {input.map((i, index) => (
          <InputWrapper key={index}>
            <TypoGraphy text={i.title} size="t3" color="var(--type-gray-2)" />
            <Input
              type={i.type}
              name={i.name}
              market={market}
              setSearch={i.setText}
            />
          </InputWrapper>
        ))}
      </Wrapper>

      <div onClick={onClick}>
        <Btn60 text="추가하기" type="able" />
      </div>
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
