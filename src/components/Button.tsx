import styled from 'styled-components';
import TypoGraphy from './Typography';

interface btn {
  type?: string;
  text?: string;
}

const Btn60 = ({ text, type }: btn) => {
  let textColor = 'var(--type-black)';
  if (type === 'login') textColor = 'var(--type-black)';
  else if (type === 'able' || type === 'add') textColor = 'var(--type-white)';
  else if (type === 'disable') textColor = 'var(--main-blue)';

  return (
    <Btn60Container type={type}>
      <TypoGraphy text={text} color={textColor} size="small" />
    </Btn60Container>
  );
};

const Btn30 = ({ text, type }: btn) => {
  let textColor = 'var(--main-blue)';
  if (type === 'disable') textColor = 'var(--type-gray-4)';

  return (
    <Btn30Container type={type}>
      <TypoGraphy text={text} color={textColor} size="small" />
    </Btn30Container>
  );
};

const Btn10 = ({ text, type }: btn) => {
  let textColor = 'var(--type-black)';
  if (type === 'add' || type === 'big_add') textColor = 'var(--main-blue)';
  else if (type === 'disable_add' || type === 'disable_check')
    textColor = 'var(--type-gray-4)';
  else if (type === 'check') textColor = 'var(--type-white)';

  return (
    <Btn10Container type={type}>
      <TypoGraphy text={text} color={textColor} size="small" />
    </Btn10Container>
  );
};

export { Btn60, Btn30, Btn10 };

const Btn60Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;

  padding: ${(props) =>
    props.type === 'login'
      ? '12px 18px'
      : props.type === 'able' || props.type === 'disable'
      ? '16px 78px'
      : '20px 206px'};
  background: ${(props) =>
    props.type === 'login'
      ? 'transparent'
      : props.type === 'able' || props.type === 'add'
      ? 'var(--main-blue)'
      : 'var(--type-white)'};
  border: ${(props) =>
    props.type === 'login' ? '1px solid var(--type-gray-4)' : 'none'};
`;

const Btn30Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  padding: '41px 15px';
  background: 'transparent';
  border: ${(props) =>
    props.type === 'disable'
      ? '2px solid var(--type-gray-4)'
      : '2px solid var(--main-blue)'};
`;

const Btn10Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  padding: ${(props) =>
    props.type === 'big_add'
      ? '39px 219px'
      : props.type === 'add' || props.type === 'disable_add'
      ? '11px 15px'
      : props.type === 'check' || props.type === 'disable_check'
      ? '14px 40px'
      : '14px 20px'};

  background: ${(props) =>
    props.type === 'big_add'
      ? 'transparent'
      : props.type === 'check'
      ? 'var(--main-blue)'
      : props.type === 'add'
      ? '#DEE7FD'
      : props.type === 'disable_check' || props.type === 'disable_add'
      ? 'var(--type-gray-4)'
      : 'var(--main-blue)'};

  border: ${(props) =>
    props.type === 'big_add' ? '1px solid var(--main-blue)' : 'none'};
`;

// interface btn {
//   type?: string;
//   size?: string;
//   text?: string;
//   style?: React.CSSProperties | undefined;
// }

// const Button = ({ type, size, text, style }: btn) => {
//   let textColor = '#fff';
//   return (
//     <Container type={type} size={size} style={style}>
//       <TypoGraphy text={text} color={textColor} />
//     </Container>
//   );
// };

// export default Button;

// const Container = styled.div<btn>`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: ${(props) =>
//     props.type === 'login' ||
//     props.type === 'click' ||
//     props.type === 'big_add' ||
//     props.type === 'd_click'
//       ? 60
//       : props.type === 'category' || props.type === 'd_category'
//       ? 30
//       : props.type === 'check' ||
//         props.type === 'add' ||
//         props.type === 'block_add'
//       ? 10
//       : 0}px;

//   border: ${(props) =>
//     props.type === 'login'
//       ? '1px solid var(--type-gray-4)'
//       : props.type === 'category'
//       ? '1px solid var(--main-blue)'
//       : props.type === 'd_category'
//       ? '1px solid var(--type-gray-4)'
//       : props.type === 'add'
//       ? '1px solid var(--type-white)'
//       : '1px solid var(--type-black)'};

//   background-color: ${(props) =>
//     props.type === 'login' ||
//     props.type === 'category' ||
//     props.type === 'd_category' ||
//     props.type === 'block_Add'
//       ? 'transparent'
//       : props.type === 'add'
//       ? '#DEE7FD'
//       : props.type === 'd_add'
//       ? 'var(--type-gray-5)'
//       : props.type === 'check' ||
//         props.type === 'click' ||
//         props.type === 'big_add'
//       ? 'var(--main-blue)'
//       : props.type === 'd_check'
//       ? 'var(--type-gray-5)'
//       : props.type === 'd_click'
//       ? 'var(--type-white)'
//       : 'var(--type-black)'};

//   color: ${(props) => (props.type === 'outline' ? 'black' : 'white')};

//   font-weight: ${(props) =>
//     props.size === 'small' ? 500 : props.size === 'small-bold' ? 700 : 600};
//   font-size: ${(props) =>
//     props.size === 'small' || props.size === 'small-bold' ? 18 : 24}px;

//   // padding: ${(props) =>
//     props.size === 'small' ? '9px 18px 9px 18px;' : '21px 130px'};
// `;
