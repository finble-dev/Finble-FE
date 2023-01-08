import styled from 'styled-components';

const Input = () => {
  return <InputBox placeholder="종목 검색 예) 카카오, 테슬라, SPY" />;
};

export default Input;

const InputBox = styled.input`
  width: 100%;
  padding: 15px 0;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
  outline: none;
  border: 1px solid var(--type-gray-5);
  border-radius: 10px;

  &::placeholder {
    color: var(--type-gray-5);
  }
`;
