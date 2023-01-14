import styled from 'styled-components';
import { TextWrap } from '../../../../assets/styles/styles';
import TypoGraphy from '../../../../components/Typography';
import Input from '../../../../components/Input';
import SearchListBox from '../SearchListBox';
import { useState } from 'react';
import Modal2 from './Modal2';

const data: any[] = [
  { name: '삼성물산', code: '03423' },
  { name: '삼성화재', code: '03423' },
  { name: '삼성생명', code: '03423' },
  { name: '삼성제약', code: '03423' },
  { name: '삼성전자', code: '03423' },
  { name: '삼성공조', code: '03423' },
  { name: '삼성전기', code: '03423' },
  { name: '삼성물산', code: '03423' },
  { name: '삼성물산', code: '03423' },
];

const Modal = () => {
  const [name, setName] = useState('');
  const [click, setclick] = useState(false);

  const onClick = (name: string) => {
    setName(name);
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
                <div key={i.index} onClick={() => onClick(i.name)}>
                  <SearchListBox name={i.name} code={i.code} />
                </div>
              ))}
            </SearchResult>
          )}
        </>
      ) : (
        <Modal2 name={name} />
      )}
    </>
  );
};

export default Modal;

const InputWrap = styled.div`
  width: 100%;
  padding: 26px 38px 0 18px;
`;
const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 100%;
  height: 504px;
  overflow-y: auto;
  margin-top: 23px;
  padding: 5px 23px 0 23px;

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
