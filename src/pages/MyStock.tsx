import NoneLogin from './NoneLogin';

interface login {
  isLogin: boolean;
}

const MyStock = ({ isLogin }: login) => {
  return <>{isLogin ? <>내 주식 페이지</> : <NoneLogin />}</>;
};
export default MyStock;
