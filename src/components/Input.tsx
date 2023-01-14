import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TypoGraphy from './Typography';

const Input = ({ type, name }: { type: string; name?: string }) => {
  let placeholder;
  if (type === 'search') placeholder = '종목 검색 예) 카카오, 테슬라, SPY';
  else if (type === 'price') placeholder = '예) 78.000';
  else if (type === 'number') placeholder = '예) 1.2';

  return (
    <InputBox>
      {type === 'search' ? (
        <FontAwesomeIcon icon={faMagnifyingGlass} color="var(--type-gray-3)" />
      ) : (
        <></>
      )}

      {type.includes('enter') ? (
        <TypoGraphy text={name} size="input" />
      ) : (
        <InputArea placeholder={placeholder} />
      )}

      {type === 'price' ? (
        <TypoGraphy text="₩" color="var(--type-gray-1)" size="input" />
      ) : type === 'number' ? (
        <TypoGraphy text="주" color="var(--type-gray-1)" size="input" />
      ) : (
        <></>
      )}
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 15px 17px;
  border: 2px solid var(--type-gray-5);
  border-radius: 10px;

  &:focus-within {
    border: 2px solid var(--main-blue);
  }
`;

const InputArea = styled.input`
  width: 100%;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--type-gray-5);
  }
`;
