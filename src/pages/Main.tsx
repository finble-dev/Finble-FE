import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <MainBlue>main blue</MainBlue>
      <MainGreen>main green</MainGreen>
    </>
  );
};
export default Main;

const MainBlue = styled.div`
  color: var(--main-blue);
  font-size: var(--fs-h1);
  font-weight: var(--fw-h1);
`;

const MainGreen = styled.div`
  color: var(--main-green);
  font-size: var(--fs-h3);
  font-weight: var(--fw-h3);
`;
