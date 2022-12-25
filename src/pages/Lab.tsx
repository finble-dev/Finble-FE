import NoneLogin from './NoneLogin';

interface login {
  isLogin: boolean;
}

const Lab = ({ isLogin }: login) => {
  return <>{isLogin ? <>투자실험실</> : <NoneLogin />}</>;
};
export default Lab;
