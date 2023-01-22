import styled from 'styled-components';
import { TextWrap } from '../../../../assets/styles/styles';
import TypoGraphy from '../../../../components/Typography';
import Input from '../../../../components/Input';
import SearchListBox from '../SearchListBox';
import { useEffect, useState } from 'react';
import Modal2 from './Modal2';
import { SERVER } from '../../../../network/config';
import { tokenState } from '../../../../store/slice/userSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const data: any[] = [
  {
    symbol: 'AAPL',
    market: 'US',
    name: '애플',
    sector: '첨단 기술',
  },
  {
    symbol: 'ABBV',
    market: 'US',
    name: '애브비',
    sector: '헬스케어',
  },
  {
    symbol: 'ABT',
    market: 'US',
    name: '애보트 래버러토리스',
    sector: '헬스케어',
  },
];

const Modal = () => {
  const [stockName, setStockName] = useState('');
  const [market, setMarket] = useState('');
  const [symbol, setSymbol] = useState('');
  const [click, setclick] = useState(false);
  const [search, setSearch] = useState('');

  const token = useSelector(tokenState);

  const onClick = (i: any) => {
    setStockName(i.name);
    setMarket(i.market);
    setSymbol(i.symbol);
    setclick(true);
  };

  // 검색 api 연결
  /*useEffect(() => {
    fetch(`${SERVER}/search/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ search: search }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [search]);*/

  return (
    <>
      {!click ? (
        <>
          <InputWrap>
            <Input type="search" setSearch={setSearch} />
          </InputWrap>

          {data.length === 0 ? (
            <TextWrap align="center" padding="100px 0 0 0">
              <TypoGraphy
                text="검색된 종목이 없습니다"
                size="b2"
                color="var(--type-gray-4)"
              />
            </TextWrap>
          ) : (
            <SearchResult>
              {data.map((i, index) => (
                <div key={index} onClick={() => onClick(i)}>
                  <SearchListBox name={i.name} symbol={i.symbol} />
                </div>
              ))}
            </SearchResult>
          )}
        </>
      ) : (
        <Modal2 name={stockName} market={market} symbol={symbol} />
      )}
    </>
  );
};

export default Modal;

const InputWrap = styled.div`
  width: 100%;
  padding: 52px 34px 0 34px;
`;
const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 480px;
  overflow-y: auto;
  margin: 28px 0;
  padding: 0 0 0 34px;

  &::-webkit-scrollbar {
    width: 18px;
  }
  &::-webkit-scrollbar-thumb {
    height: 124px;
    background-color: #ccd8ff;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
