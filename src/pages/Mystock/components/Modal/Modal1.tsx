import styled from 'styled-components';
import { TextWrap } from '../../../../assets/styles/styles';
import TypoGraphy from '../../../../components/Typography';
import Input from '../../../../components/Input';
import SearchListBox from '../SearchListBox';
import { useState } from 'react';
import Modal2 from './Modal2';

const data: any[] = [
  { name: '삼성물산', symbol: '03423', category: '한국주식' },
  { name: '애플', symbol: '03423', category: '외국주식' },
  { name: '삼성생명', symbol: '03423', category: '한국주식' },
  { name: '삼성제약', symbol: '03423', category: '한국주식' },
  { name: '테슬라', symbol: '03423', category: '외국주식' },
  { name: '삼성공조', symbol: '03423', category: '한국주식' },
  { name: '삼성전기', symbol: '03423', category: '한국주식' },
  { name: '삼성전자', symbol: '03423', category: '한국주식' },
  { name: '삼성화재', symbol: '03423', category: '한국주식' },
];

const Modal = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [click, setclick] = useState(false);

  const onClick = (i: any) => {
    setName(i.name);
    setCategory(i.category);
    setclick(true);
  };

  return (
    <>
      {!click ? (
        <>
          <InputWrap>
            <Input type="search" />
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
              {data.map((i) => (
                <div key={i.index} onClick={() => onClick(i)}>
                  <SearchListBox name={i.name} symbol={i.symbol} />
                </div>
              ))}
            </SearchResult>
          )}
        </>
      ) : (
        <Modal2 name={name} category={category} />
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
